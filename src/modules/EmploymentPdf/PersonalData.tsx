"use client";

import React from "react";
import { Checkbox, Input, Radio, RadioGroup } from "@nextui-org/react";
import { FormErrors, FormValues } from "./EmploymentPDF";

type DataInputType = {
    values: FormValues;
    errors: FormErrors;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        optionalName?: string,
    ) => void;
};

export function PersonalData({ values, errors, handleChange }: DataInputType) {
    return (
        <div className="px-6 py-10">
            <h2 className="py-5 text-3xl text-white"> Personal Information </h2>
            <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    color={errors.firstName ? "danger" : "default"}
                    errorMessage={
                        errors.firstName && "Please enter a valid first name"
                    }
                    onChange={handleChange}
                />

                <Input
                    name="middleName"
                    label="Middle Name"
                    value={values.middleName}
                    color={errors.middleName ? "danger" : "default"}
                    errorMessage={
                        errors.middleName && "Please enter a valid middle name"
                    }
                    onChange={handleChange}
                />

                <Input
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    color={errors.lastName ? "danger" : "default"}
                    errorMessage={
                        errors.lastName && "Please enter a valid last name"
                    }
                    onChange={handleChange}
                />
            </div>

            <div className="mt-5">
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex justify-start gap-5 ">
                        <div>
                            <p className="text-white">Date of birth</p>
                            <Input
                                className="w-[180px] sm:w-full "
                                type="date"
                            />
                        </div>

                        <RadioGroup
                            label="Sex"
                            name="sex"
                            value={values.sex}
                            color={errors.sex ? "danger" : "default"}
                            onChange={(e) => handleChange(e, "sex")}
                            classNames={{ label: "text-white" }}
                        >
                            <Radio
                                value="Male"
                                classNames={{
                                    label: "text-white",
                                    control: "bg-primary",
                                    wrapper: "bg-white",
                                }}
                            >
                                Male
                            </Radio>
                            <Radio
                                value="Female"
                                classNames={{
                                    label: "text-white",
                                    control: "bg-primary",
                                    wrapper: "bg-white",
                                }}
                            >
                                Female
                            </Radio>
                        </RadioGroup>
                    </div>

                    <div>
                        <p className="text-white">Social Security</p>
                        <div className="flex items-center gap-2">
                            <Input
                                name="ss1"
                                value={values.ss1}
                                color={errors.ss1 ? "danger" : "default"}
                                errorMessage={
                                    errors.ss1 &&
                                    "Please enter a valid first name"
                                }
                                onChange={handleChange}
                                classNames={{ base: "max-w-[100px]" }}
                            />

                            <p> - </p>

                            <Input
                                name="ss2"
                                value={values.ss2}
                                color={errors.ss2 ? "danger" : "default"}
                                errorMessage={
                                    errors.ss2 &&
                                    "Please enter a valid middle name"
                                }
                                onChange={handleChange}
                                classNames={{ base: "max-w-[70px]" }}
                            />

                            <p> - </p>

                            <Input
                                name="ss3"
                                value={values.ss3}
                                color={errors.ss3 ? "danger" : "default"}
                                errorMessage={
                                    errors.ss3 &&
                                    "Please enter a valid last name"
                                }
                                onChange={handleChange}
                                classNames={{ base: "max-w-[100px]" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
