import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        // Replace this with your actual password validation logic
        const isValid = password === process.env.TUTORIAL_PASSWORD;

        return NextResponse.json({ isValid });
    } catch (error) {
        console.error("Error validating tutorial access:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
