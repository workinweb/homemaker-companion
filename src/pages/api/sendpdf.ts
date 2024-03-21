// //@ts-nocheck

// // pages/api/sendEmail.js
// import { Resend } from "resend";
// import { EmploymentTemplate } from "~/components/EmailTemplates/ContactUsTemplate/EmploymentTemplate";

// const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

// export const config = {
//     api: {
//         bodyParser: {
//             sizeLimit: "1mb",
//         },
//     },
// };

// export default async function handler(req, res) {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//     console.log("🚀 ~ handler ~ req.method:", req.method);

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//     if (req.method === "POST") {
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//         const body = await req.json();
//         const { base } = body;
//         console.log("🚀 ~ handler ~ base:", base);

//         try {
//             // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//             const buffer = Buffer.from(base.split(",")[1], "base64");

//             //@ts-expect-error
//             const data = await resend.emails.send({
//                 from: "Evan Home Care <evanhomecare@resend.dev>",
//                 to: [
//                     "kbueno1077@gmail.com",
//                     // "ezlomar62@gmail.com",
//                     // "vadiae@gmail.com",
//                 ],
//                 subject: `New Empoyment PDF SENT`,
//                 react: EmploymentTemplate({
//                     name: "This is the pdf sent by: A TEST",
//                     email: "Test@gmail.com    ",
//                     message: "TEST, this is configurable",
//                     phone: "+1 (786) 510-7807",
//                 }),
//                 attachments: [
//                     {
//                         filename: "empoymentPDF.pdf",
//                         content: buffer,
//                     },
//                 ],
//             });

//             // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//             res.status(200).json({ data });
//         } catch (e) {
//             res.status(500).json({
//                 error: e,
//                 message: "There was and error",
//             });
//         }
//     } else {
//         // Handle any other HTTP method
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
