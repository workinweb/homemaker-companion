import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import { SmallCard } from "~/components/SmallCard/SmallCard";
import Image from "next/image";

export function AboutUsSection() {
    return (
        <div id="AboutUs" className="pt-16">
            <div>
                <h2 className="text-center text-5xl font-bold text-primary">
                    {dictionary.AboutUs.texts.sectionName}
                </h2>
            </div>

            <Card className="mt-16 bg-primary px-10 py-10 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:h-[520px] lg:w-full"
                        src="/aboutus.webp"
                    />

                    <div>
                        <h2 className="mb-10 mt-10 text-center text-4xl font-bold text-white lg:mt-0">
                            {dictionary.AboutUs.texts.whatWeDoTitle}
                        </h2>
                        <p className="text-justify text-2xl text-white">
                            {dictionary.AboutUs.texts.whatWeDoText}
                        </p>
                    </div>
                </CardBody>
            </Card>
            <div className="mt-12 py-10 text-primary">
                <div className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <div>
                        <h2 className="mb-2 mt-10 text-2xl font-bold lg:mt-0">
                            {dictionary.AboutUs.texts.independenceTitle}
                        </h2>
                        <p className="text-justify text-xl">
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
                <h2 className="mb-2 text-2xl font-bold text-primary">
                    {dictionary.AboutUs.texts.whyChooseUsTitle}
                </h2>
                <p className="text-justify text-xl text-primary">
                    {dictionary.AboutUs.texts.whyChooseUsText}
                </p>
            </div>

            <div className="my-10 grid grid-cols-1 gap-10 gap-y-20 lg:grid-cols-2">
                <SmallCard
                    img="/ourPeople.svg"
                    alt="Draw of 3 co-workers"
                    type="filled"
                    title={dictionary.AboutUs.texts.ourPleopleTitle as string}
                    text={dictionary.AboutUs.texts.ourPleopleText as string}
                />
                <SmallCard
                    img="/ourProcess.svg"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.AboutUs.texts.ourProcessTitle as string}
                    text={dictionary.AboutUs.texts.ourProcessText as string}
                />

                <SmallCard
                    img="/ourPromise.svg"
                    alt="Draw of a gift "
                    title={dictionary.AboutUs.texts.ourPromiseTitle as string}
                    text={dictionary.AboutUs.texts.ourPromiseText as string}
                />

                <SmallCard
                    img="/ourProduct.svg"
                    alt="Draw of people jumping"
                    type="filled"
                    title={dictionary.AboutUs.texts.ourProductTitle as string}
                    text={dictionary.AboutUs.texts.ourProductText as string}
                />
            </div>
        </div>
    );
}
