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
                folder: `${process.env.CLOUDINARY_PDF_FOLDER}/${dateString}`,
                upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
                filename_override: creationName,
                public_id: creationName,
            });

            const formData = new FormData();
            formData.append("file", blob);
            formData.append(
                "upload_preset",
                `${process.env.CLOUDINARY_UPLOAD_PRESET}`,
            );
            formData.append(
                "folder",
                `${process.env.CLOUDINARY_PDF_FOLDER}/${dateString}`,
            );
            formData.append("public_id", creationName);
            formData.append("timestamp", timestamp);
            formData.append("api_key", process.env.CLOUDINARY_API_KEY);

            const uploadPdf = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUDNAME}/upload`,
                formData,
            );

            const response = await axios.post("/api/sendpdfApp", {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                url: uploadPdf.data.secure_url,
                name: values.name,
                email: values.email,
            });
            console.log("🚀 ~ sendPDF ~ response:", response);

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
                licenseKey: process.env.PDF_WEB_VIEWER, // sign up to get a key at https://dev.apryse.com
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
        <div className="PdfViewer">
            <div className="px-4 pb-5 sm:px-5 md:px-10 ">
                <h1>Indications:</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className="flex flex-col gap-5 py-5">
                    <Input
                        name="name"
                        value={values.name}
                        color={errors.name ? "danger" : "default"}
                        errorMessage={
                            errors.name && "Please enter a valid name"
                        }
                        onChange={handleValueChange}
                        isRequired
                        label={"Name"}
                        aria-label="Name"
                        classNames={{ label: "text-color-black" }}
                    />
                    <Input
                        name="email"
                        value={values.email}
                        color={errors.email ? "danger" : "default"}
                        errorMessage={
                            errors.email && "Please enter a valid email"
                        }
                        onChange={handleValueChange}
                        isRequired
                        label={"Email"}
                        type="email"
                        aria-label="Email"
                        classNames={{ label: "text-color-black" }}
                    />

                    <Button
                        variant="faded"
                        color="primary"
                        onClick={sendPDF}
                        disabled={sending}
                        aria-label="Send Pdf via Email to Evan Home Care"
                    >
                        {sending ? (
                            <>
                                <Spinner />
                                <p className="ml-2">{"Sending..."}</p>
                            </>
                        ) : (
                            "Send pdf via email"
                        )}
                    </Button>
                </div>

                <div
                    // className="webviewer"
                    className={styles.pdfViewerWrapper}
                    ref={viewer}
                ></div>
            </div>
        </div>
    );
}
