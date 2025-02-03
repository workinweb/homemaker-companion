/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck

"use client";

import { Button, Input } from "@nextui-org/react";
import WebViewer from "@pdftron/webviewer";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./apryse.module.css";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import Spinner from "~/components/Spinner/Spinner";
import { enqueueSnackbar } from "notistack";
import Image from "next/image";

const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).email("Must be and email"),
});

export function ApryseModule() {
    const [sending, setSending] = useState<boolean>(false);

    const [values, setValues] = React.useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = React.useState({
        name: "",
        email: "",
    });

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => {
        if (optionalName) {
            setValues({ ...values, [optionalName]: e.target.value });
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };

    const viewer = useRef();
    const instanceRef = useRef();
    const filePath = "application.pdf";

    const sendPDF = async () => {
        setSending(true);

        const result = schema.safeParse(values);

        if (result.success) {
            const documentViewer =
                instanceRef.current.Core.getDocumentViewers()[0];
            const { annotationManager } = instanceRef.current.Core;
            const doc = documentViewer.getDocument();
            const xfdfString = await annotationManager.exportAnnotations();
            const dataPdf = await doc.getFileData({
                // saves the document with annotations in it
                xfdfString,
            });

            const arr = new Uint8Array(dataPdf);
            const blob = new Blob([arr], { type: "application/pdf" });
            const uuid = uuidv4();

            const date = new Date();
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
            const year = date.getFullYear();
            const dateString = month + "-" + day + "-" + year;

            const creationName = `${values.name}-id:${uuid}`;

            const {
                data: { signature, timestamp, error },
            } = await axios.post("/api/cloudinary", {
                folder: `${process.env.NEXT_PUBLIC_CLOUDINARY_PDF_FOLDER}/${dateString}`,
                upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
                filename_override: creationName,
                public_id: creationName,
            });

            const formData = new FormData();
            formData.append("file", blob);
            formData.append(
                "upload_preset",
                `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`,
            );
            formData.append(
                "folder",
                `${process.env.NEXT_PUBLIC_CLOUDINARY_PDF_FOLDER}/${dateString}`,
            );
            formData.append("public_id", creationName);
            formData.append("timestamp", timestamp);
            formData.append(
                "api_key",
                process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
            );

            const uploadPdf = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            const response = await axios.post("/api/jobApplication", {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                url: uploadPdf.data.secure_url,
                name: values.name,
                email: values.email,
            });

            if (response.data.EvanEmailResponse.data) {
                enqueueSnackbar("Pdf was sent correctly to EvanHomeCare", {
                    variant: "success",
                });
            }
            if (response.data.EvanEmailResponse.error) {
                console.error(response.data.EvanEmailResponse.error);
                enqueueSnackbar(
                    "An error ocurred sending the data to EvanHomeCare, try again later",
                    { variant: "error" },
                );
            }
        } else {
            setErrors(result.error.formErrors.fieldErrors);
        }
        setSending(false);
    };

    useEffect(() => {
        WebViewer(
            {
                path: "/webviewer/lib",
                licenseKey: process.env.NEXT_PUBLIC_PDF_WEB_VIEWER,
                initialDoc: filePath,
                enableOfficeEditing: false,
                disabledElements: [
                    // "toolbarGroup-Select",
                    // "toolbarGroup-Insert",
                    // "toolbarGroup-Edit",
                    // "toolbarGroup-View",
                    // "toolbarGroup-Shapes",
                    // "toolbarGroup-Forms",
                    // "toolbarGroup-Annotate",
                    // "toolbarGroup-FillAndSign",
                    // "toolbarGroup-Comments",
                ],
            },
            viewer.current,
        )
            .then((instance) => {
                const { docViewer } = instance;
                instanceRef.current = instance;

                // you can now call WebViewer APIs here...
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="mx-auto max-w-[1200px] py-10">
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
                        <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-bold uppercase text-transparent sm:text-5xl">
                            Employment Application
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
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
                <div className="mb-8">
                    <div className="rounded-md bg-blue-50 p-4">
                        <h2 className="mb-2 text-xl font-semibold text-primary">
                            Important Instructions:
                        </h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Please complete all required fields in the
                                application form
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Missing information may delay your application
                                process
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Contact us if you need to update any information
                                after submission
                            </li>

                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Application can be submitted via the send button
                                at the end or downloaded and emailed to
                                "evanhomecare@mail.com"
                            </li>

                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Do not refresh the page or leave the site as it
                                will reset the form. If you need to pause,
                                please download and email it instead
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 space-y-6">
                    <div>
                        <Input
                            name="name"
                            value={values.name}
                            color={errors.name ? "danger" : "default"}
                            errorMessage={
                                errors.name && "Please enter a valid name"
                            }
                            onChange={handleValueChange}
                            isRequired
                            label="Full Name"
                            aria-label="Full Name"
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "border-gray-300",
                            }}
                        />
                    </div>

                    <div>
                        <Input
                            name="email"
                            value={values.email}
                            color={errors.email ? "danger" : "default"}
                            errorMessage={
                                errors.email && "Please enter a valid email"
                            }
                            onChange={handleValueChange}
                            isRequired
                            label="Email Address"
                            type="email"
                            aria-label="Email Address"
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "border-gray-300",
                            }}
                        />
                    </div>
                </div>

                <div
                    className={`${styles.pdfViewerWrapper} rounded-lg border border-gray-200`}
                    ref={viewer}
                ></div>
            </div>

            <Button
                className="mt-5 w-full"
                variant="solid"
                color="primary"
                onClick={sendPDF}
                disabled={sending}
                size="lg"
                aria-label="Submit Application"
            >
                {sending ? (
                    <div className="flex items-center justify-center">
                        <Spinner />
                        <span className="ml-2">Submitting Application...</span>
                    </div>
                ) : (
                    "Submit Application"
                )}
            </Button>
        </div>
    );
}
