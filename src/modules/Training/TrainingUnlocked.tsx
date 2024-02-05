"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import TrainingTabs from "./TrainingTabs/Tabs";

interface TrainingUnlockedProps {
    lockAccess: () => void;
}

export function TrainingUnlocked({ lockAccess }: TrainingUnlockedProps) {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                <div className="mt-[20px] flex flex-col items-center justify-between gap-5 sm:mt-[0] sm:flex-row lg:mt-[-20px]">
                    <div
                        className="max-w-[120px] sm:max-w-max"
                        style={{ zIndex: 10 }}
                    >
                        <Image
                            width={150}
                            height={150}
                            src="/logo.webp"
                            alt={"Evan Home Care Logo"}
                        />
                    </div>

                    <div>
                        <h1 className="text-center text-4xl font-bold uppercase text-primary">
                            Training
                        </h1>
                    </div>

                    <div></div>
                </div>

                <div className="mt-2 sm:mt-10">
                    <TrainingTabs />
                </div>

                <div className="flex w-full justify-end">
                    <Button variant="flat" color="primary" onPress={lockAccess}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}
