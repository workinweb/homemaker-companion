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
                <div
                    className="max-w-[120px] sm:max-w-max"
                    style={{ zIndex: 10 }}
                >
                    <Image
                        width={150}
                        height={150}
                        src="/logo.webp"
                        alt={"Evan Home Care Logo"}
                    />
                </div>

                <h1 className={styles.slogan}>
                    {
                        "“Making a difference in people’s lives, where quality of life counts”."
                    }
                </h1>

                <SearchInput />
            </div>

            <Card className="mt-12 rounded-lg bg-primary px-10 py-4 text-white">
                <CardBody className="flex flex-col items-center justify-between gap-5 overflow-visible p-0 lg:flex-row lg:gap-10">
                    <p className="text-left text-lg sm:text-xl">
                        {dictionary.Home.texts.agencyFor}
                    </p>

                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Doctor Image"
                        className="object-cover lg:mb-[0px] lg:mr-[-35px] lg:h-[380px] lg:w-full"
                        src="/1-Home Banner azul.png"
                    />
                </CardBody>
            </Card>

            <div className="mt-10 sm:mt-20">
                <div className="my-10 grid grid-cols-1 gap-10 gap-y-10 lg:grid-cols-2">
                    <SmallCard
                        img="/2- Mission.png"
                        alt="Draw of a gift "
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
