"use client";

import React from "react";

type SmallCardProps = {
    img: string;
    title: string;
    text: string;
    type?: string;
};

export function SmallCard({ img, title, text, type }: SmallCardProps) {
    return (
        <div
            className={`rounded-lg border-3 border-solid p-10 ${
                type === "filled" ? "bg-primary" : ""
            }`}
        >
            <div className="mb-2 flex w-full justify-center">
                <img alt="image" src={img} style={{ width: "50%" }} />
            </div>

            <div>
                <h2
                    className={`my-5 mb-10 text-center text-2xl font-bold ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {title}
                </h2>
            </div>

            <div>
                <p
                    className={`text-justify text-xl ${
                        type === "filled" ? "text-white" : "text-primary"
                    }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
