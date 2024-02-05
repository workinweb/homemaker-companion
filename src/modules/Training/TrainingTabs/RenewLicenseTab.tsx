import Link from "next/link";
import React from "react";

export default function RenewLicenseTab() {
    return (
        <div className="flex h-max w-full flex-col rounded-lg border-2 border-gray-200 p-5">
            <p>
                Renew License:{" "}
                <Link
                    className="text-primary underline"
                    href="https://mqa-vo.doh.state.fl.us/datamart/voservicesportal"
                    target="_blank"
                >
                    https://mqa-vo.doh.state.fl.us/datamart/voservicesportal
                </Link>
            </p>
        </div>
    );
}
