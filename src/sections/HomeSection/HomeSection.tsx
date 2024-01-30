"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { SearchInput } from "~/modules/Search/SearchInput";
import dictionary from "~/dictionary/dictionaryLink";

export function HomeSection() {
    return (
        <div id="Home">
            <div className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                <div className="hidden sm:block" style={{ zIndex: 10 }}>
                    <img src="/logo.webp" alt={"Evan Home Care Logo"} />
                </div>

                <span className="text-lg italic text-primary">
                    {" "}
                    {
                        "“Making a difference in people’s lives, where quality of life counts”."
                    }
                </span>

                <SearchInput />
            </div>

            <Card className="mt-12 bg-primary px-10 py-10 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <p className="text-justify text-xl sm:text-2xl">
                        {dictionary.Home.texts.cardParagraph}
                    </p>

                    <img
                        alt="Card background"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:mr-[-35px] lg:h-[380px] lg:w-full"
                        src="/woofer.webp"
                    />
                </CardBody>
            </Card>

            <div>
                <div className="pb-8 pt-20">
                    <p className="text-justify text-xl text-primary">
                        {dictionary.Home.texts.paragraph1}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-2xl font-bold text-primary">
                        {dictionary.Home.texts.goalsTitle}
                    </h2>
                    <p className="text-justify text-xl text-primary">
                        {dictionary.Home.texts.goalsParagraph}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-2xl font-bold text-primary">
                        {dictionary.Home.texts.servicesTo}
                    </h2>
                    <ul className="text-xl text-primary">
                        {Array.isArray(dictionary.Home?.texts?.disabilities) &&
                            dictionary.Home?.texts?.disabilities?.map(
                                (disability) => (
                                    <li key={disability}>{disability}</li>
                                ),
                            )}
                    </ul>
                </div>

                <div className="py-8">
                    <p className="text-justify text-xl text-primary">
                        <strong>{dictionary.Home.texts.name}</strong>{" "}
                        {dictionary.Home.texts.paragraph2}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-2xl font-bold text-primary">
                        {dictionary.Home.texts.support}
                    </h2>
                    <p className="text-justify text-xl text-primary">
                        {dictionary.Home.texts.paragraph3}
                    </p>
                </div>
            </div>
        </div>
    );
}

const disabilities = [
    "People severely impaired by autism.",
    "Cerebral palsy.",
    "Spina bifida.",
    "Intellectual disabilities.",
    "Down syndrome.",
    "Prader-Willi syndrome.",
    "Phelan-McDermid syndrome.",
];
