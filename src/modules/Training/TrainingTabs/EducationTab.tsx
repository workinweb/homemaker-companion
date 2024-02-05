import Link from "next/link";
import React from "react";

export default function EducationTab() {
    return (
        <div className="flex h-max w-full flex-col rounded-lg border-2 border-gray-200 p-5">
            <p>
                CEUfast.org:{" "}
                <Link
                    className="text-primary underline"
                    href="https://ceufast.com/"
                    target="_blank"
                >
                    https://ceufast.com/
                </Link>
            </p>

            <p>
                Rn.org:{" "}
                <Link
                    className="text-primary underline"
                    href="https://www.rn.org/"
                    target="_blank"
                >
                    https://www.rn.org/
                </Link>
            </p>

            <p>
                Ce Broker:{" "}
                <Link
                    className="text-primary underline"
                    href="https://cebroker.com/"
                    target="_blank"
                >
                    https://cebroker.com/
                </Link>
            </p>

            <p>
                My free CE:{" "}
                <Link
                    className="text-primary underline"
                    href=" https://www.myfreece.com/Login.aspx"
                    target="_blank"
                >
                    https://www.myfreece.com/Login.aspx
                </Link>
            </p>
        </div>
    );
}
