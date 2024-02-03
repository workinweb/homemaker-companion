"use client";

import { Accordion, AccordionItem, type Selection } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type SmallCardProps = {
    img: string;
    alt: string;
    title: string;
    text: string;
    hiddenText?: string[];
};

export function AccordionCard({
    img,
    alt,
    title,
    text,
    hiddenText,
}: SmallCardProps) {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
        new Set([]),
    );

    return (
        <div
            className={`w-full rounded-lg border-3 border-solid p-10 sm:w-[350px] md:w-[400px] lg:w-[500px]`}
        >
            <div className="mb-2 flex w-full justify-center">
                <Image
                    width={500}
                    height={500}
                    quality={100}
                    alt={alt}
                    src={img}
                    style={{ width: "50%" }}
                />
            </div>

            <div className="mt-4 py-2">
                <h2 className={`text-center text-xl font-bold text-primary `}>
                    {title}
                </h2>
            </div>

            <div className="py-2">
                <p className={`text-left text-lg text-primary`}>{text}</p>
            </div>

            {hiddenText && hiddenText?.length > 0 && (
                <Accordion
                    className="p-0"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Read More"
                        classNames={{ subtitle: "text-primary" }}
                        subtitle={
                            //@ts-ignore
                            selectedKeys.size > 0 ? "Read less" : "Read more"
                        }
                        title=""
                    >
                        <p className={`text-left text-lg text-primary`}>
                            {hiddenText.length > 0 && hiddenText[0]}
                        </p>

                        <h3
                            className={`mb-2 mt-4 text-left text-lg font-bold text-primary`}
                        >
                            {hiddenText.length > 1 && hiddenText[1]}
                        </h3>

                        <p className={`text-left text-lg text-primary `}>
                            {hiddenText.length > 2 && hiddenText[2]}
                        </p>

                        <div className="py-4">
                            <ul className="xt-justify text-lg text-primary ">
                                {hiddenText.length > 3 &&
                                    hiddenText[3] &&
                                    Array.isArray(hiddenText[3]) &&
                                    hiddenText[3].map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                            </ul>
                        </div>
                    </AccordionItem>
                </Accordion>
            )}
        </div>
    );
}
