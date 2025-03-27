"use client";

import Image from "next/image";
import { SmallCard } from "~/components/Cards/SmallCard/SmallCard";
import { Title } from "~/components/Titles/Title";
import { ApryseModuleHomemaker } from "~/modules/ApryseModuleHomemaker/ApryseModuleHomemaker";
import { ContactHomemaker } from "~/modules/ContactUs/ContactHomemaker";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import TeamSection from "~/sections/Team/TeamSection";

function page() {
    return (
        <main className="pb-5">
            <div className="hidden sm:block">
                <div className="mx-auto mb-5 flex max-w-[1440px] items-center justify-between px-10 ">
                    <div className="  flex items-center gap-4">
                        <Image
                            width={250}
                            height={250}
                            src="/logo.webp"
                            alt="Evan Home Care Logo"
                            className="h-48 w-48 object-contain sm:h-48 sm:w-48"
                        />
                    </div>

                    <div>
                        <p>
                            For inquiries, call us today{" "}
                            <a
                                href="tel:+13213009077"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                (321) 300-9077
                            </a>
                        </p>
                        <p>We are available 24 hours a day, 7 days a week</p>
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
                            Evan Home Care Services is a Homemaker and Companion
                            service provider based in Central Florida, including
                            several counties including Orange, Osceola, and
                            Seminole. We offer services in the comfort of your
                            home, hospital, assisted living facility, or nursing
                            home, enhancing your well-being and quality of life
                            under the supervision of our caregivers, who strive
                            to provide you with the comprehensive care you
                            deserve, with excellent value and flexibility
                            scheduling. To request Homemaker and Companion
                            services, please call{" "}
                            <a
                                href="tel:+13213009077"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                (321) 300-9077
                            </a>
                            . We are available 24/7, year-round, for in-home
                            visits. Let&#39;s get started! We&#39;re here to
                            help you maintain your service in your own home.
                            These services do not include any type of Personal
                            Care or Skilled Nursing in accordance with state
                            law.
                        </p>
                    </div>
                    <div className="mt-10 sm:mt-20">
                        <div className="my-10 flex flex-col gap-10">
                            <div className="flex flex-col lg:flex-row lg:gap-10">
                                <div className="mb-10 flex-1 lg:mb-0">
                                    <SmallCard
                                        img="/3.jpg"
                                        alt="Our Mission"
                                        type="filled"
                                        title={"Mission"}
                                        text={`Our mission is to improve the lives of our clients by providing the highest quality care services in their homes and companionships. We are committed to fostering independence, promoting well-being, and ensuring a safe, comfortable, and nurturing family environment.`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <SmallCard
                                        img="/4.jpg"
                                        alt="Our Vission"
                                        type="filled"
                                        title={"Vission"}
                                        text={`To create a compassionate and supportive environment where people can maintain their independence and dignity while receiving the highest quality care in their homes and companionships.`}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-full lg:w-1/2">
                                    <SmallCard
                                        img="/7-core_values.jpg"
                                        alt="Draw of a gift"
                                        type="filled"
                                        title={"Core Values"}
                                        text={`Compassion: We treat each client with kindness, empathy, and respect.\nIntegrity: We uphold honesty, transparency, and professionalism in everything we do.\nDignity: We honor and respect each person's individuality and choices.\nExcellence: We strive for the highest standards of care for our clients.\nCommunity: We foster meaningful relationships and social engagement for overall well-being.`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <TeamSection />
                    </div>
                    <div>
                        <Title title={"Service Aggreetment"} />
                        <ApryseModuleHomemaker />
                    </div>
                    <div id="ContactUs">
                        <Title
                            title={"Contact Us"}
                            subtitle={
                                "At Evan Home Care Services LLC, we are happy to hear from you. Please send us a message with your comments and suggestions. We will get back to you as soon as possible."
                            }
                        />

                        <div className="flex justify-center">
                            <ContactHomemaker />
                        </div>
                    </div>{" "}
                </div>

                <FloatingButton />
            </div>
        </main>
    );
}

export default page;
