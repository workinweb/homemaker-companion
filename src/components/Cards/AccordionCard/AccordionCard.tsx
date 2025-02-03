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
            className={`w-full rounded-2xl bg-primary/5 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 sm:w-[350px] md:w-[400px] lg:w-[500px]`}
        >
            <div className="mb-4 flex w-full justify-center">
                <Image
                    width={500}
                    height={500}
                    quality={100}
                    alt={alt}
                    src={img}
                    className="transition-transform duration-300 hover:scale-105"
                    style={{
                        width: "75%",
                        maskImage: "linear-gradient(black 90%, transparent)",
                    }}
                />
            </div>

            <div className="mb-4">
                <h2 className={`text-center text-2xl font-bold text-primary`}>
                    {title}
                </h2>
            </div>

            <div className="mb-6">
                <p className={`text-left text-xl text-primary/80`}>{text}</p>
            </div>

            {hiddenText && hiddenText?.length > 0 && (
                <Accordion
                    className="rounded-xl bg-white/50 p-2"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Read More"
                        classNames={{
                            subtitle:
                                "text-primary/70 hover:text-primary transition-colors duration-200",
                            title: "text-primary",
                        }}
                        subtitle={
                            //@ts-ignore
                            selectedKeys.size > 0 ? "Read less" : "Read more"
                        }
                        title=""
                    >
                        <div className="space-y-4">
                            <p className={`text-left text-xl text-primary/80`}>
                                {hiddenText.length > 0 && hiddenText[0]}
                            </p>

                            <h3
                                className={`text-left text-xl font-bold text-primary`}
                            >
                                {hiddenText.length > 1 && hiddenText[1]}
                            </h3>

                            <p className={`text-left text-xl text-primary/80`}>
                                {hiddenText.length > 2 && hiddenText[2]}
                            </p>

                            <div className="py-2">
                                <ul className="space-y-2 text-xl text-primary/80">
                                    {hiddenText.length > 3 &&
                                        hiddenText[3] &&
                                        Array.isArray(hiddenText[3]) &&
                                        hiddenText[3].map((skill) => (
                                            <li
                                                key={skill}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="h-2 w-2 rounded-full bg-primary/40"></span>
                                                {skill}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            )}
        </div>
    );
}
