"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

interface TrainingLockedProps {
    tryAccess: (value: string) => void;
}

export function TrainingLocked({ tryAccess }: TrainingLockedProps) {
    const [value, setValue] = useState<string>("");

    return (
        <div className="flex h-screen w-full items-center justify-center bg-primary text-white">
            <div className="flex w-full flex-col items-center justify-center gap-5 px-10">
                <Input
                    className="w-full sm:w-[600px]"
                    placeholder="Introduce the code to access this part of the site"
                    onValueChange={setValue}
                    value={value}
                />

                <Button
                    className="w-full sm:w-[600px]"
                    variant="faded"
                    onPress={() => {
                        tryAccess(value);
                    }}
                >
                    Access
                </Button>
            </div>
        </div>
    );
}
