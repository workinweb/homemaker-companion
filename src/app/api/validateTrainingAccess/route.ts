import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { password } = await req.json();

        const isValid = password === process.env.TRAINING_PASSWORD;

        return NextResponse.json({ isValid });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 },
        );
    }
}
