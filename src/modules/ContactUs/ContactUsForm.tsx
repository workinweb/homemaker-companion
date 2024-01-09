'use client'

import React, {SyntheticEvent} from "react";
import {Button, Card, CardBody, Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import {enqueueSnackbar} from "notistack";
import Spinner from "~/components/Spinner/Spinner";

import {api} from "~/trpc/react";


export function ContactUsForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false)


    const sendEmail = api.mail.sendEmail.useMutation({
        onError: (error) => {
            console.log(error)
            enqueueSnackbar(`An error occurred sending the email, try again later, or change location`, {variant: 'error'})
        },

        onSuccess: (data, variables, context) => {
            console.log('Data', data)
            console.log('variables', variables)
            console.log('context', context)
            cleanInputs()
            enqueueSnackbar('Email sent', {variant: 'success'})

        }
    })

    const submit = async (e: SyntheticEvent) => {
        setLoading(true)
        e.preventDefault();

        sendEmail.mutate({name, email, phone, message})
        setLoading(false)

    }

    const cleanInputs = () => {
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    return (
        <Card className='w-full py-8 px-2 max-w-[420px]'>
            <CardBody>
                <form onSubmit={submit} className='flex flex-col gap-3'>
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
                        maxRows={3}
                        labelPlacement="outside"
                        placeholder="Special requests? Add them here"
                        className="w-full"
                        value={message}
                        onValueChange={setMessage}
                    />

                    <Button
                        fullWidth
                        type="submit"
                        size='md'
                        color='primary'
                        variant='shadow'
                    >
                        {!sendEmail.isLoading ? 'Send' :
                            <div><Spinner/></div>}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}

