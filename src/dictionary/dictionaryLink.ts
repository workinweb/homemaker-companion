type RequiredKeys = {
    Home: DicType;
    AboutUs: DicType;
    Services: DicType;
    ContactUs: DicType;
    ChooseUs: DicType;
    Team: DicType;
    Employment: DicType;
};

export type DictionaryType = RequiredKeys & Record<string, DicType>;
export type TextsType = Record<string, string | string[]>;

export type DicType = {
    link: string;
    name: string;
    texts: TextsType;
};

export type TextType = Array<string | string[]>;

export type DictionaryResults = {
    section: string;
    htmlParts: string[];
    parts: string[];
    link: string;
} | null;

const dictionary: DictionaryType = {
    Home: {
        link: `/`,
        name: `Home`,
        texts: {
            sectionName: `Home`,
            agencyFor: `Evan Home Care is an agency that provides services for people with disabilities, and we are passionate about serving the community, making a difference through compassion and commitment to caring for and helping people with disabilities improve their quality of life.`,

            missionTitle: "Mission",
            missionText:
                "Provide a personalized high-quality home care service focused on each client to satisfy their needs, helping people with disabilities and their families to improve their quality of life; promoting social education focused on their independence, for this we have a group of highly qualified professionals committed to serving the community with our high-quality services.",

            goalsTitle: `Goals`,
            goalsText: `Our goal is to provide high quality care to all our clients with a continued focus on the detailed individual needs of each person we serve, such as participating in social and community activities to become more independent. practicing appropriate physical activities to maintain good health, thus helping people to be safer and healthier and in turn thus increasing their independence and improving their quality of life. `,

            ourPleopleTitle: `Our People:`,
            ourPleopleText: `Evan Home Care Agency providers and employees must be 18 years of age or older, have a 75-hour Home Health Aide Certificate or a High School Diploma or GED, and have at least one year of verifiable practical experience working directly with persons receiving services in a medical, psychiatric, nursing, or childcare setting or working with beneficiaries who have a developmental disability.
            In lieu of required work experience, providers and employees may have 30 semester hours, 45 quarter hours, or 720 college or vocational school class hours per the Budget Waiver Services Manual, AHCA, May 2023.`,

            ourPromiseTitle: `Our Promise:`,
            ourPromiseText: `At Evan Home Care Agency, we develop a client-provider relationship plan with a synergistic approach, considering the conditions and personalities of each client, ensuring that they receive a personalized service of the highest quality. \n
            If you want a provider who will go the extra mile for you and your family members, choose Evan Home Care. That is our commitment to you and your family, we hope to exceed that expectation. Success is achieved through values when clients and their families obtain the benefits through our systematic services, allowing themselves to be helped and guided, increasing their independence, and raising their quality of life.`,
        },
    },

    AboutUs: {
        link: `/#AboutUs`,
        name: `About Us`,
        texts: {
            sectionName: `About Us`,
            aboutUsBanner: `Evan Home Care guarantees the quality of care and full-time services through ongoing training of employees, specialized care plans designed to meet the individual needs in detail of each client, on-site visits to observe the care and services offered, communication and systematic contact with the client, family members and employees to ensure that customer attention is provided to detail ensuring quality and the client manages to remain independent for as long as possible, thus raising their quality of life. We are passionate about caring for and helping people in need. To contact us click `,
            aboutUsBanner2: ` to request a call. We look forward to being part of your family!`,
        },
    },

    Team: {
        link: `/#OurTeam`,
        name: "OurTeam",
        texts: {},
    },

    ChooseUs: {
        link: `#ChooseUs`,
        name: `Why Choose Us`,
        texts: {
            whyChooseUsTitle: "Why choose Us",
            whyChooseUsText: `Evan Home Care team consists of passionate, compassionate, and good character people along with a positive work environment built on mutual respect and professionalism, that are our attractive characteristics, forming a great professional team to satisfy the needs of our clients with a high level of quality.`,
            medicalServicesTitle: `Medicaid Waiver Services`,
            medicalServicesText: `Evan Home Care works hard to achieve excellence in the services we provide. The quality of services for our recipients will always be our top priority. If you have any questions or need to get in touch with us, visit our contact page for more information.
            Evan Home Care providers and employees are trustworthy and trained to assist with all types of needs and provide exceptional care experience in any setting as needed.`,

            approvedAgency: `Evan Home Care is an Approved APD Medicaid Waiver Agency.`,
            intellectualDisabilities: `Intellectual Disabilities:`,
            disabilities: [
                `Down Syndrome`,
                `Prader-Willi Syndrome`,
                `Cerebral Palsy`,
                `Spinal Bifida`,
                `Severe Autism.`,
                `Rett Syndrome`,
            ],
        },
    },

    Services: {
        link: `/#Services`,
        name: `Services`,
        texts: {
            sectionName: `Services`,
            serviceTitle: `Our Services`,

            personalSupportTilte: `Personal Supports`,
            personalSupportShowText: `Personal supports services provide assistance and training to the recipient in activities of daily living, such as eating, bathing, dressing, personal hygiene, and preparation of meals.`,
            personalHiddenText:
                `When specified in the support plan, this service can also include heavy household chores to make the home safer, such as washing floors, windows, and walls; tacking down loose rugs and tiles; or moving heavy items or furniture. Services also include non-medical care, and supervision. This service can provide access to community-based activities that cannot be provided by natural or unpaid community support and are likely to result in an increased ability to access community resources without paid support.\n` +
                `Personal support is designed to encourage community integration. Personal Support in supported living is also designated to teach the recipient about home-related responsibilities.`,
            personalSupportPlaceOfServiceTitle: `Place of Service:`,
            personalSupportPlaceOfServiceText: `Personal Supports are provided in the recipient’s own home, family home, licensed residential facility if being used as respite, or when or engaged in a community activity. Personal Supports can also be provided at the recipient’s place of employment. No service can be provided or received in the provider’s home, the home of a relative or friend of the provider, a hospital, an ICF/IID or other institutional environment.`,

            lifeSkillsTilte: `Life Skills Development 1 (Companion)`,
            lifeSkillsShowText: `Companion services consist of non-medical care, supervision, and socialization activities provided to recipients age 21 years or older.`,
            lifeSkillsHiddenText: `This service must be provided in direct relation to the achievement of the recipient’s goals as specified in the recipient’s support plan. The service provides access to community-based activities that cannot be provided by natural or other unpaid supports and should be defined as activities most likely to result in increased ability to access community resources without paid support. These services can be scheduled on a regular, long-term basis.`,
            lifeSkillsTiltePlaceOfServiceTitle: `​Place of Service:`,
            lifeSkillsTiltePlaceOfServiceText: `Companion services can be provided in the following settings:`,
            lifeSkillsTiltePlaceOfService2Text: [
                "Recipient’s own home",
                "Recipient’s family home",
                "This service may be provided to individuals who resided in a licensed facility while the recipient is engaged in a community activity if the companion service is not duplicative of what is required by the residential provider licensing requirements.",
                "The community.",
            ],

            under21Title: `Respite Care (under 21)`,
            under21ShowText: `Respite care is a service that provides supportive care and supervision to recipients under the age of 21 when the primary caregiver is unable to perform the duties of a caregiver.`,
            under21HiddenText: `This service is generally used due to a brief planned or emergency absence, or when the primary caregiver is available, but temporarily physically unable to care for or supervise the recipient for a brief period. Respite care is not intended to be used as after school care or supplement personal care assistance when daily limits for personal care assistance is exceeded.`,
            under21TitlePlaceOfServiceTitle: `Place of Service:`,
            under21TitlePlaceOfServiceText: ` Respite can be provided in the recipient’s family home, while involved with activities in the community, in a licensed group home, foster home or assisted living facility.`,
        },
    },

    ContactUs: {
        link: `/#ContactUs`,
        name: `Contact Us`,
        texts: {
            sectionName: `Contact Us`,
            contactUsText: `Tell us about your and one of our team members will contact your shortly.`,
        },
    },

    Employment: {
        link: `employment`,
        name: `Employment`,
        texts: {
            sectionName: `Employment`,
            agencyFor: `Evan Home Care is an agency for persons with Evan Home Care that works under the Agency for Persons with Disabilities (APD) and the Agency for Health Care Administration (AHCA) Medicaid. Therefore, all Independent Contractors providers must have all the documentation and certifications required by both APD and AHCA Medicaid.`,
            requirementsTitle: `Requirements`,
            submitBefore: `The following must be completed/submitted prior to signing a contract to begin providing services:`,
            requirements: [
                `Local Law Background Police Check.`,
                `Background Screening Level II`,
                `High School Diploma`,
                `HHA & CNA Certifications or 75 hours HHA`,
                `Professional Liability Insurance Certificate`,
                `Proof of Legal Status`,
                `Resume`,
                `Driver License`,
                `Social Security`,
                `Social Security Card`,
                `Professional Experience Verification`,
            ],

            certificatesTitle: `Required Trainings Certificates:`,
            certificates: [
                `CPR & First Aid`,
                `APD HIPAA Attain Basics`,
                `APD HIV/AIDS`,
                `APD Zero Tolerance`,
                `APD Direct Care Core Competencies`,
                `APD Requirements for All Waiver Providers.`,
                `Continuing Education`,
                `In-Service`,
            ],

            applyTitle: `Apply Here`,
            employmentApplication: `Employment Application`,

            email: `evanhomecare@gmail.com`,

            needHelp: `If you need help completing this application form or any step in the employment process, you may contact at email`,
            readBefore: `or call the Evan Home Care office at 321-300-9077. Please, read the application before signing and submitting.`,
            policy: `Evan Home Care is an equal opportunity employer, dedicated to a policy of non-discrimination on any basis including color, race, ethnicity, national origin, religion, sex, gender, sexual orientation, disability, age, or marital status. All information on this application is confidential.`,

            certRelease: `Certification & Release:`,
            certify: `I certify that the above stated and indicated are true in fact and no misrepresentation of myself has been made. I understand that any false information, omissions, or misrepresentations of facts will result in rejection of this application and/or discharge at any time during employment.`,
            authorize: `I authorize Evan Home Care to verify all information contained within this application and the Clearinghouse Background Screening Level II check. I authorize all persons, schools, companies, and law enforcement authorities from any liability for any damage whatsoever for issuing this information. I also understand that the illegal use of drugs is prohibited during employment and that I am willing to submit to drug testing at any time to detect the use of illegal drugs prior to or during employment with Evan Home Care.`,

            covenant: `Restrictive Covenant`,
            agree: `I agree to not do business directly with any individual or business that Evan Home Care has introduced to me or by entering employment with such individuals or businesses.`,
        },
    },
};

export default dictionary;
