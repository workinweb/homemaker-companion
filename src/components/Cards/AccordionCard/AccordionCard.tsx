"use client";

import { Accordion, AccordionItem, type Selection } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type AccordionCardProps = {
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
}: AccordionCardProps) {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
        new Set([]),
    );

    return (
        <div className="w-full rounded-2xl bg-primary/5 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 sm:w-[350px] md:w-[400px] lg:w-[500px]">
            <div className="mb-8 flex w-full justify-center">
                <Image
                    width={500}
                    height={500}
                    quality={100}
                    alt={alt}
                    src={img}
                    className="transition-transform duration-300 hover:scale-105"
                    style={{
                        width: "85%",
                        maskImage: "linear-gradient(black 90%, transparent)",
                    }}
                />
            </div>

            <div className="mb-8">
                <h2 className="text-center text-3xl font-bold tracking-wider text-primary">
                    {title}
                </h2>
            </div>

            <div className="mb-8">
                <p className="text-left text-lg font-medium leading-relaxed text-primary/90">
                    {text}
                </p>
            </div>

            {hiddenText && hiddenText?.length > 0 && (
                <Accordion
                    className="rounded-xl p-5 shadow-sm"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Toggle content"
                        classNames={{
                            subtitle:
                                "text-primary/80  hover:text-primary font-medium transition-colors duration-200 text-lg",
                            title: "text-primary",
                            trigger:
                                "hover:bg-primary/5 transition-all duration-200 rounded-lg",
                        }}
                        subtitle={
                            //@ts-ignore
                            selectedKeys.size > 0 ? (
                                <span className="flex items-center gap-2 text-lg">
                                    Show less
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 text-lg">
                                    Show more
                                </span>
                            )
                        }
                        title=""
                    >
                        <div className="space-y-8 pt-2">
                            {hiddenText.length > 0 && (
                                <p className="text-left text-lg font-medium leading-relaxed text-primary/90">
                                    {hiddenText[0]}
                                </p>
                            )}

                            {hiddenText.length > 1 && (
                                <h3 className="text-left text-2xl font-bold tracking-wide text-primary">
                                    {hiddenText[1]}
                                </h3>
                            )}

                            {hiddenText.length > 2 && (
                                <p className="text-left text-lg font-medium leading-relaxed text-primary/90">
                                    {hiddenText[2]}
                                </p>
                            )}

                            {hiddenText.length > 3 &&
                                hiddenText[3] &&
                                Array.isArray(hiddenText[3]) && (
                                    <div className="py-4">
                                        <ul className="space-y-4 text-lg text-primary/90">
                                            {hiddenText[3].map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="flex items-center gap-3 font-medium"
                                                >
                                                    <span className="h-2.5 w-2.5 rounded-full bg-primary/50"></span>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                        </div>
                    </AccordionItem>
                </Accordion>
            )}
        </div>
    );
}
