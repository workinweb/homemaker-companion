import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { SearchInput } from "~/modules/Search/SearchInput";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import styles from "./home.module.css";
import { SmallCard } from "~/components/Cards/SmallCard/SmallCard";

export function HomeSection() {
    return (
        <div id="Home">
            {/* Hero Section */}
            <div className="relative mb-10">
                {/* Top Navigation Bar  */}
                <div className="absolute left-0 right-0 top-0 z-20 w-full px-4 py-3">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image
                                width={150}
                                height={150}
                                src="/logo.webp"
                                alt="Evan Home Care Logo"
                                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                            />
                            <div className="hidden sm:block">
                                <h3 className="text-xl font-bold text-primary">
                                    Evan Home Care
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Professional Healthcare Services
                                </p>
                            </div>
                        </div>
                        <Card className="flex items-center bg-white/80 p-2">
                            <SearchInput />
                        </Card>
                    </div>
                </div>

                {/* Main Content */}
                <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-primary/50 to-primary/80 p-4 px-8 pb-8">
                    <div className="relative z-10 flex flex-col gap-8 pt-24 md:flex-row md:pt-48">
                        {/* Left Column - Content */}
                        <div className="flex flex-1 flex-col justify-center space-y-8 pt-8 md:pt-20">
                            <h1
                                className={`${styles.slogan} max-w-xl text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-tight text-gray-900`}
                            >
                                "Making a difference in people's lives, where
                                quality of life counts"
                            </h1>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#Services"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-primary/90"
                                >
                                    Explore Our Services
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-8 flex flex-wrap items-center gap-6 text-base text-gray-600">
                                <span className="flex items-center gap-2 text-white">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Licensed & Insured
                                </span>
                                <span className="flex items-center gap-2 text-white">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Contact Support
                                </span>
                                <span className="flex items-center gap-2 text-white">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                    Experienced Staff
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative flex-1">
                            <div className="relative">
                                <Image
                                    width={800}
                                    height={800}
                                    quality={100}
                                    alt="Healthcare professional with patient"
                                    src="/1-Home Banner azul.png"
                                    className="h-auto w-full rounded-lg object-contain"
                                    priority
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(45deg, var(--tw-color-primary) 0%, transparent 50%), 
                                                   linear-gradient(135deg, transparent 50%, var(--tw-color-primary) 100%)`,
                                    }}
                                ></div>
                            </div>

                            {/* Floating Stats Card */}
                            <Card className="mx-auto flex w-72 justify-center bg-white/95 shadow-xl backdrop-blur-sm sm:absolute sm:bottom-8 sm:right-8">
                                <CardBody className="p-6">
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">
                                                Patient Satisfaction
                                            </p>
                                            <p className="text-3xl font-bold text-primary">
                                                100%
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">
                                                Professional Staff
                                            </p>
                                            <p className="text-3xl font-bold text-primary">
                                                Fully Certified
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Mission Statement Section */}
            <div className="mb-20 rounded-2xl bg-primary/5 p-10">
                <h2 className="mb-6 text-3xl font-bold text-primary">
                    Evan Home Care
                </h2>
                <p className="text-left text-lg leading-relaxed text-primary/90">
                    {dictionary.Home.texts.agencyFor}
                </p>
            </div>

            {/* Services Cards Grid */}
            <div className="mt-10 sm:mt-20">
                <div className="my-10 grid grid-cols-1 gap-10 gap-y-10 lg:grid-cols-2">
                    <SmallCard
                        img="/2- Mission.png"
                        alt="Draw of a gift"
                        type="filled"
                        title={dictionary.Home.texts.missionTitle as string}
                        text={dictionary.Home.texts.missionText as string}
                    />

                    <SmallCard
                        img="/3-Goals.png"
                        alt="Draw of people jumping"
                        title={dictionary.Home.texts.goalsTitle as string}
                        text={dictionary.Home.texts.goalsText as string}
                    />

                    <SmallCard
                        img="/4-Our people.png"
                        alt="Draw of 3 co-workers"
                        title={dictionary.Home.texts.ourPleopleTitle as string}
                        text={dictionary.Home.texts.ourPleopleText as string}
                    />
                    <SmallCard
                        img="/5-Our promise.png"
                        alt="Draw of a whiteboard with bussiness cards"
                        type="filled"
                        title={dictionary.Home.texts.ourPromiseTitle as string}
                        text={dictionary.Home.texts.ourPromiseText as string}
                    />
                </div>
            </div>
        </div>
    );
}
