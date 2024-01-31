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
                    style={{ width: "50%" }}
                />
            </div>

            <div>
                <h2
                    className={`my-5 mb-10 text-center text-xl font-bold ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {title}
                </h2>
            </div>

            <div>
                <p
                    className={`text-justify text-lg ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
