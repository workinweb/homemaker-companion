"use client";

import React from "react";
import { ApryseWithLock } from "~/modules/ApryseModule/ApryseWithLock";
import { CustomNavbar } from "~/modules/Navbar/Navbar";

export default function JobApplication() {
    return (
        <main>
            <CustomNavbar />
            <ApryseWithLock />
        </main>
    );
}
