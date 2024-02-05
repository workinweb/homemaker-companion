import Link from "next/link";
import React from "react";

export default function ApdTab() {
    return (
        <div className="flex h-max w-full flex-col rounded-lg border-2 border-gray-200 p-5">
            <p>
                APD Training:{" "}
                <Link
                    className="text-primary underline"
                    href="https://www.train.org/"
                    target="_blank"
                >
                    https://www.train.org/
                </Link>
            </p>
        </div>
    );
}
