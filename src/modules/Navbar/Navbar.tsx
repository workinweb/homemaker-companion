'use client'

import React from "react";
import {Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import Link from 'next/link'
import {usePathname, useRouter} from "next/navigation";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();

    const menuItems = [
        {label: "Home", href: "/"},
        {label: "About Us", href: "#AboutUs", parent: 'home'},
        {label: "Services", href: "#Services", parent: 'home'},
        {label: "Contact Us", href: "#ContactUs", parent: 'home'},

        {label: "Employment", href: "/employment"},
        {label: "Training", href: ""},
    ];

    return (
        <Navbar height={'3rem'} position="static" classNames={{wrapper: 'max-w-[1440px]'}}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400 transition ${pathName == "/" ? "text-primary" : ""}`}
                          href="/">Home</Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400 transition`}
                          href="/#AboutUs">About
                        Us</Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400 transition `}
                          href="/#Services">Services</Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400 transition `}
                          href="/#ContactUs">Contact
                        Us</Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400 ${pathName.includes('employment') ? "text-primary" : ""}`}
                          href="/employment">Employment</Link>
                </NavbarItem>

                <NavbarItem className="hidden sm:flex">
                    <Link className={`hover:text-gray-400  ${pathName.includes('Training') ? "text-primary" : ""}`}
                          href="/training">Training</Link>
                </NavbarItem>
            </NavbarContent>


            <NavbarMenu className="pt-5 w-full flex flex-col gap-5 items-center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className={`hover:text-gray-400 w-full text-2xl transition ${pathName === item.href ? 'text-primary' : ''}`}
                            href={item.href}
                            onClick={() => {
                                setIsMenuOpen(false)
                            }}
                        >
                            <span>{item.parent ? ' - ' : ""}</span>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

