/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactUsEmailTemplate } from "~/components/EmailTemplates/ContactUsTemplate/ContactUsTemplate";
import { EmploymentTemplate } from "~/components/EmailTemplates/ContactUsTemplate/EmploymentTemplate";

const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

export async function POST(request: Request): Promise<NextResponse> {
    const body = (await request.json()) as HandleUploadBody;

    try {
        const jsonResponse = await handleUpload({
            body,
            request,
            onBeforeGenerateToken: async (
                pathname: string,
                /* clientPayload?: string, */
            ) => {
                // Generate a client token for the browser to upload the file

                // ⚠️ Authenticate users before generating the token.
                // Otherwise, you're allowing anonymous uploads.
                // const { user } = await auth(request);
                // const userCanUpload = canUpload(user, pathname);
                // if (!userCanUpload) {
                //     throw new Error("Not authorized");
                // }

                return {
                    allowedContentTypes: [
                        "string",
                        "application/pdf",
                        "image/jpeg",
                        "image/png",
                        "image/gif",
                    ],
                    // tokenPayload: JSON.stringify({
                    //     // optional, sent to your server on upload completion
                    //     userId: user.id,
                    // }),
                };
            },
            //@ts-ignore
            onUploadCompleted: async ({ blob, tokenPayload }) => {
                console.log("🚀 ~ onUploadCompleted: ~ blob:", blob);
                // Get notified of client upload completion
                // ⚠️ This will not work on `localhost` websites,
                // Use ngrok or similar to get the full upload flow

                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                const buffer = Buffer.from(blob.split(",")[1], "base64");
                console.log("blob upload completed", blob, tokenPayload);

                try {
                    // Run any logic after the file upload completed
                    // const { userId } = JSON.parse(tokenPayload);
                    // await db.update({ avatar: blob.url, userId });

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
                                content: buffer,
                            },
                        ],
                    });
                } catch (error) {
                    throw new Error("Could not update user");
                }
            },
        });

        return NextResponse.json(jsonResponse);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 }, // The webhook will retry 5 times waiting for a 200
        );
    }
}
