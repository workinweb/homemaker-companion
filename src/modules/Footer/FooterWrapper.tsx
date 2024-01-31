"use client";

import React from "react";
import { MapComponent } from "../../components/GoogleMap/MapComponent";
import { ContactUsForm } from "../ContactUs/ContactUsForm";

export function FooterActionsWrapper() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 px-8 py-5 lg:flex-row">
            <ContactUsForm />
            <MapComponent />
        </div>
    );
}
