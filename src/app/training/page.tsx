"use client";

import { CustomNavbar } from "~/modules/Navbar/Navbar";
import { TrainingWithLock } from "~/modules/TrainingModule/TrainingWithLock";

export default function Training() {
    return (
        <main>
            <CustomNavbar />
            <TrainingWithLock />
        </main>
    );
}
