import React from "react";

type TitleProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

export function Title({ title, subtitle, className = "" }: TitleProps) {
    return (
        <div className={`mb-10 ${className}`}>
            <div className="relative flex flex-col items-center justify-between gap-8 rounded-xl bg-gradient-to-br from-transparent via-primary/5 to-transparent p-8">
                <h2 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold uppercase text-transparent sm:text-4xl">
                    {title}
                </h2>
                <div className="mt-2 h-1 w-20 rounded bg-gradient-to-r from-primary/30 to-primary/20 sm:w-32"></div>
                {subtitle && (
                    <p className="mt-2 text-center text-xl text-gray-600">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
