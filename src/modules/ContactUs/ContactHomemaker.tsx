"use client";

import { Textarea } from "@nextui-org/input";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import React, { type SyntheticEvent } from "react";
import Spinner from "~/components/Spinner/Spinner";

export function ContactHomemaker() {
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!name || !address || !email || !phone) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/contactHomemaker", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    address,
                    email,
                    phone,
                    comment,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                cleanInputs();
                enqueueSnackbar("Request sent successfully", {
                    variant: "success",
                });
            } else {
                console.error(data);
                enqueueSnackbar(
                    "An error occurred sending the data to EvanHomeCare, try again later",
                    { variant: "error" },
                );
            }
        } catch (error) {
            console.error(error);
            enqueueSnackbar(
                "An error occurred sending the data to EvanHomeCare, try again later",
                { variant: "error" },
            );
        } finally {
            setLoading(false);
        }
    };

    const cleanInputs = () => {
        setName("");
        setAddress("");
        setEmail("");
        setPhone("");
        setComment("");
        setIsSubmitted(false);
    };

    return (
        <Card className="w-full max-w-[520px] px-2 py-4 shadow-md">
            <CardBody className="px-2 py-2">
                <div id="ContactHomemaker" className="mb-3">
                    <h2 className="text-xl font-bold text-primary">
                        Contact Us
                    </h2>
                </div>

                <form onSubmit={submit} className="flex flex-col">
                    <div className="mb-4 flex flex-col gap-4">
                        <Input
                            size="sm"
                            fullWidth
                            required={true}
                            placeholder="Name *"
                            value={name}
                            onValueChange={setName}
                            isInvalid={isSubmitted && !name}
                            errorMessage={
                                isSubmitted && !name ? "Name is required" : ""
                            }
                        />

                        <Input
                            size="sm"
                            fullWidth
                            required={true}
                            placeholder="Address *"
                            value={address}
                            onValueChange={setAddress}
                            isInvalid={isSubmitted && !address}
                            errorMessage={
                                isSubmitted && !address
                                    ? "Address is required"
                                    : ""
                            }
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                size="sm"
                                fullWidth
                                required={true}
                                placeholder="Email *"
                                value={email}
                                onValueChange={setEmail}
                                isInvalid={isSubmitted && !email}
                                errorMessage={
                                    isSubmitted && !email
                                        ? "Email is required"
                                        : ""
                                }
                            />

                            <Input
                                size="sm"
                                fullWidth
                                required={true}
                                placeholder="Phone *"
                                value={phone}
                                onValueChange={setPhone}
                                isInvalid={isSubmitted && !phone}
                                errorMessage={
                                    isSubmitted && !phone
                                        ? "Phone is required"
                                        : ""
                                }
                            />
                        </div>

                        <Textarea
                            size="sm"
                            fullWidth
                            maxRows={5}
                            minRows={5}
                            labelPlacement="outside"
                            placeholder="Comment"
                            className="w-full"
                            value={comment}
                            onValueChange={setComment}
                        />
                    </div>

                    <Button
                        fullWidth
                        type="submit"
                        size="md"
                        color="primary"
                        variant="shadow"
                        className="mt-2"
                    >
                        {!loading ? (
                            "Send"
                        ) : (
                            <div>
                                <Spinner />
                            </div>
                        )}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}
