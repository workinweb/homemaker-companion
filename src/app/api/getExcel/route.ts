import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    try {
        const result = await cloudinary.search
            .expression("folder:evanhomecare/excel/*")
            .execute();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (result?.total_count as number) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return NextResponse.json(result.resources[0].url);
        } else {
            throw Error("No file found");
        }
    } catch (error) {
        console.error("Error fetching files from Cloudinary:", error);
        return NextResponse.json(
            { error: "Failed to fetch files" },
            { status: 500 },
        );
    }
}
