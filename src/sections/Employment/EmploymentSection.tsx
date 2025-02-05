"use client";

import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExcelViewer } from "~/components/ExcelViewer/ExcelViewer";
import { List } from "~/components/List/List";
import Spinner from "~/components/Spinner/Spinner";
import dictionary from "~/dictionary/dictionaryLink";
import styles from "./Employment.module.css";

export function EmploymentSection() {
    const [file, setFile] = React.useState<string>("");
    const [isFileLoading, setIsFileLoading] = React.useState<boolean>(false);

    const response = useQuery({
        queryKey: ["cloudinaryUrl"],
        queryFn: async () => {
            try {
                setIsFileLoading(true);
                const response = await fetch("/api/getExcel");

                if (!response.ok) {
                    throw new Error("Failed to fetch file URL");
                }

                const data = (await response.json()) as string;
                setFile(data);
                return data;
            } catch (error) {
                console.error("Error fetching Excel file:", error);
                throw error;
            } finally {
                setIsFileLoading(false);
            }
        },
    });

    return (
        <div id="Employment" className="mx-auto max-w-[1200px] sm:py-10">
            {/* Header Section */}
            <div className="mb-10">
                <div className="relative mt-8 flex flex-col items-center justify-between gap-8 rounded-xl bg-gradient-to-br from-transparent via-primary/5 to-transparent p-8 sm:mt-4 sm:flex-row lg:mt-0">
                    <div className="relative">
                        <Image
                            width={150}
                            height={150}
                            src="/logo.webp"
                            alt="Evan Home Care Logo"
                            className="relative z-10 h-24 w-24 transform transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32"
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold uppercase text-transparent sm:text-2xl sm:text-5xl">
                            {dictionary.Employment.texts.sectionName}
                        </h1>
                        <div className="mt-2 h-1 w-20 rounded bg-gradient-to-r from-primary/30 to-primary/20 sm:w-32"></div>
                    </div>

                    <div className="hidden sm:block">
                        <div className="relative h-16 w-16 rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
                            <svg
                                className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-primary/40"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>
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

            {/* Excel Viewer Section */}
            <Card className="mt-8 p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-primary">
                    {
                        dictionary.Employment.texts
                            .employmentApplication as string
                    }
                </h3>

                {!isFileLoading && file ? (
                    <ExcelViewer file={file} />
                ) : (
                    <div className="flex justify-center p-4">
                        <Spinner />
                    </div>
                )}
            </Card>

            {/* Application Preview Section */}
            <Card className="mt-8 p-6 shadow-md">
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

            <Button
                as={Link}
                href="/job-application"
                color="primary"
                size="lg"
                fullWidth
                className="mt-8 w-full"
            >
                Access Employment Application Form
            </Button>
        </div>
    );
}
