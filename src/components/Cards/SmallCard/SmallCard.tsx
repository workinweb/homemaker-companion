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
    const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    return (
        <div
            className={`rounded-lg border-3 border-solid p-10 ${
                type === "filled" ? "bg-primary" : ""
            }`}
        >
            <div className="mb-2 flex w-full justify-center">
                <Image
                    width={500}
                    height={500}
                    quality={100}
                    alt={alt}
                    src={img}
                    style={{
                        width: innerWidth < 768 ? "70%" : "40%",
                        maskImage: "linear-gradient(black 90%, transparent)",
                    }}
                />
            </div>

            <div>
                <h2
                    className={`mb-5 mt-8 text-center text-2xl font-bold ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {title}
                </h2>
            </div>

            <div>
                <p
                    className={`text-left text-lg ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
