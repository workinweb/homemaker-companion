/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck

"use client";

import { Button, Input } from "@nextui-org/react";
import WebViewer from "@pdftron/webviewer";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./apryser.module.css";
import { v4 as uuidv4 } from "uuid";

export function ApryserModule() {
    const [sending, setSending] = useState<boolean>(false);
    const [name, setName] = React.useState("");

    const viewer = useRef();
    const instanceRef = useRef();
    const filePath = "application.pdf";

    const sendPDF = async () => {
        setSending(true);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const documentViewer = instanceRef.current.Core.getDocumentViewers()[0];
        const { annotationManager } = instanceRef.current.Core;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const doc = documentViewer.getDocument();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const xfdfString = await annotationManager.exportAnnotations();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const dataPdf = await doc.getFileData({
            // saves the document with annotations in it
            xfdfString,
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const arr = new Uint8Array(dataPdf);
        const blob = new Blob([arr], { type: "application/pdf" });
        const uuid = uuidv4();

        const date = new Date();
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
        const year = date.getFullYear();
        const dateString = month + "-" + day + "-" + year;

        const creationName = `${name}-id:${uuid}`;

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        formData.append("timestamp", timestamp);
        // formData.append('signature', signature);
        formData.append("api_key", process.env.CLOUDINARY_API_KEY);

        const uploadPdf = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUDNAME}/upload`,
            formData,
        );

        const response = await axios.post("/api/sendpdfApp", {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            url: uploadPdf.data.secure_url,
            name: name,
        });
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
                    "toolbarGroup-Select",
                    "toolbarGroup-Insert",
                    "toolbarGroup-Edit",
                    "toolbarGroup-View",
                    "toolbarGroup-Shapes",
                    "toolbarGroup-Forms",
                    "toolbarGroup-Annotate",
                    "toolbarGroup-FillAndSign",
                    "toolbarGroup-Comments",
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
            <div className="px-10">
                <div className="py-5">
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onValueChange={setName}
                    />
                </div>

                <div className="absolute bottom-5 right-5 py-5">
                    <Button
                        variant="shadow"
                        color="primary"
                        onClick={sendPDF}
                        disabled={sending}
                    >
                        {sending ? "Sending..." : "Send Pdf in Email"}
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
