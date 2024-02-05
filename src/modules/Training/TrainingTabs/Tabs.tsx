import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import ApdTab from "./ApdTab";
import EducationTab from "./EducationTab";
import InServiceTab from "./InServiceTab";
import CprFirstAidTab from "./CprFirstAidTab";
import ProfessionalLiabilityTab from "./ProfessionalLiabilityTab";
import RenewLicenseTab from "./RenewLicenseTab";
import { MdOutlineSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiBookshelf } from "react-icons/gi";
import { FaFirstAid } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";

export default function TrainingTabs() {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                fullWidth
                aria-label="Options"
                color="primary"
                variant="bordered"
                classNames={{
                    tabList: "flex-wrap lg:flex-nowrap",
                    tab: "justify-start lg:justify-center",
                }}
            >
                <Tab
                    key="training"
                    title={
                        <div className="flex items-center space-x-2">
                            <MdOutlineSchool />
                            <span>APD Training</span>
                        </div>
                    }
                >
                    <ApdTab />
                </Tab>

                <Tab
                    key="education"
                    title={
                        <div className="flex items-center space-x-2">
                            <LiaSchoolSolid />
                            <span>Continuing Education</span>
                        </div>
                    }
                >
                    <EducationTab />
                </Tab>
                <Tab
                    key="service"
                    title={
                        <div className="flex items-center space-x-2">
                            <GiBookshelf />
                            <span>In-Service</span>
                        </div>
                    }
                >
                    <InServiceTab />
                </Tab>

                <Tab
                    key="cpr"
                    title={
                        <div className="flex items-center space-x-2">
                            <FaFirstAid />
                            <span>CPR & First Aid</span>
                        </div>
                    }
                >
                    <CprFirstAidTab />
                </Tab>

                <Tab
                    key="professional"
                    title={
                        <div className="flex items-center space-x-2">
                            <FaHandHoldingMedical />
                            <span>Professional Liability Insurance</span>
                        </div>
                    }
                >
                    <ProfessionalLiabilityTab />
                </Tab>

                <Tab
                    key="renew"
                    title={
                        <div className="flex items-center space-x-2">
                            <MdAutorenew />
                            <span>Renew License</span>
                        </div>
                    }
                >
                    <RenewLicenseTab />
                </Tab>
            </Tabs>
        </div>
    );
}
