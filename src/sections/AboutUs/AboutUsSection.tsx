import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import { SmallCard } from "~/components/SmallCard/SmallCard";
import Image from "next/image";

export function AboutUsSection() {
    return (
        <div id="AboutUs" className="pt-16">
            <div>
                <h2 className="text-center text-4xl font-bold text-primary">
                    {dictionary.AboutUs.texts.sectionName}
                </h2>
            </div>

            <Card className="mt-16 bg-primary px-10 py-5 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/aboutus.webp"
                    />

                    <div>
                        <p className="text-justify text-xl text-white">
                            {dictionary.AboutUs.texts.whatWeDoText}
                        </p>
                    </div>
                </CardBody>
            </Card>
            <div className="mt-12 py-10 text-primary">
                <div className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <div>
                        <h2 className="mb-2 mt-10 text-xl font-bold lg:mt-0">
                            {dictionary.AboutUs.texts.independenceTitle}
                        </h2>
                        <p className="text-justify text-lg">
                            {dictionary.AboutUs.texts.independenceText}
                        </p>
                    </div>

                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/aboutus2.webp"
                    />
                </div>
            </div>

            <div className="py-8">
                <h2 className="mb-2 text-xl font-bold text-primary">
                    {dictionary.AboutUs.texts.whyChooseUsTitle}
                </h2>
                <p className="text-justify text-lg text-primary">
                    {dictionary.AboutUs.texts.whyChooseUsText}
                </p>
            </div>
        </div>
    );
}
