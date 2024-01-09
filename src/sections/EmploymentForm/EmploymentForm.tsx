"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import SignatureCanvas from "react-signature-canvas";
import { Calendar } from "@/shcn-components/ui/calendar";

export function EmploymentForm() {
    const signatureRef = React.useRef(null);
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    const clearSignature = () => {
        signatureRef.current.clear();
    };

    return (
        <div className="pt-10">
            <div className=" flex flex-col items-center justify-evenly md:flex-row">
                <div className="flex flex-col items-end justify-end gap-2">
                    <div className="p-5 hover:border-2 hover:border-solid hover:bg-[#FEFAFF]">
                        <div className="border-b-3 border-solid border-gray-400">
                            <SignatureCanvas
                                penColor="black"
                                ref={signatureRef}
                                canvasProps={{
                                    width: 320,
                                    height: 100,
                                    className: "sigCanvas",
                                }}
                            />
                        </div>
                    </div>

                    <Button variant="light" onPress={clearSignature}>
                        Clear
                    </Button>
                </div>

                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </div>

            <div className="mt-10 flex justify-center">
                <Button
                    size="lg"
                    color="primary"
                    aria-label="Submit Employment Form"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
