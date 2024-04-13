import React from "react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import styles from "./ChooseUs.module.css";

export function ChooseUsSection() {
    return (
        <div id="ChooseUs">
            <div className="mt-10 text-primary">
                <div className="flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <div>
                        <p className="text-left text-xl font-bold">
                            {dictionary.ChooseUs.texts.whyChooseUsTitle}
                        </p>
                        <p className="text-left text-lg">
                            {dictionary.ChooseUs.texts.whyChooseUsText}
                        </p>
                    </div>

                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className={styles.imageMasked}
                        src="/aboutus2.webp"
                    />
                </div>

                <div className="py-4">
                    <h2 className="mb-2 text-xl font-bold text-primary">
                        {dictionary.ChooseUs.texts.medicalServicesTitle}
                    </h2>

                    <p className="text-left text-lg text-primary">
                        {dictionary.ChooseUs.texts.medicalServicesText}
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between overflow-visible p-0 py-2 lg:flex-row lg:gap-10">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt=""
                        className={styles.image2Masked}
                        src="/9-Medicaid Waiver Services.png"
                    />

                    <div className="py-4">
                        <h2 className="mb-2 text-xl font-bold text-primary">
                            {dictionary.ChooseUs.texts.approvedAgency}
                        </h2>
                        <h2 className="mb-2 text-xl font-bold text-primary">
                            {dictionary.ChooseUs.texts.intellectualDisabilities}
                        </h2>
                        <ul className="text-lg text-primary">
                            {Array.isArray(
                                dictionary.ChooseUs?.texts?.disabilities,
                            ) &&
                                dictionary.ChooseUs?.texts?.disabilities?.map(
                                    (disability) => (
                                        <li key={disability}>{disability}</li>
                                    ),
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
