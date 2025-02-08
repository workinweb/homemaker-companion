"use client";

import Image from "next/image";
import { useState } from "react";

type ServiceCardProps = {
    img: string;
    alt: string;
    title: string;
    text: string;
};

export function ServiceCard({ img, alt, title, text }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

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
                        width: "90%",
                        maskImage: "linear-gradient(black 90%, transparent)",
                    }}
                />
            </div>

            <div className="mb-6">
                <h2 className="text-center text-3xl font-bold tracking-wider text-primary">
                    {title}
                </h2>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isExpanded
                        ? "mb-8 max-h-[500px] opacity-100"
                        : "mb-0 max-h-0 opacity-0"
                }`}
            >
                <p className="text-left text-lg font-medium leading-relaxed text-primary/90">
                    {text}
                </p>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="rounded-lg border border-primary px-6 py-2 text-primary transition-colors hover:bg-primary hover:text-white"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
    );
}
