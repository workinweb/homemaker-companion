"use client";

import React from "react";

type SmallCardProps = {
    img: string;
    title: string;
    text: string;
    type?: string;
};

export function SmallCard({img, title, text, type}: SmallCardProps) {
    return (
        <div
            className={`border-solid rounded-lg border-3 p-10 ${
                type === "filled" ? "bg-primary" : ""
            }`}
        >
            <img alt="image" src={img}/>

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
