"use client";

import React, { useState } from "react";
import { ApryseModule } from "./ApryseModule";
import { Button, Input } from "@nextui-org/react";
import { z } from "zod";
import { enqueueSnackbar } from "notistack";

const schema = z.object({
    password: z.string().min(1),
});

export function ApryseWithLock() {
    const [values, setValues] = React.useState({
        password: "",
    });

    const [errors, setErrors] = React.useState({
        password: "",
    });
    const [isLocked, setIsLocked] = useState(true);

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => {
        if (optionalName) {
            setValues({ ...values, [optionalName]: e.target.value });
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };

    const evaluatePassord = () => {
        const result = schema.safeParse(values);

        if (result.success) {
            if (values.password === process.env.JOB_APPLICATION_PASSWORD) {
                setIsLocked(false);
            } else {
                enqueueSnackbar("Password incorrect", {
                    variant: "error",
                });
            }
        } else {
            //@ts-expect-error
            setErrors(result.error.formErrors.fieldErrors);
        }
    };

    if (isLocked) {
        return (
            <div className="md:p10 h-100 flex h-screen flex-col items-center justify-center gap-5 bg-primary p-2 sm:p-5">
                <div className="mt-[-80px] flex w-full flex-col items-center justify-center gap-5">
                    <h1 className="text-xl font-bold text-white">
                        Contact Evan Home Care for the password to fill the
                        employment form.
                    </h1>

                    <Input
                        className="max-w-[800px]"
                        type="password"
                        label="Enter the provided password"
                        name="password"
                        value={values.password}
                        color={errors.password ? "danger" : "default"}
                        errorMessage={
                            errors.password && "Please enter a valid password"
                        }
                        aria-label="Please enter a valid password"
                        onChange={handleValueChange}
                        isRequired
                        classNames={{ label: "text-color-black" }}
                    />

                    <Button
                        onPress={evaluatePassord}
                        fullWidth
                        className="max-w-[800px]"
                        variant="faded"
                        aria-label="Access Button"
                    >
                        Login
                    </Button>
                </div>
            </div>
        );
    }

    return <ApryseModule />;
}
