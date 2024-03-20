import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactUsEmailTemplate } from "~/components/EmailTemplates/ContactUsTemplate/ContactUsTemplate";
import { EmploymentTemplate } from "~/components/EmailTemplates/ContactUsTemplate/EmploymentTemplate";

// import nodemailer from "nodemailer";

const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb", // Adjust this value as needed
        },
    },
};

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    const { base } = body;

    try {
        // const username = "kbueno1077@gmail.com";
        // const password = "loL1077.";
        // const myEmail = "kbueno1077@gmail.com";

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const buffer = Buffer.from(base.split(",")[1], "base64");

        // const transporter = nodemailer.createTransport({
        //     host: "smtp-mail.outlook.com",
        //     port: 587,
        //     tls: {
        //         ciphers: "SSLv3",
        //         rejectUnauthorized: false,
        //     },

        //     auth: {
        //         user: username,
        //         pass: password,
        //     },
        // });

        // const mail = await transporter.sendMail({
        //     from: username,
        //     to: myEmail,
        //     subject: `Website activity from ${"email"}`,
        //     html: `
        //     <p>Name: ${"LOLAZO"} </p>
        //     <p>Email: ${"email"} </p>
        //     <p>Message: ${"message"} </p>
        //     `,
        //     attachments: [
        //         {
        //             filename: "pdfFilename.pdf",
        //             path: buffer,
        //             contentType: "application/pdf",
        //         },
        //     ],
        // });

        // @ts-expect-error
        const data = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: [
                "kbueno1077@gmail.com",
                "ezlomar62@gmail.com",
                "vadiae@gmail.com",
            ],
            subject: `New Empoyment PDF SENT`,
            react: EmploymentTemplate({
                name: "This is the pdf sent by: A TEST",
                email: "Test@gmail.com    ",
                message: "TEST, this is configurable",
                phone: "+1 (786) 510-7807",
            }),
            attachments: [
                {
                    filename: "empoymentPDF.pdf",
                    content: buffer,
                },
            ],
        });

        return NextResponse.json({ data });
    } catch (e) {
        return NextResponse.json({
            error: e,
            message: "There was and error",
        });
    }
}
