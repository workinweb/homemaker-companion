"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Title } from "~/components/Titles/Title";
import dictionary from "~/dictionary/dictionaryLink";
import { ContactHomemaker } from "~/modules/ContactUs/ContactHomemaker";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import { Footer } from "~/modules/Footer/Footer";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import { ServicesSection } from "~/sections/Services/ServicesSection";
import SquaresSection from "~/sections/Squares/SquaresSection";
import TeamSection from "~/sections/Team/TeamSection";

const ApryseModuleHomemaker = dynamic(
    () =>
        import("~/modules/ApryseModuleHomemaker/ApryseModuleHomemaker").then(
            (mod) => mod.ApryseModuleHomemaker,
        ),
    {
        ssr: false,
    },
);

export default function Homemaker() {
    const texts = dictionary.Homemaker.texts;
    const phone = typeof texts.phone === "string" ? texts.phone : "";
    const phoneDigits = phone.replace(/[^0-9]/g, "");

    return (
        <>
            <main className="pb-5">
                <div className="hidden sm:block">
                    <div className="mx-auto mb-5 flex max-w-[1440px] items-center justify-between px-10">
                        <div className="mt-2 flex flex-col items-center">
                            <Image
                                width={260}
                                height={260}
                                src="/logo2.webp"
                                alt="Evan Home Care Logo"
                                className="h-48 w-48 object-contain sm:h-48 sm:w-48"
                            />
                            <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2 ">
                                <p
                                    className="font-bold text-primary/80"
                                    style={{
                                        textShadow:
                                            "0 0 0.5px currentColor, -0.3px 0 0 currentColor, 0.3px 0 0 currentColor",
                                        WebkitTextStroke: "0.15px currentColor",
                                        //@ts-ignore
                                        textStroke: "0.15px currentColor",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    License #
                                </p>
                                <p
                                    className="font-bold text-primary/80"
                                    style={{
                                        textShadow:
                                            "0 0 0.5px currentColor, -0.3px 0 0 currentColor, 0.3px 0 0 currentColor",
                                        WebkitTextStroke: "0.15px currentColor",
                                        //@ts-ignore
                                        textStroke: "0.15px currentColor",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    239355
                                </p>
                            </div>
                        </div>

                        <div className="text-xl font-bold text-primary">
                            <p>
                                For inquiries, call us today{" "}
                                <a
                                    href="tel:+13213009077"
                                    className="underline hover:font-bold"
                                >
                                    {phone}
                                </a>
                            </p>
                            <p>{texts.availability}</p>
                        </div>
                    </div>
                </div>

                <CustomNavbar />

                <div className="flex w-full flex-col items-center">
                    <div className="w-full max-w-[1440px] px-3 pb-20 sm:px-10">
                        <div>
                            <div className="my-8 flex justify-end gap-4">
                                <a
                                    href="/Evan HCS_Flyer.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/10 bg-primary px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-700"
                                >
                                    Flyer
                                </a>
                                <a
                                    href="/Evan HCS_Brochure_Updated.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-white px-6 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary-100"
                                >
                                    Brochure
                                </a>
                            </div>
                        </div>
                        <div className="mb-20 mt-10 rounded-2xl bg-primary/5 p-10">
                            <p className="text-left text-lg leading-relaxed text-primary/90">
                                {texts.description}
                                {
                                    " To request Homemaker and Companion services, please call "
                                }
                                <a
                                    href={`tel:+1${phoneDigits}`}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    {phone}
                                </a>
                                {
                                    ". We are available 24/7, year-round, for in-home visits. Let's get started! We're here to help you maintain your service in your own home. "
                                }
                                {texts.legalDisclaimer}
                            </p>
                        </div>

                        <SquaresSection />
                        <TeamSection />
                        <ServicesSection />

                        <div className="mb-10 mt-10">
                            <ApryseModuleHomemaker />
                        </div>

                        <div className="mb-20 mt-10 rounded-2xl bg-primary/5 p-10">
                            <h2 className="mb-6 text-3xl font-bold text-primary">
                                Non-Discrimination Policy
                            </h2>
                            <p className="text-left text-lg leading-relaxed text-primary/90">
                                Evan Home Care Services promotes equality in the
                                provision of services and employment. Our
                                company does not exclude, discriminate against,
                                or deny benefits to any eligible individual,
                                client, or employee based on race, gender,
                                sexual orientation, color, religion, age,
                                disability, ancestry, or citizenship.
                            </p>
                        </div>

                        <div className="mb-20 mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 md:flex-row-reverse md:gap-10 md:p-10">
                            <a
                                href="https://info.flclearinghouse.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Florida Clearinghouse website"
                                className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-xl border border-primary/30 bg-white shadow-sm sm:h-44 sm:w-44 md:h-48 md:w-48"
                            >
                                <Image
                                    src="/care_provider_bg.jpeg"
                                    alt="Care Provider Background Screening Clearinghouse"
                                    fill
                                    sizes="(max-width: 768px) 176px, (max-width: 1024px) 192px, 208px"
                                    className="object-contain"
                                />
                            </a>
                            <div className="flex min-w-0 flex-1 flex-col">
                                <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                                    Care Provider Background Screening Clearinghouse
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 sm:text-base">
                                    We are committed to safety and trust. We
                                    participate in the Florida Care Provider
                                    Background Screening Clearinghouse to ensure all
                                    our staff meet the highest standards of
                                    background screening for your peace of mind.
                                </p>
                                <a
                                    href="https://info.flclearinghouse.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center self-start text-sm font-semibold text-primary hover:underline"
                                >
                                    Visit Website
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div id="ContactUs">
                            <Title
                                title="Contact Us"
                                subtitle={
                                    typeof texts.contactSubtitle === "string"
                                        ? texts.contactSubtitle
                                        : undefined
                                }
                            />

                            <div className="flex justify-center">
                                <ContactHomemaker />
                            </div>
                        </div>
                    </div>

                    <FloatingButton />
                </div>
            </main>

            <Footer />
        </>
    );
}
