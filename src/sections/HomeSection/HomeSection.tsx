'use client'

import React from "react";
import {Card, CardBody,} from "@nextui-org/react";
import {SearchInput} from "~/modules/Search/SearchInput";
import dictionary from "~/dictionary/dictionaryLink";


export function HomeSection() {

    return (
        <div id='Home'>
            <div
                className="flex flex-col gap-5 mt-[20px] sm:mt-[0] sm:flex-row justify-between items-center lg:mt-[-20px]">
                <div

                    className="hidden sm:block" style={{zIndex: 10}}>
                    <img src="/logo.webp" alt={"Evan Home Care Logo"}/>
                </div>

                <span
                    className="italic text-lg text-primary"> {"“Making a difference in people\’s lives, where quality of life counts”."}
                 </span>

                <SearchInput/>
            </div>

            <Card className="mt-12 py-10 px-10 text-white bg-primary">
                <CardBody
                    className="flex flex-col lg:gap-10 lg:flex-row items-center justify-between overflow-visible py-2 p-0">
                    <p className="text-xl sm:text-2xl text-justify">
                        {dictionary.Home.texts.cardParagraph}
                    </p>

                    <img
                        alt="Card background"
                        className="mb-[-20px] lg:mb-[0px] lg:mr-[-35px] lg:h-[380px] lg:w-full object-cover"
                        src="/woofer.webp"
                    />
                </CardBody>
            </Card>

            <div>
                <div className='pt-20 pb-8'>
                    <p className="text-xl text-justify text-primary">

                        {dictionary.Home.texts.paragraph1}

                    </p>
                </div>

                <div className='py-8'>
                    <h2 className="text-2xl mb-2 font-bold text-primary">
                        {dictionary.Home.texts.goalsTitle}</h2>
                    <p className="text-xl text-justify text-primary">
                        {dictionary.Home.texts.goalsParagraph}
                    </p>
                </div>

                <div className='py-8'>
                    <h2 className="text-2xl font-bold mb-2 text-primary">
                        {dictionary.Home.texts.servicesTo}
                    </h2>
                    <ul className="text-xl text-primary">
                        {dictionary.Home.texts.disabilities.map((disability) => <li key={disability}>{disability}</li>)}
                    </ul>
                </div>

                <div className='py-8'>
                    <p className="text-xl text-justify text-primary">
                        <strong>{dictionary.Home.texts.name}</strong> {dictionary.Home.texts.paragraph2}
                    </p>
                </div>

                <div className='py-8'>
                    <h2 className="text-2xl font-bold mb-2 text-primary">
                        {dictionary.Home.texts.support}
                    </h2>
                    <p className="text-xl text-justify text-primary">
                        {dictionary.Home.texts.paragraph3}
                    </p>
                </div>

            </div>

        </div>);
}


const disabilities = [
    'People severely impaired by autism.',
    'Cerebral palsy.',
    'Spina bifida.',
    'Intellectual disabilities.',
    'Down syndrome.',
    'Prader-Willi syndrome.',
    'Phelan-McDermid syndrome.',
]
