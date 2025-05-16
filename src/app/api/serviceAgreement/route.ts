/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import axios from "axios";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ServiceAgreementTemplate } from "~/components/EmailTemplates/ServiceAgreementTemplate/ServiceAgreementTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<NextResponse> {
    const body = await req.json();
    const { url } = body;

    const response = await axios.get(url, { responseType: "arraybuffer" });
    const base64String = Buffer.from(response.data, "binary").toString(
        "base64",
    );

    try {
        // @ts-expect-error
        const EvanEmailResponse = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: ["evanhomecare@gmail.com"],
            subject: `New service agreement`,
            react: ServiceAgreementTemplate({
                name: "",
                email: "",
                message: "",
                phone: "",
            }),
            attachments: [
                {
                    filename: `service_agreement.pdf`,
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
