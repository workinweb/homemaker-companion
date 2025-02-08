"use client";

import {
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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { FaPlayCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
    MdConnectWithoutContact,
    MdOutlineMedicalInformation,
    MdOutlineMedicalServices,
} from "react-icons/md";
import { SiReacthookform } from "react-icons/si";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();

    const menuItems = [
        { icon: <IoHome />, label: "Home", href: "/" },
        {
            icon: <MdOutlineMedicalInformation />,
            label: "About Us",
            href: pathName === "/" ? "#AboutUs" : "/#AboutUs",
        },
        {
            icon: <MdOutlineMedicalServices />,
            label: "Medicaid Waiver Services:",
            href: pathName === "/" ? "#Services" : "/#Services",
        },
        {
            icon: <MdConnectWithoutContact />,
            label: "Contact Us",
            href: pathName === "/" ? "#ContactUs" : "/#ContactUs",
        },
        {
            icon: <SiReacthookform />,
            label: "Employment",
            href: "/employment",
        },
        {
            icon: <FaPlayCircle />,
            label: "Training",
            href: "/training",
        },
    ];

    return (
        <Navbar
            height="4.5rem"
            position="static"
            className="py-2 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05),0_-2px_6px_-2px_rgba(0,0,0,0.05)]"
            classNames={{
                wrapper: "max-w-[1440px] px-10",
                base: "bg-white/70 backdrop-blur-md",
            }}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="hidden gap-8 sm:flex" justify="start">
                <NavbarItem>
                    <Link
                        className={`text-lg font-medium transition hover:text-gray-400 ${
                            pathName == "/" ? "text-primary" : ""
                        }`}
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarItem>

                <Dropdown>
                    <DropdownTrigger>
                        <li>
                            <button className="text-lg font-medium transition hover:text-gray-400">
                                Services
                            </button>
                        </li>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="services">
                            <Link
                                className="transition hover:text-gray-400"
                                href="/#Services"
                            >
                                <p className="font-bold text-primary">
                                    MEDICAID WAIVER SERVICES
                                </p>
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <NavbarItem>
                    <Link
                        className="text-lg font-medium transition hover:text-gray-400"
                        href="/#AboutUs"
                    >
                        About Us
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link
                        className={`text-lg font-medium transition hover:text-gray-400 ${
                            pathName.includes("employment")
                                ? "text-primary"
                                : ""
                        }`}
                        href="/employment"
                    >
                        Employment
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link
                        className={`text-lg font-medium transition hover:text-gray-400 ${
                            pathName.includes("training") ? "text-primary" : ""
                        }`}
                        href="/training"
                    >
                        Training
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarItem>
                    <Link
                        className="rounded-lg bg-primary px-6 py-2.5 text-lg font-medium text-white transition hover:bg-primary/90"
                        href="/#ContactUs"
                    >
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="start">
                <div className="flex w-full items-center justify-between ">
                    <NavbarItem>
                        <Image
                            width={100}
                            height={100}
                            src="/logo.webp"
                            alt="Evan Home Care Logo"
                            className="h-16 w-16 object-contain"
                        />
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="h-8 w-8"
                        />
                    </NavbarItem>
                </div>
            </NavbarContent>

            <NavbarMenu className="flex w-full flex-col gap-8 pt-8">
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
                            <div className="flex items-center gap-3">
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
