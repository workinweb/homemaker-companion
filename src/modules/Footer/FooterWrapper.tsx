"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ContactUsForm } from "../ContactUs/ContactUsForm";

// Dynamic import for Map component only
const MapComponent = dynamic(
    () =>
        import("../../components/Map/MapComponent").then((mod) => ({
            default: mod.MapComponent,
        })),
    { ssr: false },
);

export function FooterActionsWrapper() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 px-8 py-5 lg:flex-row">
            <ContactUsForm />
            <MapComponent />
        </div>
    );
}
