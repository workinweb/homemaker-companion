"use client";

import React from "react";
import { FiCheckSquare } from "react-icons/fi";

type ListProps = {
    title: string;
    list: Array<string>;
};

export function List({ title, list }: ListProps) {
    return (
        <div>
            <div className="relative mb-6">
                <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                    {title}
                </h2>
                <div className="mx-auto mt-2 h-1 w-20 rounded bg-gradient-to-r from-primary/30 to-primary/20 sm:w-32"></div>
            </div>

            <div className="flex flex-col gap-2 rounded-lg border-2 border-primary/10 bg-gradient-to-br from-transparent via-primary/5 to-transparent p-6 sm:p-8">
                {list.map((listName) => {
                    return (
                        <div key={listName} className="flex items-center gap-3">
                            <FiCheckSquare className="min-h-[24px] min-w-[24px] text-primary sm:min-h-[32px] sm:min-w-[32px]" />
                            <p className="text-lg text-primary sm:text-xl">
                                {listName}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
