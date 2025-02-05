"use client";

import { Button, Card, Input } from "@nextui-org/react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { FaLock, FaPlayCircle } from "react-icons/fa";
import { z } from "zod";
import Spinner from "~/components/Spinner/Spinner";
import TrainingModule from "./TrainingModule";

const schema = z.object({
    password: z.string().min(1),
});

export function TrainingWithLock() {
    const [values, setValues] = React.useState({
        password: "",
    });
    const [errors, setErrors] = React.useState({
        password: "",
    });
    const [isLocked, setIsLocked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const evaluatePassword = async () => {
        try {
            const result = schema.safeParse(values);

            if (result.success) {
                setIsLoading(true);
                try {
                    const response = await axios.post(
                        "/api/validateTrainingAccess",
                        {
                            password: values.password,
                        },
                    );

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
                //@ts-ignore
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
                            <FaPlayCircle className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Training
                        </h1>
                        <p className="text-sm text-gray-500">
                            Contact Evan Home Care for the password to access
                            the tutorial videos
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
                                onChange={handleValueChange}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && void evaluatePassword()
                                }
                                isRequired
                                classNames={{
                                    label: "text-gray-600",
                                    input: "bg-transparent",
                                }}
                                endContent={
                                    <FaLock className="text-gray-400" />
                                }
                            />
                        </div>

                        <Button
                            onPress={() => void evaluatePassword()}
                            className="w-full bg-primary text-white shadow-lg transition-transform hover:scale-[1.02]"
                            size="lg"
                            isDisabled={isLoading}
                        >
                            {isLoading ? <Spinner /> : "Access Tutorials"}
                        </Button>

                        <p className="text-center text-xs text-gray-500">
                            Need help? Contact our team
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    return <TrainingModule />;
}
