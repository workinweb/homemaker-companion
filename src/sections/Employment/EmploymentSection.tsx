import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import dictionary from "~/dictionary/dictionaryLink";
import Image from "next/image";
import { List } from "~/components/List/List";
import styles from "./Employment.module.css";

export function EmploymentSection() {
    return (
        <div id="Employment">
            <div>
                <div className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                    <div
                        className="max-w-[120px] sm:max-w-max"
                        style={{ zIndex: 10 }}
                    >
                        <Image
                            width={150}
                            height={150}
                            src="/logo.webp"
                            alt={"Evan Home Care Logo"}
                        />
                    </div>

                    <div>
                        <h1 className="text-center text-4xl font-bold uppercase text-primary">
                            {dictionary.Employment.texts.sectionName}
                        </h1>
                    </div>

                    <div></div>
                </div>

                <Card className="mt-2 bg-primary p-10 text-white sm:mt-10">
                    <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-4 lg:flex-row lg:gap-10">
                        <p className="text-left text-xl sm:text-2xl">
                            {dictionary.Employment.texts.agencyFor}
                        </p>

                        <Image
                            width={500}
                            height={500}
                            quality={100}
                            alt="Doctor Image"
                            className={styles.imageMasked}
                            src="/13-Employment.PNG"
                        />
                    </CardBody>
                </Card>
            </div>

            <div className="mt-12 flex flex-grow flex-col justify-evenly gap-5 py-4 sm:gap-0 lg:flex-row">
                <List
                    title={
                        dictionary.Employment.texts.requirementsTitle as string
                    }
                    list={dictionary.Employment.texts.requirements as string[]}
                />

                <List
                    title={
                        dictionary.Employment.texts.certificatesTitle as string
                    }
                    list={dictionary.Employment.texts.certificates as string[]}
                />
            </div>

            <div className="mt-12 py-4">
                <h2 className="text-center text-3xl font-bold text-primary">
                    {dictionary.Employment.texts.applyTitle}
                </h2>
            </div>

            <div className="py-4">
                <h2 className="mb-2 text-2xl font-bold text-primary">
                    {dictionary.Employment.texts.employmentApplication}
                </h2>
                <p className="text-left text-xl text-primary">
                    {dictionary.Employment.texts.needHelp}{" "}
                    <span className="font-bold underline">
                        <a
                            href={`mailto:${
                                dictionary.Employment.texts.email as string
                            }`}
                        >
                            {dictionary.Employment.texts.email}
                        </a>
                    </span>{" "}
                    {dictionary.Employment.texts.readBefore}
                </p>
            </div>

            <div className="py-4">
                <p className="text-left text-xl text-primary">
                    {dictionary.Employment.texts.policy}
                </p>
            </div>

            <div className="py-4">
                <h2 className="mb-2 text-2xl font-bold text-primary">
                    {dictionary.Employment.texts.certRelease}
                </h2>
                <p className="text-left text-xl text-primary">
                    {dictionary.Employment.texts.certify}
                </p>

                <p className="mt-2 text-left text-xl text-primary">
                    {dictionary.Employment.texts.authorize}{" "}
                </p>
            </div>

            <div className="py-4">
                <h2 className="mb-2 text-2xl font-bold text-primary">
                    {dictionary.Employment.texts.covenant}
                </h2>
                <p className="text-left text-xl text-primary">
                    {dictionary.Employment.texts.agree}
                </p>
            </div>
        </div>
    );
}
