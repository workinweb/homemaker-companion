"use client";

import Image from "next/image";
import React, { useState } from "react";

type SmallCardProps = {
    img: string;
    alt: string;
    title: string;
    text: string;
    type?: string;
};

export function SmallCard({ img, title, text, type, alt }: SmallCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`group relative h-[400px] w-full overflow-hidden rounded-xl border border-gray-100 bg-primary/40 shadow-sm transition-all duration-500 hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    fill
                    src={img}
                    alt={alt}
                    className="object-cover transition-all duration-500"
                    quality={100}
                />
            </div>

            {/* Dark Overlay */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    isHovered ? "opacity-70" : "opacity-10"
                }`}
            />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between p-6">
                {/* Title - Always visible */}
                <h2
                    className={`text-center text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-4xl`}
                >
                    {title}
                </h2>

                {/* Text content - Only visible on hover */}
                <div
                    className={`transform transition-all duration-500 ${
                        isHovered
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="w-full text-white sm:text-lg">
                        {text.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
