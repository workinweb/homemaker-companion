import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";

export function ServicesSection() {
    return (
        <div id="Services" className="pt-16">
            <div>
                <h2 className="mb-5 text-center text-5xl font-bold text-primary">
                    {dictionary.Services.texts.serviceTitle}
                </h2>

                <h3 className="text-center text-3xl text-primary">
                    {dictionary.Services.texts.providedServices}
                </h3>
            </div>

            <Card className="mt-16 bg-primary px-10 py-10 text-white xl:translate-x-[-200px]">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <Image
                        width={1024}
                        height={1024}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/service1.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-2xl font-bold text-white lg:mt-0">
                            {dictionary.Services.texts.personalSupportTilte}
                        </h2>
                        <p className="text-justify text-xl text-white">
                            {dictionary.Services.texts.personalSupportText}
                        </p>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-16 bg-primary px-10 py-10 text-white xl:translate-x-[200px]">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <Image
                        width={1024}
                        height={1024}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair reading"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/service2.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-2xl font-bold text-white lg:mt-0">
                            {dictionary.Services.texts.lifeSkillsTilte}
                        </h2>
                        <p className="text-justify text-xl text-white">
                            {dictionary.Services.texts.lifeSkillsText}
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
