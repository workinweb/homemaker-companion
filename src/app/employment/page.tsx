import React from "react";
import { ApryseModule } from "~/modules/ApryseModule/ApryseModule";
import { EmploymentForm } from "~/modules/EmploymentForm/EmploymentForm";
import { EmploymentSection } from "~/sections/Employment/EmploymentSection";

export default async function Employment() {
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
