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

export const metadata: Metadata = {
    icons: { icon: "../favicon.ico" },
    keywords: [
        "Evan Home Care",
        "Care Giver",
        "Home Care",
        "Home Services",
        "Medicaid Services",
    ],
    title: {
        default: "Evan Home Care",
        template: "%s - Evan Home Care",
    },
    twitter: { card: "summary_large_image" },
    description: "Evan Home Care",
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
                    <div className="mb-2">
                        <CustomNavbar />
                    </div>

                    {children}
                </Providers>
            </body>
        </html>
    );
}
