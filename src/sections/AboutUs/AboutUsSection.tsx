"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dictionary from "~/dictionary/dictionaryLink";
import styles from "./aboutUs.module.css";
import { Title } from "~/components/Titles/Title";

export function AboutUsSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div id="AboutUs" className="mt-10 sm:mt-20">
            <Title title={dictionary.AboutUs.texts.sectionName as string} />

            <Card className="mt-10 rounded-lg bg-primary px-10 py-5 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className={styles.imageMasked}
                        src="/aboutus.webp"
                    />

                    <div>
                        <p className="text-justify text-lg text-white sm:text-2xl">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isExpanded ? "expanded" : "collapsed"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-4 block"
                                >
                                    {isExpanded
                                        ? dictionary.AboutUs.texts.aboutUsBanner
                                        : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                          `${dictionary.AboutUs.texts.aboutUsBanner?.slice(
                                              0,
                                              193,
                                          )} ...`}
                                </motion.span>
                            </AnimatePresence>

                            <span className="block font-semibold">
                                {dictionary.AboutUs.texts.aboutUsBanner2}
                            </span>
                        </p>
                        <button
                            onClick={toggleReadMore}
                            className="mt-4 text-white underline hover:text-gray-200"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
