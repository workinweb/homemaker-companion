import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import { AccordionCard } from "~/components/AccordionCard/AccordionCard";

export function ServicesSection() {
    return (
        <div id="Services" className="pt-16">
            <div>
                <h2 className="mb-5 text-center text-4xl font-bold text-primary">
                    {dictionary.Services.texts.serviceTitle}
                </h2>

                <h3 className="text-center text-xl text-primary">
                    {dictionary.Services.texts.providedServices}
                </h3>
            </div>

            <div className="flex items-start gap-8">
                <AccordionCard
                    img="/service1.webp"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={
                        dictionary.Services.texts.personalSupportTilte as string
                    }
                    text={
                        dictionary.Services.texts
                            .personalSupportShowText as string
                    }
                    hiddenText={[
                        dictionary.Services.texts.personalHiddenText as string,
                        dictionary.Services.texts
                            .personalSupportPlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .personalSupportPlaceOfServiceText as string,
                    ]}
                />

                <AccordionCard
                    img="/service2.webp"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.lifeSkillsTilte as string}
                    text={
                        dictionary.Services.texts.lifeSkillsShowText as string
                    }
                    hiddenText={[
                        dictionary.Services.texts
                            .lifeSkillsHiddenText as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfServiceText as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfService2Text as string,
                    ]}
                />

                <AccordionCard
                    img="/service1.webp"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.under21Title as string}
                    text={dictionary.Services.texts.under21ShowText as string}
                    hiddenText={[
                        dictionary.Services.texts.under21HiddenText as string,
                        dictionary.Services.texts
                            .under21TitlePlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .under21TitlePlaceOfServiceText as string,
                    ]}
                />
            </div>

            {/* <Card className="mt-16 bg-primary px-10 py-5 text-white xl:translate-x-[-200px]">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <Image
                        width={1024}
                        height={1024}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/service1.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-xl font-bold text-white lg:mt-0">
                            {dictionary.Services.texts.personalSupportTilte}
                        </h2>
                        <p className="text-justify text-lg text-white">
                            {dictionary.Services.texts.personalSupportText}
                        </p>
                    </div>
                </CardBody>
            </Card> */}
        </div>
    );
}
