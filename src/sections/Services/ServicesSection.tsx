import React from "react";
import dictionary from "~/dictionary/dictionaryLink";
import { AccordionCard } from "~/components/AccordionCard/AccordionCard";

export function ServicesSection() {
    return (
        <div id="Services" className="mt-10 sm:mt-20">
            <div>
                <h2 className="mb-5 text-center text-4xl font-bold text-primary">
                    {dictionary.Services.texts.serviceTitle}
                </h2>

                <h3 className="text-center text-xl text-primary">
                    {dictionary.Services.texts.providedServices}
                </h3>
            </div>

            <div className="flex flex-col items-start justify-evenly gap-8 sm:flex-row sm:flex-wrap lg:flex-nowrap">
                <AccordionCard
                    img="/10-Personal Supports.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={
                        dictionary.Services.texts.personalSupportTilte as string
                    }
                    text={
                        dictionary.Services.texts
                            .personalSupportShowText as string
                    }
                    hiddenText={[
                        dictionary.Services.texts.personalHiddenText as string,
                        dictionary.Services.texts
                            .personalSupportPlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .personalSupportPlaceOfServiceText as string,
                    ]}
                />

                <AccordionCard
                    img="/11-Life Skill.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.lifeSkillsTilte as string}
                    text={
                        dictionary.Services.texts.lifeSkillsShowText as string
                    }
                    hiddenText={[
                        dictionary.Services.texts
                            .lifeSkillsHiddenText as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfServiceText as string,
                        dictionary.Services.texts
                            .lifeSkillsTiltePlaceOfService2Text as string,
                    ]}
                />

                <AccordionCard
                    img="/12-Respite Care.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.under21Title as string}
                    text={dictionary.Services.texts.under21ShowText as string}
                    hiddenText={[
                        dictionary.Services.texts.under21HiddenText as string,
                        dictionary.Services.texts
                            .under21TitlePlaceOfServiceTitle as string,
                        dictionary.Services.texts
                            .under21TitlePlaceOfServiceText as string,
                    ]}
                />
            </div>
        </div>
    );
}
