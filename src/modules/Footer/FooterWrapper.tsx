'use client'

import React from "react";
import {MapComponent} from "./MapComponent";
import {ContactUsForm} from "../ContactUs/ContactUsForm";


export function FooterActionsWrapper() {


    return (
        <div className='w-full flex flex-col lg:flex-row gap-10 items-center justify-center py-5 px-8'>
            <ContactUsForm/>
            <MapComponent/>
        </div>);
}

