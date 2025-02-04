"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button, Input, Card } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { z } from "zod";
import { FaLock, FaLockOpen } from "react-icons/fa";
import axios from "axios";
import Spinner from "~/components/Spinner/Spinner";

const ApryseModule = dynamic(
    () => import("./ApryseModule").then((mod) => mod.ApryseModule),
    {
        ssr: false,
    },
);

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
    const [isLoading, setIsLoading] = useState(false);

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => {
        if (optionalName) {
            setValues({ ...values, [optionalName]: e.target.value });
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };

    const evaluatePassord = async () => {
        try {
            const result = schema.safeParse(values);

            if (result.success) {
                setIsLoading(true);
                try {
                    const response = await axios.post("/api/validatePassword", {
                        password: values.password,
                    });

                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    if (response.data?.isValid) {
                        setIsLocked(false);
                    } else {
                        enqueueSnackbar("Password incorrect", {
                            variant: "error",
                        });
                    }
                } catch (error) {
                    console.error("Error validating password:", error);
                    enqueueSnackbar(
                        "Error validating password. Please try again.",
                        {
                            variant: "error",
                        },
                    );
                } finally {
                    setIsLoading(false);
                }
            } else {
                //@ts-expect-error
                setErrors(result.error.formErrors.fieldErrors);
            }
        } catch (error) {
            console.error("Error validating input:", error);
            enqueueSnackbar("An unexpected error occurred. Please try again.", {
                variant: "error",
            });
        }
    };

    if (isLocked) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-4">
                <Card className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-2xl">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="rounded-full bg-primary/5 p-3">
                            <FaLock className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Protected Form
                        </h1>
                        <p className="text-sm text-gray-500">
                            Contact Evan Home Care for the password to access
                            the employment form
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                label="Password"
                                name="password"
                                value={values.password}
                                color={errors.password ? "danger" : "default"}
                                errorMessage={
                                    errors.password &&
                                    "Please enter a valid password"
                                }
                                aria-label="Please enter a valid password"
                                onChange={handleValueChange}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && void evaluatePassord()
                                }
                                isRequired
                                classNames={{
                                    label: "text-gray-600",
                                    input: "bg-transparent",
                                }}
                                endContent={
                                    <FaLockOpen className="h-4 w-4 text-gray-400" />
                                }
                            />
                        </div>

                        <Button
                            onPress={() => void evaluatePassord()}
                            className="w-full bg-primary text-white shadow-lg transition-transform hover:scale-[1.02]"
                            size="lg"
                            aria-label="Access Button"
                            isDisabled={isLoading}
                        >
                            {isLoading ? <Spinner /> : "Unlock Access"}
                        </Button>

                        <p className="text-center text-xs text-gray-500">
                            Need help? Contact our team
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    return <ApryseModule />;
}
