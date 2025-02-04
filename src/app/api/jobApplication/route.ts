/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { JobApplicationTemplate } from "~/components/EmailTemplates/JobApplicationTemplate/JobApplicationTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
import axios from "axios";

export async function POST(req: Request): Promise<NextResponse> {
    const body = await req.json();
    const { url, name, email } = body;

    const response = await axios.get(url, { responseType: "arraybuffer" });
    const base64String = Buffer.from(response.data, "binary").toString(
        "base64",
    );

    try {
        // @ts-expect-error
        const EvanEmailResponse = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: ["kbueno1077@gmail.com"],
            subject: `New Employment Request`,
            react: JobApplicationTemplate({
                name: name,
                email: email,
                message: "",
                phone: "",
            }),
            attachments: [
                {
                    filename: `${name}_employment_request.pdf`,
                    content: base64String,
                },
            ],
        });

        return NextResponse.json({
            EvanEmailResponse,
        });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 },
        );
    }
}
