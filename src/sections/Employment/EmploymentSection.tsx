"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { List } from "~/components/List/List";
import dictionary from "~/dictionary/dictionaryLink";
import styles from "./Employment.module.css";

export function EmploymentSection() {
    return (
        <div id="Employment" className="mx-auto max-w-[1200px]">
            {/* Header Section */}
            <div className="mb-10">
                <div className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                    <div
                        className="max-w-[120px] sm:max-w-max"
                        style={{ zIndex: 10 }}
                    >
                        <Image
                            width={150}
                            height={150}
                            src="/logo.webp"
                            alt="Evan Home Care Logo"
                        />
                    </div>

                    <div>
                        <h1 className="text-center text-4xl font-bold uppercase text-primary">
                            {dictionary.Employment.texts.sectionName}
                        </h1>
                    </div>

                    <div></div>
                </div>

                {/* Hero Card */}
                <Card className="mt-2 bg-primary p-10 text-white shadow-lg sm:mt-10">
                    <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 py-4 lg:flex-row lg:gap-10">
                        <p className="text-left text-xl sm:text-2xl">
                            {dictionary.Employment.texts.agencyFor}
                        </p>

                        <Image
                            width={500}
                            height={500}
                            quality={100}
                            alt="Doctor Image"
                            className={`${styles.imageMasked} rounded-lg`}
                            src="/13-Employment.PNG"
                        />
                    </CardBody>
                </Card>
            </div>

            {/* Requirements and Certificates Section */}
            <Card className="p-6 shadow-md">
                <div className="flex flex-grow flex-col justify-evenly gap-5 py-4 sm:gap-8 lg:flex-row">
                    <List
                        title={
                            dictionary.Employment.texts
                                .requirementsTitle as string
                        }
                        list={
                            dictionary.Employment.texts.requirements as string[]
                        }
                    />
                    <Divider
                        orientation="vertical"
                        className="hidden lg:block"
                    />
                    <List
                        title={
                            dictionary.Employment.texts
                                .certificatesTitle as string
                        }
                        list={
                            dictionary.Employment.texts.certificates as string[]
                        }
                    />
                </div>
            </Card>

            {/* Application Preview Section */}
            <Card className="mt-8 p-6 shadow-md">
                <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                    {dictionary.Employment.texts.applyTitle}
                </h2>

                <div className="space-y-6">
                    <div className="border-b pb-4">
                        <h3 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.employmentApplication}
                        </h3>
                        <p className="text-left text-lg text-gray-600">
                            {dictionary.Employment.texts.needHelp}{" "}
                            <span className="font-bold text-primary hover:underline">
                                <a
                                    href={`mailto:${
                                        dictionary.Employment.texts
                                            .email as string
                                    }`}
                                >
                                    {dictionary.Employment.texts.email}
                                </a>
                            </span>{" "}
                            {dictionary.Employment.texts.readBefore}
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <p className="text-left text-lg text-gray-600">
                            {dictionary.Employment.texts.policy}
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.certRelease}
                        </h3>
                        <div className="space-y-2 text-gray-600">
                            <p className="text-left text-lg">
                                {dictionary.Employment.texts.certify}
                            </p>
                            <p className="text-left text-lg">
                                {dictionary.Employment.texts.authorize}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-2xl font-bold text-primary">
                            {dictionary.Employment.texts.covenant}
                        </h3>
                        <p className="text-left text-lg text-gray-600">
                            {dictionary.Employment.texts.agree}
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
