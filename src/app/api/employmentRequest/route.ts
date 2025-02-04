/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmploymentTemplate } from "~/components/EmailTemplates/EmploymentTemplate/EmploymentTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<NextResponse> {
    const body = await req.json();
    const { name, email, zip, DOB } = body;

    try {
        // @ts-expect-error
        const EvanEmailResponse = await resend.emails.send({
            from: "Evan Home Care <evanhomecare@resend.dev>",
            to: ["evanhomecare@gmail.com"],
            subject: `New Employment Interest from ${name}`,
            react: EmploymentTemplate({
                name: name,
                email: email,
                zip: zip,
                DOB: DOB,
            }),
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
