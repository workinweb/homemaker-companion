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
            className={`group relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br p-8 shadow-sm transition-all duration-500 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 ${
                type === "filled"
                    ? "from-primary/90 via-primary to-primary"
                    : "from-white via-white to-white"
            }`}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10" />
            </div>

            <div className="relative">
                {/* Image container */}
                <div className="mb-6 flex w-full justify-center overflow-hidden">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt={alt}
                        src={img}
                        className={`w-[60%] transform object-contain transition-transform duration-700 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_110%)] group-hover:scale-105 sm:w-[35%]`}
                    />
                </div>

                {/* Title */}
                <div className="mb-4 transform transition-all duration-500 ease-in-out group-hover:translate-y-[-2px]">
                    <h2
                        className={`text-center text-xl font-semibold tracking-wide sm:text-2xl ${
                            type === "filled"
                                ? "text-white"
                                : "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                        }`}
                    >
                        {title}
                    </h2>
                </div>

                {/* Text content */}
                <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-[-1px]">
                    <p
                        className={`text-left text-base leading-relaxed sm:text-lg ${
                            type === "filled"
                                ? "text-white/90"
                                : "text-gray-600"
                        }`}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}
