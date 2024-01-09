import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import {EmploymentForm} from "~/sections/EmploymentForm/EmploymentForm";
import dictionary from "~/dictionary/dictionaryLink";
import {List} from "~/components/List/List";

export default async function Employment() {
    return (
        <main>
            <div className="flex w-full flex-col items-center">
                <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                    <div>
                        <div
                            className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                            <div className="hidden sm:block" style={{zIndex: 10}}>
                                <img src="/logo.webp" alt={"Evan Home Care Logo"}/>
                            </div>

                            <div>
                                <h1 className="text-center text-4xl font-bold text-primary">
                                    {dictionary.Employment.texts.section}
                                </h1>
                            </div>

                            <div className=""></div>
                        </div>

                        <Card className="mt-12 bg-primary px-10 py-10 text-white">
                            <CardBody
                                className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                                <p className="text-justify text-xl sm:text-2xl">
                                    {dictionary.Employment.texts.cardParagraph}
                                </p>

                                <img
                                    alt="Card background"
                                    className="mb-[-20px] object-cover lg:mb-[0px] lg:mr-[-35px] lg:h-[380px] lg:w-full"
                                    src="/woofer.webp"
                                />
                            </CardBody>
                        </Card>
                    </div>

                    <div className="mt-12 flex flex-col lg:flex-row flex-grow justify-evenly py-8">
                        <List
                            title={dictionary.Employment.texts.title1 as string}
                            list={dictionary.Employment.texts.requirements as string[]}
                        />

                        <List
                            title={dictionary.Employment.texts.title3 as string}
                            list={dictionary.Employment.texts.certificates as string[]}
                        />
                    </div>

                    <div className="mt-12 py-8">
                        <h2 className="text-center text-3xl font-bold text-primary">
                            {dictionary.Employment.texts.applyTitle}
                        </h2>
                    </div>

                    <div className="py-8">
                        <h2 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.title4}
                        </h2>
                        <p className="text-justify text-xl text-primary">
                            {dictionary.Employment.texts.paragraphs3} {" "}
                            <span className="underline font-bold">
                           <a href={`mailto:${dictionary.Employment.texts.email as string}`}>
                    {dictionary.Employment.texts.email}
                </a>
              </span>{" "}
                            {dictionary.Employment.texts.paragraph4}
                        </p>
                    </div>

                    <div className="py-8">
                        <p className="text-justify text-xl text-primary">
                            {dictionary.Employment.texts.paragraphs5}
                        </p>
                    </div>

                    <div className="py-8">
                        <h2 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.title5}
                        </h2>
                        <p className="text-justify text-xl text-primary">
                            {dictionary.Employment.texts.paragraphs6}
                        </p>

                        <p className="mt-2 text-justify text-xl text-primary">
                            {dictionary.Employment.texts.paragraph7}{" "}
                        </p>
                    </div>

                    <div className="py-8">
                        <h2 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.title6}
                        </h2>
                        <p className="text-justify text-xl text-primary">
                            {dictionary.Employment.texts.paragraph8}
                        </p>
                    </div>

                    <EmploymentForm/>
                </div>
            </div>
        </main>
    );
}
