import React from "react";
import { SmallCard } from "~/components/Cards/SmallCard/SmallCard";
import dictionary from "~/dictionary/dictionaryLink";

function SquaresSection() {
    const texts = dictionary.Homemaker.texts;

    return (
        <div className="mt-10 sm:mt-20">
            <div className="my-10 flex flex-col gap-10">
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="mb-10 flex-1 lg:mb-0">
                        <SmallCard
                            img="/3.jpg"
                            alt="Our Mission"
                            type="filled"
                            title="Mission"
                            text={
                                typeof texts.mission === "string"
                                    ? texts.mission
                                    : ""
                            }
                        />
                    </div>
                    <div className="flex-1">
                        <SmallCard
                            img="/4.jpg"
                            alt="Our Vision"
                            type="filled"
                            title="Vision"
                            text={
                                typeof texts.vision === "string"
                                    ? texts.vision
                                    : ""
                            }
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full lg:w-1/2">
                        <SmallCard
                            img="/photo_7.jpg"
                            alt="Draw of a gift"
                            type="filled"
                            title="Core Values"
                            text={
                                typeof texts.coreValues === "string"
                                    ? texts.coreValues
                                    : ""
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SquaresSection;
