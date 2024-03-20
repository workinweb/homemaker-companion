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
        form.getTextField("Home Phone").setText("Home Phone");
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
        // form.getSignature("Employer Signature").ref.

        /**PERSONAL 2 */
        form.getTextField("Other Names Used").setText("OTHER NAMES");
        form.getTextField("Position Applied For").setText(
            "POSITION APPLIED FOR",
        );
        form.getTextField("Salary Desired").setText("Salary Desired");
        form.getTextField("No").setText("NUMBER ??");
        form.getTextField("If under 18 do you have a work permit").setText(
            "WORK PERMIT UNDERAGE",
        );

        /**EDUCATION  */
        form.getTextField("AddressHigh School").setText("AddressHigh School");
        form.getTextField("Major StudiesHigh School").setText(
            "Major StudiesHigh School",
        );
        form.getTextField(
            "Degree Diploma License or CertificateHigh School",
        ).setText("Degree Diploma License or CertificateHigh School");
        form.getTextField("AddressCollegeUniversity").setText(
            "AddressCollegeUniversity",
        );
        form.getTextField("Major StudiesCollegeUniversity").setText(
            "Major StudiesCollegeUniversity",
        );
        form.getTextField(
            "Degree Diploma License or CertificateCollegeUniversity",
        ).setText("Degree Diploma License or CertificateCollegeUniversity");
        form.getTextField("AddressVocational Business Other").setText(
            "AddressVocational Business Other",
        );
        form.getTextField("Major StudiesVocational Business Other").setText(
            "Major StudiesVocational Business Other",
        );
        form.getTextField(
            "Degree Diploma License or CertificateVocational Business Other",
        ).setText(
            "Degree Diploma License or CertificateVocational Business Other",
        );
        form.getTextField(
            "List Any Professional Designations and Licenses including license numbers and expiration dates",
        ).setText(
            "List Any Professional Designations and Licenses including license numbers and expiration dates",
        );
        form.getTextField(
            "Other Special Knowledge Skills or Qualifications",
        ).setText("Other Special Knowledge Skills or Qualifications");
        form.getTextField("Do you type Yes No If yes WPM").setText(
            "Do you type Yes No If yes WPM",
        );
        form.getTextField("Computer Skills HardwareSoftware").setText(
            "Computer Skills HardwareSoftware",
        );
        form.getTextField("Graduate Studies").setText("Graduate Studies");

        form.getRadioGroup("4").select("Choice 1");
        form.getRadioGroup("5").select("Choice 1");

        //type
        form.getRadioGroup("10").select("Choice 2");
        form.getRadioGroup("8").select("Choice 2");

        /**EMPLOYMENT HISTORY  */
        form.getTextField("Employer Name").setText("Employer Name");
        form.getTextField("Supervisor Name").setText("Supervisor Name");
        form.getTextField("Starting Salary").setText("Starting Salary");
        form.getTextField("Employer Address").setText("Employer Address");
        form.getTextField("Supervisor Phone").setText("Supervisor Phone");
        form.getTextField("Ending Salary").setText("Ending Salary");
        form.getTextField("Job Title").setText("Job Title");
        form.getTextField("Reason for Leaving").setText("Reason for Leaving");
        form.getTextField("Duties  ResponsibilitiesRow1").setText(
            "Duties  ResponsibilitiesRow1",
        );

        form.getTextField("Employer Name_2").setText("Employer Name_2");
        form.getTextField("Supervisor Name_2").setText("Supervisor Name_2");
        form.getTextField("Starting Salary_2").setText("Starting Salary_2");
        form.getTextField("Employer Address_2").setText("Employer Address_2");
        form.getTextField("Supervisor Phone_2").setText("Supervisor Phone_2");
        form.getTextField("Ending Salary_2").setText("Ending Salary_2");
        form.getTextField("Job Title_2").setText("Job Title_2");
        form.getTextField("Reason for Leaving_2").setText(
            "Reason for Leaving_2",
        );
        form.getTextField("Duties  ResponsibilitiesRow1_2").setText(
            "Duties  ResponsibilitiesRow1_2",
        );

        form.getTextField("Employer Name_3").setText("Employer Name_3");
        form.getTextField("Supervisor Name_3").setText("Supervisor Name_3");
        form.getTextField("Starting Salary_3").setText("Starting Salary_3");
        form.getTextField("Employer Address_3").setText("Employer Address_3");
        form.getTextField("Supervisor Phone_3").setText("Supervisor Phone_3");
        form.getTextField("Ending Salary_3").setText("Ending Salary_3");
        form.getTextField("Job Title_3").setText("Job Title_3");
        form.getTextField("Reason for Leaving_3").setText(
            "Reason for Leaving_3",
        );
        form.getTextField("Duties  ResponsibilitiesRow1_3").setText(
            "Duties  ResponsibilitiesRow1_3",
        );

        form.getTextField("Employer Name_4").setText("Employer Name_4");
        form.getTextField("Supervisor Name_4").setText("Supervisor Name_4");
        form.getTextField("Starting Salary_4").setText("Starting Salary_4");
        form.getTextField("Employer Address_4").setText("Employer Address_4");
        form.getTextField("Supervisor Phone_4").setText("Supervisor Phone_4");
        form.getTextField("Ending Salary_4").setText("Ending Salary_4");
        form.getTextField("Job Title_4").setText("Job Title_4");
        form.getTextField("Reason for Leaving_4").setText(
            "Reason for Leaving_4",
        );
        form.getTextField("Duties  ResponsibilitiesRow1_4").setText(
            "Duties  ResponsibilitiesRow1_4",
        );

        form.getTextField("Date15_es_:signer:date").setText(
            "Date15_es_:signer:date15",
        );
        form.getTextField("Date16_es_:signer:date").setText(
            "Date16_es_:signer:date16",
        );
        form.getTextField("Date17_es_:signer:date").setText(
            "Date18_es_:signer:date18",
        );
        form.getTextField("Date18_es_:signer:date").setText(
            "Date18_es_:signer:date18",
        );
        form.getTextField("Date19_es_:signer:date").setText(
            "Date19_es_:signer:date19",
        );
        form.getTextField("Date20_es_:signer:date").setText(
            "Date20_es_:signer:date20",
        );
        form.getTextField("Date21_es_:signer:date").setText(
            "Date21_es_:signer:date21",
        );
        form.getTextField("Date22_es_:signer:date").setText(
            "Date22_es_:signer:date22",
        );

        form.getRadioGroup("6").select("Choice 2");
        form.getRadioGroup("7").select("Choice 2");
        form.getRadioGroup("8").select("Choice 2");
        form.getRadioGroup("9").select("Choice 2");

        // form.getTextField("Signature").setText("Signature");

        form.getTextField("Reference Name").setText("Reference Name");
        form.getTextField("Reference Address").setText("Reference Address");
        form.getTextField("Reference Phone").setText("Reference Phone");
        form.getTextField("Reference Other Contact Information").setText(
            "Reference Other Contact Information",
        );
        form.getTextField("From Date of Relationship").setText(
            "From Date of Relationship",
        );
        form.getTextField("To Date of Relationship").setText(
            "To Date of Relationship",
        );
        form.getTextField(
            "Title of Professional Position When Working with the Applicant",
        ).setText(
            "Title of Professional Position When Working with the Applicant",
        );
        form.getTextField(
            "Agency/Institution When Working with Applicant",
        ).setText("Agency/Institution When Working with Applicant");
        form.getTextField(
            "Address of Agency When Worked with Applicant",
        ).setText("Address of Agency When Worked with Applicant");
        form.getTextField("ADDITIONAL COMMENTS").setText("ADDITIONAL COMMENTS");

        form.getRadioGroup("11").select("Choice 2");
        form.getRadioGroup("12").select("Choice 2");
        form.getTextField("Date2").setText("Date2");

        form.getTextField("Reference Name2").setText("Reference Name2");
        form.getTextField("Reference Address2").setText("Reference Address2");
        form.getTextField("Reference Phone2").setText("Reference Phone2");
        form.getTextField("Reference Other Contact Information2").setText(
            "Reference Other Contact Information",
        );
        form.getTextField("From Date of Relationship2").setText(
            "From Date of Relationship2",
        );
        form.getTextField("To Date of Relationship2").setText(
            "To Date of Relationship2",
        );
        form.getTextField(
            "Title of Professional Position When Working with the Applicant2",
        ).setText(
            "Title of Professional Position When Working with the Applicant2",
        );
        form.getTextField(
            "Agency/Institution When Working with Applicant2",
        ).setText("Agency/Institution When Working with Applicant2");
        form.getTextField(
            "Address of Agency When Worked with Applicant2",
        ).setText("Address of Agency When Worked with Applicant2");
        form.getTextField("ADDITIONAL COMMENTS").setText(
            "ADDITIONAL COMMENTS2",
        );
        form.getRadioGroup("Recommendation2").select("I Do Recommend2");
        // form.getTextField("Supervisor Signature").setText("Supervisor Signature");

        form.getTextField("Date3").setText("Date3");

        // form.getTextField("Signature1").setText("Signature1");
        // form.getTextField("Signature10").setText("Signature10");
        // form.getTextField("Signature11").setText("Signature11");
        form.getTextField("Orientation conducted by").setText(
            "Orientation conducted by",
        );
        form.getTextField("Date_3").setText("Date_3");

        form.getCheckBox("Check Box1").check();
        form.getCheckBox("Check Box2").check();
        form.getCheckBox("Check Box3").check();
        form.getCheckBox("Check Box4").check();
        form.getCheckBox("Check Box5").check();
        form.getCheckBox("Check Box6").check();
        form.getCheckBox("Check Box7").check();
        form.getCheckBox("Check Box8").check();

        // form.getTextField("Signature14").setText("Signature14");
        form.getTextField("EmpINI").setText("EmpINI");
        form.getTextField("AgencyINI").setText("AgencyINI");

        // This are Select
        form.getDropdown("Day").select("Choice 2");
        form.getDropdown("Month").select("Choice 2");
        form.getDropdown("Year").select("Choice 2");

        // form.getTextField("By_1").setText("By_1");
        // form.getTextField("undefined_1").setText("undefined_1");
        form.getTextField("Date_2").setText("Date_2");

        form.getTextField("By_2").setText("By_2");
        form.getTextField("Administrator").setText("Administrator");
        form.getTextField("By_3").setText("By_3");
        form.getTextField("Print Name_2").setText("Print Name_2");
        form.getTextField("By_4").setText("By_4");
        form.getTextField("Administrator_2").setText("Administrator_2");
        form.getTextField("Date_4").setText("Date_4");
        // form.getTextField("Signature2").setText("Signature2");

        form.getTextField("undefined_2").setText("undefined_2");
        form.getTextField("Date").setText("Date");
        form.getTextField("Initials_2").setText("Initials_2");
        form.getTextField("Date_7").setText("Date_7");
        form.getTextField("Administrator Initials_2").setText(
            "Administrator Initials_2",
        );
        form.getTextField("Date_8").setText("Date_8");
        form.getTextField("Initials_3").setText("Initials_3");
        form.getTextField("Date_8").setText("Date_8");
        form.getTextField("Date_9").setText("Date_9");
        form.getTextField("Administrator Initials_3").setText(
            "Administrator Initials_3",
        );
        form.getTextField("Date_10").setText("Date_10");
        form.getTextField("undefined_5").setText("undefined_5");

        form.getTextField("Initials_4").setText("Initials_4");
        form.getTextField("Date_11").setText("Date_11");
        form.getTextField("Administrator Initials_4").setText(
            "Administrator Initials_4",
        );
        form.getTextField("Date_12").setText("Date_12");

        form.getTextField("ProviderEmployer Name").setText(
            "ProviderEmployer Name",
        );

        form.getTextField(
            "Position for ProviderEmployer listed on pg 1",
        ).setText("Position for ProviderEmployer listed on pg 1");

        // form.getTextField("Signature2_es_:signer:signature").setText("Date_10");
        // form.getTextField("Signature3_es_:signer:signature").setText("Date_10");
        // form.getTextField("Signature12").setText("Date_10");
        // form.getTextField("Signature13").setText("Date_10");
        form.getTextField("OtherLN").setText("OtherLN");
        form.getTextField("TextField 141").setText("TextField 141");
        form.getTextField("TextField 142").setText("TextField 142");
        form.getTextField("TextField 143").setText("TextField 143");
        // form.getTextField("Signature3").setText("Signature3");
        form.getCheckBox("Check Box9").check();
        form.getCheckBox("Check Box10").check();

        form.getOptionList("Status").select("Citizen");
        form.getTextField("Text13").setText("Text13");
        form.getTextField("Emp Last Name#11").setText("Emp Last Name#11");
        form.getTextField("Emp First Name#12").setText("Emp First Name#12");
        form.getTextField("Emp MN Initial#11").setText("Emp MN Initial#11");

        form.getCheckBox("Checkbox 55").check();
        form.getCheckBox("Checkbox 56").check();
        form.getCheckBox("Checkbox 57").check();
        form.getCheckBox("Checkbox 58").check();
        form.getCheckBox("Checkbox 59").check();
        form.getCheckBox("Checkbox 60").check();

        // form.getTextField("Signature28").setText("Signature28");
        form.getTextField("BussName").setText("BussName");
        form.getTextField("EIN1").setText("R1");
        form.getTextField("EIN2").setText("R2");

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
