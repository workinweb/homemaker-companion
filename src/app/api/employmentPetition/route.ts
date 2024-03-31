import { JobApplicationResponseTemplate } from "./../../../components/EmailTemplates/JobApplicationResponseTemplate/JobApplicationResponseTemplate";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmploymentTemplate } from "~/components/EmailTemplates/EmploymentTemplate/EmploymentTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
import axios from "axios";

export async function POST(req: Request): Promise<NextResponse> {
    const body = await req.json();
    const { url, name, subject, email, message, phone } = body;

    const response = await axios.get(url, { responseType: "arraybuffer" });
    const base64String = Buffer.from(response.data, "binary").toString(
        "base64",
    );

    try {
        // @ts-expect-error
        const EvanEmailResponse = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: [
                "kbueno1077@gmail.com",
                // "ezlomar62@gmail.com",
                // "vadiae@gmail.com",
                // email,
            ],
            subject: `New Empoyment Petition`,
            react: EmploymentTemplate({
                name: name,
                email: email,
                message: "",
                phone: "",
            }),
            attachments: [
                {
                    filename: "empoymentPDF.pdf",
                    content: base64String,
                },
            ],
        });

        // const CustomerEmailResponse = await resend.emails.send({
        //     from: "Evan Home Care <evanhomecare@resend.dev>",
        //     to: [
        //         // email,
        //     ],
        //     subject: ``,
        //     react: JobApplicationResponseTemplate({}),
        // });

        return NextResponse.json({
            EvanEmailResponse,
            CustomerEmailResponse: {},
        });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 },
        );
    }
}
