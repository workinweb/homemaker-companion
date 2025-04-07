/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck

"use client";

import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import WebViewer from "@pdftron/webviewer";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Spinner from "~/components/Spinner/Spinner";
import styles from "./apryse.module.css";

export function ApryseModuleHomemaker() {
    const [sending, setSending] = useState<boolean>(false);
    const [showPdfViewer, setShowPdfViewer] = useState<boolean>(false);

    const viewer = useRef();
    const instanceRef = useRef();
    const filePath = "service_agreement.pdf";

    const sendPDF = async () => {
        setSending(true);
        try {
            try {
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
                    upload_preset:
                        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
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

                const response = await axios.post("/api/serviceAgreement", {
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
            } catch (error) {
                console.error("Error processing PDF:", error);
                enqueueSnackbar(
                    "An error occurred while processing the PDF. Please try again.",
                    { variant: "error" },
                );
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            enqueueSnackbar("An unexpected error occurred. Please try again.", {
                variant: "error",
            });
        } finally {
            setSending(false);
        }
    };

    useEffect(() => {
        if (showPdfViewer) {
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
        }
    }, [showPdfViewer]);

    return (
        <div className="mx-auto sm:py-10">
            <Card className="mb-6 overflow-hidden border border-gray-200 bg-white shadow-xl">
                <CardBody className="p-0">
                    <div className="bg-primary p-6 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Service Agreement
                        </h2>
                        <p className="mt-2 text-white/80">
                            Please review and complete the service agreement
                            below
                        </p>
                    </div>

                    <Divider />

                    <div className="p-2 sm:p-6">
                        {!showPdfViewer ? (
                            <div className="flex flex-col items-center py-10">
                                <div className="mb-6 text-center">
                                    <p className="mb-4 text-gray-600">
                                        Click the button below to view and sign
                                        our service agreement
                                    </p>
                                    <svg
                                        className="mx-auto h-20 w-20 text-primary/60"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <Button
                                    color="primary"
                                    size="lg"
                                    onClick={() => setShowPdfViewer(true)}
                                    className="px-10 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
                                >
                                    Open Service Agreement
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <div className="mb-4 rounded-lg border border-gray-200 bg-white shadow-lg">
                                    <div
                                        className={`${styles.pdfViewerWrapper} h-[70vh] rounded-lg border border-gray-200`}
                                        ref={viewer}
                                    ></div>
                                </div>

                                <div className="mt-4 text-center text-sm text-gray-600">
                                    <p>
                                        Please review the document carefully
                                        before submitting
                                    </p>
                                </div>

                                <div className="mx-auto mb-4 mt-6 flex w-full flex-col gap-4 sm:flex-row">
                                    <Button
                                        variant="solid"
                                        color="primary"
                                        onClick={sendPDF}
                                        disabled={sending}
                                        size="lg"
                                        aria-label="Submit Application"
                                        className="px-10 py-6"
                                        startContent={
                                            !sending && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )
                                        }
                                    >
                                        {sending ? (
                                            <div className="flex items-center justify-center">
                                                <Spinner />
                                                <span className="ml-2">
                                                    Submitting Application...
                                                </span>
                                            </div>
                                        ) : (
                                            "Submit Application"
                                        )}
                                    </Button>

                                    <Button
                                        variant="flat"
                                        color="default"
                                        onClick={() => setShowPdfViewer(false)}
                                        size="lg"
                                        className="px-10 py-6"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
