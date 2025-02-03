import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.BASE_URL ?? "https://evanhomecare.com";
    
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',
                    '/admin/',
                ],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
