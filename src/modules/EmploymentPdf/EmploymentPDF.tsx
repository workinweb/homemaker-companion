"use client";

import React from "react";
import { pdfjs } from "react-pdf";

import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import { Button } from "@nextui-org/react";
import { PersonalData } from "./PersonalData";
import { z } from "zod";

export interface FormValues {
    firstName: string;
    middleName: string;
    lastName: string;
    sex: string;

    ss1: string;
    ss2: string;
    ss3: string;
}

export interface FormErrors {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    sex?: string;
    ss1?: string;
    ss2?: string;
    ss3?: string;
}

const schema = z.object({
    firstName: z.string(),
    middleName: z.string(),
    lastName: z.string(),
    sex: z.string(),

    ss1: z.string(),
    ss2: z.string(),
    ss3: z.string(),
});

export function EmploymentPDF() {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.js",
        import.meta.url,
    ).toString();

    const [values, setValues] = React.useState<FormValues>({
        firstName: "",
        lastName: "",
        middleName: "",
        sex: "Male",
        ss1: "",
        ss2: "",
        ss3: "",
    });
    const [errors, setErrors] = React.useState<FormErrors>({
        firstName: "",
        lastName: "",
        middleName: "",
        sex: "",
        ss1: "",
        ss2: "",
        ss3: "",
    });

    console.log(values);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => {
        if (optionalName) {
            setValues({ ...values, [optionalName]: e.target.value });
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };

    /**PDF LIB */
    function downloadURL(data: any, fileName: any) {
        const a = document.createElement("a");
        a.href = data;
        a.download = fileName;
        document.body.appendChild(a);
        //@ts-ignore
        a.style = "display: none";
        a.click();
        a.remove();
    }

    function downloadBlob(data: any, fileName: string, mimeType: any) {
        const blob = new Blob([data], {
            type: mimeType,
        });
        const url = window.URL.createObjectURL(blob);
        downloadURL(url, fileName);
        setTimeout(function () {
            return window.URL.revokeObjectURL(url);
        }, 1000);
    }

    async function modifyPdf(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const result = schema.safeParse(values);
        if (!result.success) {
            //@ts-ignore
            setErrors(result.error.formErrors.fieldErrors);
            return;
        }

        const path = "./";

        const url = "/APPLICATION-unlocked.pdf";
        // const url = "https://pdf-lib.js.org/assets/with_update_sections.pdf";
        const existingPdfBytes = await fetch(url).then((res) =>
            res.arrayBuffer(),
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const form = pdfDoc.getForm();
        const fields = form.getFields();

        fields.forEach((field) => {
            field.getName();
            switch (field.constructor.name) {
                case "PDFTextField":
                    console.log("TEXT NAME -> ", field.getName());
                    break;

                case "PDFDropdown":
                    console.log("DROPDOWN NAME -> ", field.getName());
                    break;
                case "PDFRadioGroup":
                    console.log("RADIOBUTTON NAME -> ", field.getName());
                    break;
                case "PDFCheckBox":
                    console.log("CHECKBOX NAME -> ", field.getName());
                    break;
            }
        });

        form.getRadioGroup("3").select("Choice 2");

        /**PERSONAL INFORMATION */
        form.getTextField("Emp First Name").setText("Kevin");
        form.getTextField("Emp MN Initial").setText("I don't have");
        form.getTextField("Emp Last Name").setText("Bueno");
        form.getTextField("DOB").setText("DOB"); //DATE OF BIRTH
        form.getRadioGroup("Sex").select("Male");
        form.getTextField("Address").setText("Lorda #58A ....etc");
        form.getTextField("City").setText("Santa Clara");
        form.getTextField("Zip").setText("50100");
        form.getTextField("Email").setText("kbueno1077@gmail.com");
        form.getTextField("Apt").setText("apto 1");
        form.getTextField("Phone").setText("+5353562795");
        form.getDropdown("STATE").select("Colorado");
        form.getTextField("DL").setText("????");
        form.getDropdown("STATE1").select("Alaska");
        form.getTextField("DL Expiration").setText("????");
        form.getTextField("SS1").setText("SS1");
        form.getTextField("SS2").setText("S2");
        form.getTextField("SS3").setText("SS3");

        /**CITIZEN STATUS */
        form.getRadioGroup("Citizen").select("Choice2");
        form.getTextField("Alien Registration Number").setText("????");
        form.getTextField("EAD Number").setText("????");
        form.getTextField("EAD Expiration").setText("????");

        /**FINANCIAL SUPPORT */
        form.getTextField("Bank for direct deposit").setText("????");
        form.getTextField("Routing Number").setText("????");
        form.getTextField("Account Number").setText("????");
        // form.PDFSignature("Employer Signature");

        /**PERSONAL 2 */
        form.getTextField("Other Names Used").setText("OTHER NAMES");

        form.flatten();
        const pdfBytes = await pdfDoc.save();

        // smallpdf_unlocked/Privacy-Notice-and-Consent-PNC-unlocked.pdf
        const outputname = path
            .replace("-unlocked", "")
            .replace("smallpdf_unlocked/", "");

        downloadBlob(pdfBytes, outputname, "application/pdf");
    }

    return (
        <div>
            <form onSubmit={modifyPdf}>
                <div className="m-10 rounded-lg bg-primary">
                    <PersonalData
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                    />
                </div>

                <Button type="submit" variant="flat">
                    Modify PDF using PDF-lib
                </Button>
            </form>
        </div>
    );
}
