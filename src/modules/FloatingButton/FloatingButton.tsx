"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowUp } from "react-icons/fa6";

export function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div
            id="floating-btn"
            className={`fixed bottom-5 right-5 z-[100] transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
            <Button
                onPress={goToTop}
                className="border-gray-300 bg-primary text-white"
                isIconOnly
                variant="bordered"
                color="primary"
                aria-label="Go To Top Button"
            >
                <FaArrowUp />
            </Button>
        </div>
    );
}
