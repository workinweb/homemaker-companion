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

import { IoHome } from "react-icons/io5";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";
import { MdOutlineSchool } from "react-icons/md";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();

    const menuItems = [
        { icon: <IoHome />, label: "Home", href: "/" },
        {
            icon: <MdOutlineMedicalInformation />,
            label: "About Us",
            href: "#AboutUs",
        },
        {
            icon: <MdOutlineMedicalServices />,
            label: "Medicaid Waiver Services:",
            href: "#Services",
        },
        {
            icon: <MdOutlineMedicalServices />,
            label: "Homemaker & Companion",
            href: "/homemaker",
        },
        {
            icon: <MdConnectWithoutContact />,
            label: "Contact Us",
            href: "#ContactUs",
        },
        { icon: <SiReacthookform />, label: "Employment", href: "/employment" },
        { icon: <MdOutlineSchool />, label: "Training", href: "/training" },
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
                                <p className="font-bold text-primary">
                                    MEDICAID WAIVER SERVICES
                                </p>
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="copy">
                            <Link
                                className={`transition hover:text-gray-400 `}
                                href="/homemaker"
                            >
                                <p className="font-bold text-primary">
                                    HOMEMAKER & COMPANION
                                </p>
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

            <NavbarMenu className="flex w-full flex-col gap-8 pt-5">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className={`w-full text-2xl font-bold transition hover:text-gray-400 ${
                                pathName === item.href ? "text-primary" : ""
                            }`}
                            href={item.href}
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        >
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <span> {item.label}</span>
                            </div>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
