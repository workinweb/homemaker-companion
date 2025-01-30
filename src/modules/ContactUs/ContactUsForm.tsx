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

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
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
                console.error(data.error);
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
    };

    return (
        <Card className="h-[680px] w-full max-w-[520px]  px-2 py-8">
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
                            placeholder="Add your Name *"
                            value={name}
                            onValueChange={setName}
                        />

                        <Input
                            fullWidth
                            required={true}
                            placeholder="Add your email *"
                            value={email}
                            onValueChange={setEmail}
                        />

                        <Input
                            fullWidth
                            required={true}
                            placeholder="Add your phone *"
                            value={phone}
                            onValueChange={setPhone}
                        />

                        <Textarea
                            fullWidth
                            maxRows={8}
                            minRows={8}
                            labelPlacement="outside"
                            placeholder="Special requests? Add them here"
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
