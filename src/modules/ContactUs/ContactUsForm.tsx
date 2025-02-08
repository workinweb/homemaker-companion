"use client";

import { Textarea } from "@nextui-org/input";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import React, { type SyntheticEvent } from "react";
import Spinner from "~/components/Spinner/Spinner";

export function ContactUsForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!name || !email || !phone) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                cleanInputs();
                enqueueSnackbar("Email sent", { variant: "success" });
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
        setEmail("");
        setPhone("");
        setMessage("");
        setIsSubmitted(false);
    };

    return (
        <Card className="h-[750px] w-full max-w-[520px] px-2 py-8">
            <CardBody>
                <div id="ContactUs" className="mb-5">
                    <h2 className="text-xl font-bold text-primary">
                        Contact Us
                    </h2>
                    <p className="text-lg  text-primary">
                        Your messages are important to us.
                    </p>
                </div>

                <form
                    onSubmit={submit}
                    className="flex h-full flex-col justify-between"
                >
                    <div className="flex flex-col gap-8">
                        <Input
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
                            fullWidth
                            required={true}
                            placeholder="Email *"
                            value={email}
                            onValueChange={setEmail}
                            isInvalid={isSubmitted && !email}
                            errorMessage={
                                isSubmitted && !email ? "Email is required" : ""
                            }
                        />

                        <Input
                            fullWidth
                            required={true}
                            placeholder="Phone *"
                            value={phone}
                            onValueChange={setPhone}
                            isInvalid={isSubmitted && !phone}
                            errorMessage={
                                isSubmitted && !phone ? "Phone is required" : ""
                            }
                        />

                        <Textarea
                            fullWidth
                            maxRows={8}
                            minRows={8}
                            labelPlacement="outside"
                            placeholder="Your Message"
                            className="w-full"
                            value={message}
                            onValueChange={setMessage}
                        />
                    </div>

                    <Button
                        fullWidth
                        type="submit"
                        size="md"
                        color="primary"
                        variant="shadow"
                        className="mt-5"
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
