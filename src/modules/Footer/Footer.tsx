"use client";

import { ImLocation } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineBadge } from "react-icons/md";
import { PiPhoneCallThin } from "react-icons/pi";

export function Footer() {
    return (
        <div className="pt-16">
            <div className="custom-shape-divider-bottom-1702225207">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>

            <div className="mt-[-10px] bg-primary pb-8 pt-8 lg:pt-0">
                <div className="px-4">
                    <div className="mt-[-40px] flex items-center justify-center py-10">
                        <div className="w-full max-w-[520px] gap-10 rounded-2xl bg-white px-8 py-5 lg:w-auto lg:max-w-max ">
                            <div className="flex w-full flex-col gap-10 lg:flex-row">
                                <div className="flex items-center gap-2">
                                    <ImLocation className="h-6 w-6 text-primary" />
                                    <span className="text-primary">
                                        <a
                                            href="https://maps.google.com/?q=1101+Miranda+Ln+Suite+127+Kissimmee+FL+34741"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            1101 Miranda Ln. Suite 127
                                            Kissimmee, FL 34741
                                        </a>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <PiPhoneCallThin className="h-6 w-6 text-primary" />
                                    <span className="text-primary">
                                        <a href="tel:+13213009077">
                                            (321) 300-9077
                                        </a>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <LiaFaxSolid className="h-6 w-6 text-primary" />
                                    <span className="text-primary">
                                        (321) 291-5124
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <IoMail className="h-6 w-6 text-primary" />
                                    <span className="text-primary underline">
                                        <a href="mailto:admin@evanhomecare.com">
                                            admin@evanhomecare.com
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col gap-10 lg:mt-5 lg:flex-row lg:items-center lg:justify-center lg:gap-5">
                                <div className="flex items-center gap-2 lg:justify-center">
                                    <MdOutlineBadge className="h-6 w-6 text-primary" />
                                    <span className="text-primary ">
                                        <a>Provider Medicaid ID: 113497700</a>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 lg:justify-center">
                                    <MdOutlineBadge className="h-6 w-6 text-primary" />
                                    <span className="text-primary ">
                                        <a>
                                            Homemaker Companion License #239355
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center font-bold text-white">
                    © {new Date().getFullYear()} Homemaker Companion. All
                    Rights Reserved.
                </p>
            </div>
        </div>
    );
}
