import React from "react";
import dictionary from "~/dictionary/dictionaryLink";
import { Title } from "~/components/Titles/Title";

export function ContactUsSection() {
    return (
        <div id="ContactUs">
            <Title
                title={dictionary.ContactUs.texts.sectionName as string}
                subtitle={dictionary.ContactUs.texts.contactUsText as string}
            />
        </div>
    );
}
