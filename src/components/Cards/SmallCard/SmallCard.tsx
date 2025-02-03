"use client";

import Image from "next/image";
import React from "react";

type SmallCardProps = {
    img: string;
    alt: string;
    title: string;
    text: string;
    type?: string;
};

export function SmallCard({ img, title, text, type, alt }: SmallCardProps) {
    return (
        <div
            className={`group relative rounded-lg border-3 border-solid p-10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                type === "filled" ? "bg-primary" : "bg-white"
            }`}
        >
            <div className="mb-2 flex w-full justify-center overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    quality={100}
                    alt={alt}
                    src={img}
                    className={`w-[70%] transform transition-transform duration-500 [mask-image:linear-gradient(black_90%,transparent)] group-hover:scale-110 sm:w-[40%]`}
                />
            </div>

            <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
                <h2
                    className={`mb-5 mt-8 text-center text-2xl font-bold tracking-wide ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {title}
                </h2>
            </div>

            <div className="transform transition-all duration-300 group-hover:translate-y-[-2px]">
                <p
                    className={`text-left text-lg leading-relaxed ${
                        type === "filled" ? "text-white/90" : "text-primary/90"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
