import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import "./fonts.css";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const myFont = localFont({
    src: "./bsItalic.ttf",
    variable: "--font-brush",
});

const queryClient = new QueryClient();

export const metadata: Metadata = {
    title: {
        default: "Evan Home Care - Home Care Services",
        template: "%s | Evan Home Care",
    },
    description:
        "Evan Home Care provides high-quality personalized home care services focused on improving quality of life for people with disabilities. Professional caregivers serving Florida.",
    keywords: [
        "Evan Home Care",
        "Home Care Services",
        "Caregiver Services",
        "Disability Care",
        "Home Health Care",
        "Florida Home Care",
        "Personal Care Services",
        "Senior Care",
        "Home Care Agency",
        "Professional Caregivers",
        "Medicaid Services",
        "Home Health Services",
    ],
    authors: [{ name: "Evan Home Care" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.BASE_URL,
        siteName: "Evan Home Care",
        title: "Evan Home Care - Quality Home Care Services",
        description:
            "Professional home care services focused on improving quality of life. Serving Florida with experienced caregivers.",
        images: [
            {
                url: `${process.env.BASE_URL}/logo.webp`,
                width: 150,
                height: 150,
                alt: "Evan Home Care Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Evan Home Care - Quality Home Care Services",
        description:
            "Professional home care services focused on improving quality of life. Serving Florida with experienced caregivers.",
        images: [`${process.env.BASE_URL}/logo.webp`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable} ${myFont.variable}`}>
                <Providers>
                    {/* <div className="mb-2">
                        <CustomNavbar />
                    </div> */}

                    {children}
                </Providers>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
