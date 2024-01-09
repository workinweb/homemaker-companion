'use client'

import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";

export function ServicesSection() {

    return (
        <div id='Services' className='pt-16'>
            <div>
                <h2 className='text-center text-primary text-5xl mb-5 font-bold'>{dictionary.Services.texts.service}
                </h2>

                <h3 className='text-center text-primary text-3xl'>{dictionary.Services.texts.serviceParagraph}
                </h3>
            </div>

            <Card
                className="mt-16 py-10 xl:translate-x-[-200px] px-10 text-white bg-primary">
                <CardBody
                    className="flex flex-col lg:gap-10 lg:flex-row items-center justify-between overflow-visible py-2 p-0">
                    <img
                        alt="Card background"
                        className="mb-[-20px] lg:mb-[0px] lg:h-[520px] lg:w-full object-cover"
                        src="/service1.webp"
                    />

                    <div>
                        <h2 className="text-2xl text-center mt-10 lg:mt-0 mb-10 font-bold text-white"> {dictionary.Services.texts.cardTitle2}
                        </h2>
                        <p className="text-xl text-justify text-white">{dictionary.Services.texts.cardParagraph2}


                        </p>
                    </div>
                </CardBody>
            </Card>

            <Card
                className="mt-16 xl:translate-x-[200px] py-10 px-10 text-white bg-primary">
                <CardBody
                    className="flex flex-col lg:gap-10 lg:flex-row items-center justify-between overflow-visible py-2 p-0">
                    <img
                        alt="Card background"
                        className="mb-[-20px] lg:mb-[0px] lg:h-[520px] lg:w-full object-cover"
                        src="/service2.webp"
                    />

                    <div>
                        <h2 className="text-2xl text-center mt-10 lg:mt-0 mb-10 font-bold text-white"> {dictionary.Services.texts.cardTitle3}

                        </h2>
                        <p className="text-xl text-justify text-white">{dictionary.Services.texts.cardParagraph3}
                        </p>
                    </div>
                </CardBody>
            </Card>


        </div>);
}

