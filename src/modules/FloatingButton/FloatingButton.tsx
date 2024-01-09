'use client'

import React from "react";
import {Button} from "@nextui-org/react";
import {FaArrowUp} from "react-icons/fa6";

export function FloatingButton() {


    const goToTop = () => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <div id="floating-btn" className='lg:hidden fixed bottom-5 right-5'>
            <Button onPress={goToTop} isIconOnly color="primary" aria-label="Go To Top Button">
                <FaArrowUp/>
            </Button>
        </div>);
}

