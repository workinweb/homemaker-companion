/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactUsEmailTemplate } from "~/components/EmailTemplates/ContactUsTemplate/ContactUsTemplate";
import { EmploymentTemplate } from "~/components/EmailTemplates/ContactUsTemplate/EmploymentTemplate";

const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

import axios from "axios";

export async function POST(request: Request): Promise<NextResponse> {
    const response = await axios.get(
        "https://res.cloudinary.com/dub477vzt/image/upload/v1711212345/mypdf/pdf.pdf",
        { responseType: "arraybuffer" },
    );
    const base64String = Buffer.from(response.data, "binary").toString(
        "base64",
    );

    try {
        // @ts-expect-error
        const data = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: [
                "kbueno1077@gmail.com",
                // "ezlomar62@gmail.com",
                // "vadiae@gmail.com",
            ],
            subject: `New Empoyment PDF SENT`,
            react: EmploymentTemplate({
                name: "This is the pdf sent by: A TEST",
                email: "Test@gmail.com",
                message: "base",
                phone: "+1 (786) 510-7807",
            }),
            attachments: [
                {
                    filename: "empoymentPDF.pdf",
                    content: base64String,
                },
            ],
        });
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 }, // The webhook will retry 5 times waiting for a 200
        );
    }
}
