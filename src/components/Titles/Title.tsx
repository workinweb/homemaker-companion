import React from "react";

type TitleProps = {
    title?: string;
    paragraph?: string;
    classNames?: ClassNamesType;
};

type ClassNamesType = {
    titleClassName: string;
    paragraphClassName: string;
};

export function Title({
    title = "",
    paragraph = "",
    classNames = {
        titleClassName: "text-2xl mb-2 font-bold text-primary",
        paragraphClassName: "text-xl text-justify text-primary",
    },
}: TitleProps) {
    return (
        <>
            <h2 className={classNames.titleClassName}>{title}</h2>
            <p className={classNames.paragraphClassName}>{paragraph}</p>
        </>
    );
}
