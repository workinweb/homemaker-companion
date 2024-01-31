import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { SearchInput } from "~/modules/Search/SearchInput";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import styles from "./home.module.css";
import { SmallCard } from "~/components/SmallCard/SmallCard";

export function HomeSection() {
    return (
        <div id="Home">
            <div className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                <div className="hidden sm:block" style={{ zIndex: 10 }}>
                    <Image
                        width={150}
                        height={150}
                        src="/logo.webp"
                        alt={"Evan Home Care Logo"}
                    />
                </div>

                <span className={styles.slogan}>
                    {
                        "“Making a difference in people’s lives, where quality of life counts”."
                    }
                </span>

                <SearchInput />
            </div>

            <Card className="mt-12 bg-primary px-10 py-8 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <p className="text-justify text-lg sm:text-xl">
                        {dictionary.Home.texts.agencyFor}
                    </p>

                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Doctor Image"
                        className="mb-[-20px] object-cover lg:mb-[0px] lg:mr-[-35px] lg:h-[380px] lg:w-full"
                        src="/woofer.webp"
                    />
                </CardBody>
            </Card>

            <div>
                <div className="pb-8 pt-20">
                    <p className="text-justify text-lg text-primary">
                        {dictionary.Home.texts.mission}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-xl font-bold text-primary">
                        {dictionary.Home.texts.goalsTitle}
                    </h2>

                    <p className="text-justify text-lg text-primary">
                        {dictionary.Home.texts.goalsText}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-xl font-bold text-primary">
                        {dictionary.Home.texts.servicesTo}
                    </h2>
                    <ul className="text-lg text-primary">
                        {Array.isArray(dictionary.Home?.texts?.disabilities) &&
                            dictionary.Home?.texts?.disabilities?.map(
                                (disability) => (
                                    <li key={disability}>{disability}</li>
                                ),
                            )}
                    </ul>
                </div>

                <div className="my-10 grid grid-cols-1 gap-10 gap-y-20 lg:grid-cols-2">
                    <SmallCard
                        img="/ourPeople.svg"
                        alt="Draw of 3 co-workers"
                        type="filled"
                        title={dictionary.Home.texts.ourPleopleTitle as string}
                        text={dictionary.Home.texts.ourPleopleText as string}
                    />
                    <SmallCard
                        img="/ourProcess.svg"
                        alt="Draw of a whiteboard with bussiness cards"
                        title={dictionary.Home.texts.ourProcessTitle as string}
                        text={dictionary.Home.texts.ourProcessText as string}
                    />

                    <SmallCard
                        img="/ourPromise.svg"
                        alt="Draw of a gift "
                        title={dictionary.Home.texts.ourPromiseTitle as string}
                        text={dictionary.Home.texts.ourPromiseText as string}
                    />

                    <SmallCard
                        img="/ourProduct.svg"
                        alt="Draw of people jumping"
                        type="filled"
                        title={dictionary.Home.texts.ourProductTitle as string}
                        text={dictionary.Home.texts.ourProductText as string}
                    />
                </div>

                <div className="py-8">
                    <p className="text-justify text-xl text-primary">
                        <strong>{dictionary.Home.texts.companyName}</strong>{" "}
                        {dictionary.Home.texts.agencyFor2}
                    </p>
                </div>

                <div className="py-8">
                    <h2 className="mb-2 text-xl font-bold text-primary">
                        {dictionary.Home.texts.support}
                    </h2>
                    <p className="text-justify text-lg text-primary">
                        {dictionary.Home.texts.serviceQuality}
                    </p>
                </div>
            </div>
        </div>
    );
}
