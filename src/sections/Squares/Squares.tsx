import React from "react";
import { SmallCard } from "~/components/Cards/SmallCard/SmallCard";
import dictionary from "~/dictionary/dictionaryLink";

function Squares() {
    return (
        <div className="mt-10 sm:mt-20">
            <div className="my-10 grid grid-cols-1 gap-10 gap-y-10 lg:grid-cols-2">
                <SmallCard
                    img="/2- Mission.png"
                    alt="Draw of a gift"
                    type="filled"
                    title={dictionary.Home.texts.missionTitle as string}
                    text={dictionary.Home.texts.missionText as string}
                />

                <SmallCard
                    img="/3-Goals.png"
                    alt="Draw of people jumping"
                    title={dictionary.Home.texts.goalsTitle as string}
                    text={dictionary.Home.texts.goalsText as string}
                />

                <SmallCard
                    img="/4-Our people.png"
                    alt="Draw of 3 co-workers"
                    title={dictionary.Home.texts.ourPleopleTitle as string}
                    text={dictionary.Home.texts.ourPleopleText as string}
                />
                <SmallCard
                    img="/5-Our promise.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    type="filled"
                    title={dictionary.Home.texts.ourPromiseTitle as string}
                    text={dictionary.Home.texts.ourPromiseText as string}
                />
            </div>
        </div>
    );
}

export default Squares;
