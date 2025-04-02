import { ServiceCard } from "~/components/Cards/ServiceCard/ServiceCard";
import { Title } from "~/components/Titles/Title";
import dictionary from "~/dictionary/dictionaryLink";

export function ServicesSection() {
    return (
        <div id="Services" className="mt-10">
            <Title title={dictionary.Services.texts.serviceTitle as string} />

            <div className="flex flex-col justify-center gap-8 md:flex-row">
                <ServiceCard
                    img="/10-Personal Supports.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={
                        dictionary.Services.texts.personalSupportTilte as string
                    }
                    text={
                        dictionary.Services.texts
                            .personalSupportShowText as string
                    }
                />

                <ServiceCard
                    img="/11-Life Skill.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.lifeSkillsTilte as string}
                    text={
                        dictionary.Services.texts.lifeSkillsShowText as string
                    }
                />

                <ServiceCard
                    img="/12-Respite Care.png"
                    alt="Draw of a whiteboard with bussiness cards"
                    title={dictionary.Services.texts.under21Title as string}
                    text={dictionary.Services.texts.under21ShowText as string}
                />
            </div>
        </div>
    );
}
