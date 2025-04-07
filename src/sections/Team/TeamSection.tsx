"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Title } from "~/components/Titles/Title";

function TeamSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const teamMembers = [
        {
            name: "Vadia Estevez",
            position: "Owner",
            email: "vadia.estevez@evanhomecare.com",
            mobile: "(321) 477-9925",
        },
        {
            name: "Ezequiel Lopez Sr",
            position: "Administrator",
            email: "ezequiel.lopez@evanhomecare.com",
            mobile: "(321) 447-9333",
        },
        {
            name: "Ezequiel Lopez Jr",
            position: "Coordinator",
            email: "evanhomecare@gmail.com",
            mobile: "(321) 300-9077",
        },
        {
            name: "Yoanny Alvarez",
            position: "Coordinator",
            email: "yoanny.alvarez@evanhomecare.com",
            mobile: "(321) 300-9077",
        },
        {
            name: "Zuheily Santiago",
            position: "Coordinator",
            email: "zuheily.santiago@evanhomecare.com",
            mobile: "(321) 300-9077",
        },
    ];

    return (
        <>
            <Title title={"Meet Our Team"} />
            <section className="mb-20 mt-10 rounded-2xl bg-primary/5 p-10">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex flex-col items-center gap-8 md:flex-row">
                        <div className="md:w-1/2">
                            <div className="h-full w-full">
                                <Image
                                    src="/5-Our promise.png"
                                    alt="Team Photo"
                                    width={600}
                                    height={400}
                                    className="h-full w-full rounded-lg object-cover shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <p className="mb-6 text-lg">
                                At Evan Home Care Services Agency, our dedicated
                                professionals are the heart of our Homemaker and
                                Companion services. Each team member brings
                                passion, expertise, and a personal commitment to
                                ensuring that our clients receive caring,
                                respectful, and reliable support.
                            </p>

                            <div className="relative">
                                <p className="mb-4 text-lg">
                                    Get to know the people who make our services
                                    exceptional:
                                    {!isExpanded && (
                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="ml-2 font-medium text-blue-600 hover:text-blue-800"
                                        >
                                            Read more...
                                        </button>
                                    )}
                                </p>

                                <div
                                    className={`transition-all duration-300 ${
                                        isExpanded
                                            ? "max-h-[1000px] opacity-100"
                                            : "max-h-0 overflow-hidden opacity-0"
                                    }`}
                                >
                                    <div className="flex flex-wrap gap-6">
                                        {teamMembers.map((member, index) => (
                                            <div
                                                key={index}
                                                className="min-w-[250px] flex-1 rounded-lg bg-white p-6 shadow-md"
                                            >
                                                <h3 className="mb-2 text-xl font-semibold">
                                                    {member.name}
                                                </h3>
                                                <p className="mb-2 text-gray-600">
                                                    {member.position}
                                                </p>
                                                <p className="text-sm">
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        {member.email}
                                                    </a>
                                                </p>
                                                <p className="text-sm">
                                                    Mobile: {member.mobile}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-8 text-lg">
                                        Together, our team at Evan Home Care
                                        Services is committed to enhancing
                                        quality of life through compassionate
                                        care, empowering clients to maintain
                                        independence and dignity in the comfort
                                        of their own homes.
                                    </p>

                                    {isExpanded && (
                                        <button
                                            onClick={() => setIsExpanded(false)}
                                            className="mt-4 font-medium text-blue-600 hover:text-blue-800"
                                        >
                                            Read less
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamSection;
