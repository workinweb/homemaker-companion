import React from "react";
import dictionary from "~/dictionary/dictionaryLink";

export function ContactUsSection() {
    return (
        <div id="ContactUs">
            <div className="mb-16">
                <h2 className="mb-5 text-center text-4xl font-bold text-primary">
                    {dictionary.ContactUs.texts.sectionName}
                </h2>

                <h3 className="text-center text-xl text-primary">
                    {dictionary.ContactUs.texts.contactUsText}
                </h3>
            </div>
        </div>
    );
}
