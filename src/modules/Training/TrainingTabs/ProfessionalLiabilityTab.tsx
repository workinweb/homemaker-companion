import Link from "next/link";
import React from "react";

export default function ProfessionalLiabilityTab() {
    return (
        <div className="flex h-max w-full flex-col rounded-lg border-2 border-gray-200 p-5">
            <p>
                NSO Insurance:{" "}
                <Link
                    className="text-primary underline"
                    href="https://www.nso.com/"
                    target="_blank"
                >
                    https://www.nso.com/
                </Link>
            </p>

            <p>
                CPH Insurance:{" "}
                <Link
                    className="text-primary underline"
                    href="https://cphins.com/"
                    target="_blank"
                >
                    https://cphins.com/
                </Link>
            </p>
        </div>
    );
}
