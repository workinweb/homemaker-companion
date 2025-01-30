"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports with ssr disabled for components that use window
const ApryseModule = dynamic(
    () =>
        import("~/modules/ApryseModule/ApryseModule").then((mod) => ({
            default: mod.ApryseModule,
        })),
    { ssr: false },
);

const EmploymentSection = dynamic(() =>
    import("~/sections/Employment/EmploymentSection").then((mod) => ({
        default: mod.EmploymentSection,
    })),
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
