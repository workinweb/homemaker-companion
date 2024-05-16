"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import TrainingTabs from "./TrainingTabs/Tabs";
import { ContentCard } from "~/components/Cards/ContentCard/ContentCard";
import Link from "next/link";

interface TrainingUnlockedProps {
    lockAccess: () => void;
}

export function TrainingUnlocked({ lockAccess }: TrainingUnlockedProps) {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
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

                    <div>
                        <h1 className="text-center text-4xl font-bold uppercase text-primary">
                            Training
                        </h1>
                    </div>

                    <div></div>
                </div>

                <div className="mt-10 flex w-full flex-col justify-center sm:mt-20 md:flex-row">
                    <div
                        className={`w-full rounded-tl-md rounded-tr-md bg-[#007FFF] px-10 py-10  text-white sm:rounded-none  sm:rounded-l-md`}
                    >
                        <h1 className="text-center text-3xl font-bold sm:pt-4">
                            CUADRO 1
                        </h1>

                        <div className={`mt-5 flex w-full flex-col gap-2`}>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://train.org"
                                target="_blank"
                            >
                                <img
                                    src="/training/train.png"
                                    style={{ width: "100px", height: "30px" }}
                                    alt="train.org"
                                />

                                <span className="text-2xl"> Train Org</span>
                            </Link>

                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://ceufast.com"
                                target="_blank"
                            >
                                <img
                                    src="/training/ceufast.png"
                                    style={{ width: "100px", height: "90px" }}
                                    alt="ceufast.com"
                                />
                                <span className="text-2xl"> CeuFast</span>
                            </Link>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all  hover:bg-white hover:text-primary "
                                href="https://rn.org"
                                target="_blank"
                            >
                                <img
                                    src="/training/rn.png"
                                    style={{ width: "100px", height: "30px" }}
                                    alt="rn.org"
                                />

                                <span className="text-2xl"> RN</span>
                            </Link>
                        </div>
                    </div>

                    <div className={`w-full  bg-[#F1F1F1]   px-10 py-10  `}>
                        <h1 className="text-center text-3xl font-bold sm:pt-4">
                            Evan Home Care
                        </h1>

                        <div className={`mt-5 flex w-full flex-col gap-2`}>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-primary-400 hover:text-white"
                                href="https://ceufast.com"
                                target="_blank"
                            >
                                <span className="text-2xl"> HHA Training</span>
                            </Link>

                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-primary-400 hover:text-white"
                                href="https://train.org"
                                target="_blank"
                            >
                                <span className="text-2xl"> EVV Tutorials</span>
                            </Link>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-primary-400 hover:text-white"
                                href="https://rn.org"
                                target="_blank"
                            >
                                <img
                                    src="/training/rn.png"
                                    style={{ width: "100px", height: "30px" }}
                                    alt="rn.org"
                                />

                                <span className="text-2xl"> RN</span>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`w-full rounded-bl-md rounded-br-md bg-[#657fa0] px-10 py-10 text-white  sm:rounded-none sm:rounded-r-md  `}
                    >
                        <h1 className="text-center text-3xl font-bold sm:pt-4">
                            CUADRO 3
                        </h1>

                        <div className={`mt-5 flex w-full flex-col gap-2`}>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://ceufast.com"
                                target="_blank"
                            >
                                <span className="text-2xl"> Inservices </span>
                            </Link>

                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://train.org"
                                target="_blank"
                            >
                                <span className="text-2xl">
                                    Professional Liali Insurance
                                </span>
                            </Link>
                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://cphins.com/"
                                target="_blank"
                            >
                                <img
                                    src="/training/cph.png"
                                    style={{ width: "100px", height: "35px" }}
                                    alt="rn.org"
                                />

                                <span className="text-2xl">CPHINS</span>
                            </Link>

                            <Link
                                className="flex items-center justify-start gap-5 rounded-md p-2 py-4 transition-all hover:bg-white hover:text-primary"
                                href="https://nso.com/"
                                target="_blank"
                            >
                                <img
                                    className="rounded-md bg-[#657fa0] p-0.5"
                                    src="/training/nso.svg"
                                    style={{
                                        width: "100px",
                                        height: "35px",
                                    }}
                                    alt="rn.org"
                                />

                                <span className="text-2xl">NSO</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10">VIDEOS</div>
            </div>
        </div>
    );
}
