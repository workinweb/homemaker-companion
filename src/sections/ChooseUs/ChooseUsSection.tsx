import React from "react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import styles from "./ChooseUs.module.css";
import { Title } from "~/components/Titles/Title";

export function ChooseUsSection() {
    return (
        <div id="ChooseUs" className="py-20">
            <div className="container mx-auto">
                <Title
                    title={dictionary.ChooseUs.texts.whyChooseUsTitle as string}
                />

                {/* Why Choose Us Section */}
                <div className="mb-24 flex flex-col items-center justify-between gap-16 lg:flex-row">
                    <div className="max-w-xl space-y-6">
                        <p className="text-xl leading-relaxed text-primary/80">
                            {dictionary.ChooseUs.texts.whyChooseUsText}
                        </p>
                    </div>

                    <div className="w-full max-w-lg lg:w-1/2">
                        <Image
                            width={500}
                            height={500}
                            quality={100}
                            alt="Two happy persons, one in a wheelchair"
                            className={`${styles.imageMasked} rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-primary/20`}
                            src="/aboutus2.webp"
                        />
                    </div>
                </div>

                {/* Medical Services Section */}
                <div className="mb-20 rounded-2xl bg-primary/5 p-10">
                    <h2 className="mb-6 text-3xl font-bold text-primary">
                        {dictionary.ChooseUs.texts.medicalServicesTitle}
                    </h2>

                    <p className="text-left text-lg leading-relaxed text-primary/90">
                        {dictionary.ChooseUs.texts.medicalServicesText}
                    </p>
                </div>

                {/* Approved Agency Section */}
                <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <Image
                            width={500}
                            height={500}
                            quality={100}
                            alt="Medical services illustration"
                            className={`${styles.image2Masked} rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-primary/20`}
                            src="/9-Medicaid Waiver Services.png"
                        />
                    </div>

                    <div className="w-full space-y-8 lg:w-1/2">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold text-primary">
                                {dictionary.ChooseUs.texts.approvedAgency}
                            </h2>
                            <h3 className="text-2xl font-semibold text-primary/90">
                                {
                                    dictionary.ChooseUs.texts
                                        .intellectualDisabilities
                                }
                            </h3>
                        </div>

                        <ul className="space-y-3 px-2 text-lg text-primary/80">
                            {Array.isArray(
                                dictionary.ChooseUs?.texts?.disabilities,
                            ) &&
                                dictionary.ChooseUs?.texts?.disabilities?.map(
                                    (disability) => (
                                        <li
                                            key={disability}
                                            className="flex items-center before:mr-3 before:h-2 before:w-2 before:rounded-full before:bg-primary before:content-['']"
                                        >
                                            {disability}
                                        </li>
                                    ),
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
