"use client";

import React from "react";
import dynamic from "next/dynamic";
import { EmploymentSection } from "~/sections/Employment/EmploymentSection";

// Dynamic imports with ssr disabled for components that use window
const ApryseModule = dynamic(
    () =>
        import("~/modules/ApryseModule/ApryseModule").then((mod) => ({
            default: mod.ApryseModule,
        })),
    { ssr: false },
);

export default function Employment() {
    return (
        <main>
            <div className="flex w-full flex-col items-center">
                <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                    <EmploymentSection />
                    <ApryseModule />
                </div>
            </div>
        </main>
    );
}
