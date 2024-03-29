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
                <Input
                    className="mt-[-80px] max-w-[800px]"
                    type="password"
                    label="Enter the provided password"
                    name="password"
                    value={values.password}
                    color={errors.password ? "danger" : "default"}
                    errorMessage={
                        errors.password && "Please enter a valid password"
                    }
                    onChange={handleValueChange}
                    isRequired
                />

                <Button
                    onPress={evaluatePassord}
                    fullWidth
                    className="max-w-[800px]"
                    variant="faded"
                >
                    Login
                </Button>
            </div>
        );
    }

    return <ApryseModule />;
}
