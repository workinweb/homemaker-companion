/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck

"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { z } from "zod";
import axios from "axios";

const schema = z.object({
    name: z.string().min(1),
    zip: z.string().min(1),
    email: z.string().email().min(1),
    DOB: z.string().min(1),
});

export function EmploymentForm() {
    const [sending, setSending] = React.useState<boolean>(false);
    const [values, setValues] = React.useState({
        name: "",
        zip: "",
        email: "",
        DOB: "",
    });

    const [errors, setErrors] = React.useState({
        name: "",
        zip: "",
        email: "",
        DOB: "",
    });

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => {
        if (optionalName) {
            setValues({ ...values, [optionalName]: e.target.value });
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };

    const evaluateSubmit = async () => {
        setSending(true);
        const result = schema.safeParse(values);
        setErrors({
            name: "",
            zip: "",
            email: "",
            DOB: "",
        });

        if (result.success) {
            const response = await axios.post("/api/employmentRequest", {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                zip: values.zip,
                name: values.name,
                email: values.email,
                DOB: values.DOB,
            });

            if (response.data.EvanEmailResponse.data) {
                enqueueSnackbar("The request was successfully send", {
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
            //@ts-expect-error
            setErrors(result.error.formErrors.fieldErrors);
        }
        setSending(false);
    };

    return (
        <div className="pt-10">
            <div className="flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
                <div className="flex w-full flex-col justify-evenly gap-5">
                    <Input
                        className="max-w-[800px]"
                        label="Enter your Full Name"
                        name="name"
                        value={values.name}
                        color={errors.name ? "danger" : "default"}
                        errorMessage={
                            errors.name && "Please enter a valid Name"
                        }
                        aria-label="Please enter a valid Name"
                        onChange={handleValueChange}
                        isRequired
                        classNames={{ label: "text-color-black" }}
                    />

                    <Input
                        className="max-w-[800px]"
                        label="Provide the your Email"
                        name="email"
                        value={values.email}
                        color={errors.email ? "danger" : "default"}
                        errorMessage={
                            errors.zip && "Please enter a valid email"
                        }
                        aria-label="Please enter a valid email"
                        onChange={handleValueChange}
                        isRequired
                        classNames={{ label: "text-color-black" }}
                    />

                    <Input
                        className="max-w-[800px]"
                        label="Provide your Zip Code"
                        name="zip"
                        value={values.zip}
                        color={errors.zip ? "danger" : "default"}
                        errorMessage={errors.zip && "Please enter a valid Zip"}
                        aria-label="Please enter a valid Zip"
                        onChange={handleValueChange}
                        isRequired
                        classNames={{ label: "text-color-black" }}
                    />

                    <div>
                        <p className="mb-1 italic text-primary">
                            Date of Birth:
                        </p>
                        <Input
                            className="max-w-[800px] cursor-pointer"
                            aria-label="Submit Date of Birth"
                            name="DOB"
                            type="date"
                            value={values.DOB}
                            color={errors.DOB ? "danger" : "default"}
                            errorMessage={
                                errors.DOB &&
                                "Please enter a valid Date of Birth"
                            }
                            max={new Date().toJSON().slice(0, 10)}
                            onChange={handleValueChange}
                            isRequired
                        />
                    </div>
                </div>

                <div className="flex w-full items-end justify-end">
                    <Button
                        size="lg"
                        className="w-full md:max-w-[350px]"
                        color="primary"
                        aria-label="Submit Employment Form"
                        onClick={evaluateSubmit}
                    >
                        {sending ? (
                            <>
                                <Spinner />
                                <p className="ml-2">{"Submiting..."}</p>
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
