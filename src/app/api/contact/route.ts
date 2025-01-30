import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactUsEmailTemplate } from "~/components/EmailTemplates/ContactUsTemplate/ContactUsTemplate";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Input validation schema
const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    message: z.any(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate input
        const result = schema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid input", details: result.error.format() },
                { status: 400 },
            );
        }

        const { name, email, phone, message } = body;

        // @ts-expect-error
        const data = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: ["kbueno1077@gmail.com"],
            subject: `Contact Us Inquiry from ${name}`,
            react: ContactUsEmailTemplate({ name, email, message, phone }),
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 },
        );
    }
}
