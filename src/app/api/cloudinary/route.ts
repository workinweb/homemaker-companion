import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    const { folder, public_id } = body;
    const timestamp = Math.round(new Date().getTime() / 1000);

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const signature = cloudinary.utils.api_sign_request(
            {
                // filename_override: filename_override,
                folder: folder,
                public_id: public_id,
                timestamp: timestamp,
                // upload_preset: upload_preset,
            },

            process.env.CLOUDINARY_API_SECRET ?? "",
        );

        return Response.json({ signature, timestamp });
    } catch (error) {
        console.error("Error generating signature:", error);
        return Response.json({
            error,
            errorMessage: "Error generating signature",
        });
    }
}
