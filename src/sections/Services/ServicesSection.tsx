import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";

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

            <Card className="mt-16 bg-primary px-10 py-5 text-white xl:translate-x-[-200px]">
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
            </Card>

            <Card className="mt-16 bg-primary px-10 py-5 text-white xl:translate-x-[200px]">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0  lg:flex-row lg:gap-10">
                    <Image
                        width={1024}
                        height={1024}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair reading"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/service2.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-xl font-bold text-white lg:mt-0">
                            {dictionary.Services.texts.lifeSkillsTilte}
                        </h2>
                        <p className="text-justify text-lg text-white">
                            {dictionary.Services.texts.lifeSkillsText}
                        </p>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-16 bg-primary px-10 py-5 text-white xl:translate-x-[-200px]">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <Image
                        width={512}
                        height={512}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[-20px] object-cover py-20 lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/placeOfService.svg"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-xl font-bold text-white lg:mt-0">
                            {dictionary.Services.texts.placeOfServiceTitle}
                        </h2>
                        <p className="text-justify text-lg text-white">
                            {dictionary.Services.texts.placeOfServiceText}
                        </p>
                    </div>
                </CardBody>
            </Card>

            <div className="mt-16 py-8">
                <h2 className="mb-2 text-xl font-bold text-primary">
                    {dictionary.Services.texts.placeOfService2Title}
                </h2>
                <h2 className="mb-2 text-xl font-bold text-primary">
                    {dictionary.Services.texts.placeOfService3Title}
                </h2>
                <ul className="text-lg text-primary">
                    {Array.isArray(
                        dictionary.Services?.texts?.placeOfService2Text,
                    ) &&
                        dictionary.Services?.texts?.placeOfService2Text?.map(
                            (serv) => <li key={serv}>{serv}</li>,
                        )}
                </ul>
            </div>

            <div className="py-8">
                <h2 className="mb-2 text-xl font-bold text-primary">
                    {dictionary.Services.texts.under21Title}
                </h2>

                <p className="text-justify text-lg text-primary">
                    {dictionary.Services.texts.under21Text}
                </p>
            </div>

            <div className="py-8">
                <h2 className="mb-2 text-xl font-bold text-primary">
                    {dictionary.Services.texts.placeOfService4Title}
                </h2>

                <p className="text-justify text-lg text-primary">
                    {dictionary.Services.texts.placeOfService4Text}
                </p>
            </div>
        </div>
    );
}
