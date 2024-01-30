"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import { SmallCard } from "~/components/SmallCard/SmallCard";

export function AboutUsSection() {
    return (
        <div id="AboutUs" className="pt-16">
            <div>
                <h2 className="text-center text-5xl font-bold text-primary">
                    {dictionary.AboutUs.texts.section}
                </h2>
            </div>
            <Card className="mt-16 bg-primary px-10 py-10 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <img
                        alt="Card background"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/aboutus.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-4xl font-bold text-white lg:mt-0">
                            {" "}
                            {dictionary.AboutUs.texts.cardTitle}
                        </h2>
                        <p className="text-justify text-2xl text-white">
                            {dictionary.AboutUs.texts.cardParagraph}
                        </p>
                    </div>
                </CardBody>
            </Card>
            <div className="mt-12 py-10 text-primary">
                <div className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <div>
                        <h2 className="mb-2 mt-10 text-2xl font-bold lg:mt-0">
                            {" "}
                            {dictionary.AboutUs.texts.title2}
                        </h2>
                        <p className="text-justify text-xl">
                            {dictionary.AboutUs.texts.paragraph2}
                        </p>
                    </div>

                    <img
                        alt="Card background"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/aboutus2.webp"
                    />
                </div>
            </div>

            <div className="py-8">
                <h2 className="mb-2 text-2xl font-bold text-primary">
                    {dictionary.AboutUs.texts.title3}
                </h2>
                <p className="text-justify text-xl text-primary">
                    {dictionary.AboutUs.texts.paragraph3}
                </p>
            </div>

            <div className="my-10 grid grid-cols-1 gap-10 gap-y-20 lg:grid-cols-2">
                <SmallCard
                    img="/ourPeople.svg"
                    type="filled"
                    title={dictionary.AboutUs.texts.title4 as string}
                    text={dictionary.AboutUs.texts.paragraph4 as string}
                />
                <SmallCard
                    img="/ourProcess.svg"
                    title={dictionary.AboutUs.texts.title5 as string}
                    text={dictionary.AboutUs.texts.paragraph5 as string}
                />

                <SmallCard
                    img="/ourPromise.svg"
                    title={dictionary.AboutUs.texts.title7 as string}
                    text={dictionary.AboutUs.texts.paragraph7 as string}
                />

                <SmallCard
                    img="/ourProduct.svg"
                    type="filled"
                    title={dictionary.AboutUs.texts.title6 as string}
                    text={dictionary.AboutUs.texts.paragraph6 as string}
                />
            </div>
        </div>
    );
}
