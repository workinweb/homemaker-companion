"use client";

import React from "react";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "#AboutUs", parent: "home" },
        { label: "Our Services", href: "#Services", parent: "home" },
        { label: "Apd Service", href: "/apd", parent: "services" },
        { label: "Contact Us", href: "#ContactUs", parent: "home" },
        { label: "Employment", href: "/employment" },
        { label: "Training", href: "/training" },
    ];

    return (
        <Navbar
            height={"3rem"}
            position="static"
            classNames={{ wrapper: "max-w-[1440px]" }}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

                <NavbarItem className="hidden sm:flex">
                    <Link
                        className={`transition hover:text-gray-400 ${
                            pathName == "/" ? "text-primary" : ""
                        }`}
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link
                        className={`transition hover:text-gray-400`}
                        href="/#AboutUs"
                    >
                        About Us
                    </Link>
                </NavbarItem>

                <Dropdown>
                    <DropdownTrigger className="hidden sm:flex">
                        <button className={`transition hover:text-gray-400`}>
                            Services
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="services">
                            <Link
                                className={`transition hover:text-gray-400 `}
                                href="/#Services"
                            >
                                Services
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="copy">
                            <Link
                                className={`transition hover:text-gray-400 `}
                                href="/apd"
                            >
                                APD Service
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <NavbarItem className="hidden sm:flex">
                    <Link
                        className={`transition hover:text-gray-400 `}
                        href="/#ContactUs"
                    >
                        Contact Us
                    </Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link
                        className={`hover:text-gray-400 ${
                            pathName.includes("employment")
                                ? "text-primary"
                                : ""
                        }`}
                        href="/employment"
                    >
                        Employment
                    </Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link
                        className={`hover:text-gray-400  ${
                            pathName.includes("Training") ? "text-primary" : ""
                        }`}
                        href="/training"
                    >
                        Training
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="flex w-full flex-col items-center gap-5 pt-5">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className={`w-full text-2xl transition hover:text-gray-400 ${
                                pathName === item.href ? "text-primary" : ""
                            }`}
                            href={item.href}
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        >
                            <span>{item.parent ? " - " : ""}</span>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
