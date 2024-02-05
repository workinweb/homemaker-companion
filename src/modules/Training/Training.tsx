"use client";

import { useState } from "react";
import { TrainingLocked } from "./TrainingLockPage";
import { enqueueSnackbar } from "notistack";
import { TrainingUnlocked } from "./TrainingUnlocked";

export function TrainingModule() {
    const [isLock, setIsLock] = useState<boolean>(true);

    const tryAccess = (value: string) => {
        if (value === "ok") {
            setIsLock(false);
        } else {
            enqueueSnackbar("Code is incorrect", { variant: "error" });
        }
    };

    const lockAccess = () => {
        setIsLock(true);
    };

    return (
        <div>
            {isLock ? (
                <TrainingLocked tryAccess={tryAccess} />
            ) : (
                <TrainingUnlocked lockAccess={lockAccess} />
            )}
        </div>
    );
}
