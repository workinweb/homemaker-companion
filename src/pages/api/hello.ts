/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//@ts-nocheck

// pages/api/sendEmail.js
import { Resend } from "resend";
import { EmploymentTemplate } from "~/components/EmailTemplates/ContactUsTemplate/EmploymentTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false,
    },
};

const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        const uploadDir = "./uploads/"; // Specify the directory where you want to save the uploaded files

        const options: formidable.Options = {};
        if (true) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            options.uploadDir = uploadDir;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            options.filename = (name, ext, path, form) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return Date.now().toString() + "_" + path.originalFilename;
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        options.maxFileSize = 4000 * 1024 * 1024;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        options.keepExtensions = true;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const form = formidable(options);

        // Process a POST request
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        // const { base } = req.body;

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = `${uploadDir}/base64.txt`;
        const writeStream = fs.createWriteStream(filePath, { flags: "a" }); // 'a' flag to append data

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        form.onPart = (part) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (!part.filepath) {
                // This is a form field (e.g., base64 chunk)
                let base64Chunk = "";
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                part.on("data", (chunk) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    base64Chunk += chunk.toString();
                    console.log(
                        "🚀 ~ part.on ~ base64Chunk:",
                        base64Chunk.length,
                    );
                });

                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                part.on("end", async () => {
                    writeStream.write(base64Chunk);
                    writeStream.end();

                    const readStream = fs.createReadStream(filePath);
                    let wholeBase = "";

                    readStream.on("data", (chunk) => {
                        // Process each chunk of data from the file
                        wholeBase += chunk.toString();
                    });

                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    readStream.on("end", async () => {
                        console.log(
                            "🚀 ~ fileStream.on ~ wholeBase:",
                            wholeBase.length,
                        );

                        const buffer = Buffer.from(
                            wholeBase.split(",")[1],
                            "base64",
                        );

                        //  @ts-expect-error
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
                    });
                });
            } else {
                // Handle file upload chunk
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({
                message: "Base64 data uploaded successfully",
            });
        });

        try {
            // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access

            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            res.status(200).json({ data });
        } catch (e) {
            res.status(500).json({
                error: e,
                message: "There was and error",
            });
        }
    } else {
        // Handle any other HTTP method
        // Handle any other HTTP method
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
