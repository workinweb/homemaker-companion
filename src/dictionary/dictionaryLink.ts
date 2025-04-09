type RequiredKeys = {
    Home: DicType;
    AboutUs: DicType;
    Services: DicType;
    ContactUs: DicType;
    ChooseUs: DicType;
    Team: DicType;
    Employment: DicType;
    Homemaker: DicType;
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

            ourPleopleTitle: `Our People`,
            ourPleopleText: `The Evan Home Care caregiver must be a Home Health Aide (HHA) or Certified Nursing Assistant (CNA) with experience in home care, with approved Level 2 background check, CPR & First Aid and other certifications and training ensuring that Evan Home Care hires the best talent available.`,

            ourPromiseTitle: `Our Promise`,
            ourPromiseText: `At Evan Home Care Agency, we continually work to provide you with the highest quality customer service experience, if you want a partner who will go the extra mile for you and your family members, choose Evan Home Care. That is our commitment to you and your family, and we hope to exceed that expectation.`,
        },
    },

    AboutUs: {
        link: `/#AboutUs`,
        name: `About Us`,
        texts: {
            sectionName: `About Us`,
            aboutUsBanner: `Evan Home Care guarantees the quality of care and full-time services through ongoing training of employees, specialized care plans designed to meet the individual needs in detail of each client, on-site visits to observe the care and services offered, communication and systematic contact with the client, family members and employees to ensure that customer attention is provided to detail ensuring quality and the client manages to remain independent for as long as possible, thus raising their quality of life. `,
            aboutUsBanner2: `We look forward to being part of your family!`,
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
            disabilities: [
                `Intellectual Disabilities`,
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

            lifeSkillsTilte: `Life Skills Development 1 (Companion)`,
            lifeSkillsShowText: `Companion services consist of non-medical care, supervision, and socialization activities provided to recipients age 21 years or older.`,

            under21Title: `Respite Care (under 21)`,
            under21ShowText: `Respite care is a service that provides supportive care and supervision to recipients under the age of 21 when the primary caregiver is unable to perform the duties of a caregiver.`,
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
            agencyFor: `Evan Home Care works under the Agency for Persons with Disabilities (APD) and the Agency for Health Care Administration (AHCA) Medicaid. Therefore, all Independent Contractors providers must have all the documentation and certifications required by both APD and AHCA Medicaid.`,
            requirementsTitle: `Requirements`,
            submitBefore: `The following must be completed/submitted prior to signing a contract to begin providing services:`,
            requirements: [
                `Local Law Background Police Check.`,
                `Background Screening Level II (Fingerprints)`,
                `High School Diploma or HHA & CNA Certifications or 75 hours HHA`,
                `Professional Liability Insurance Certificate`,
                `Proof of Legal Status`,
                `Resume`,
                `Driver License`,
                `Social Security`,
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

    Homemaker: {
        link: `/homemaker-companion`,
        name: `Homemaker`,
        texts: {
            description: `Evan Home Care Services is a Homemaker and Companion service provider based in Central Florida, including several counties including Orange, Osceola, and Seminole. We offer services in the comfort of your home, hospital, assisted living facility, or nursing home, enhancing your well-being and quality of life under the supervision of our caregivers, who strive to provide you with the comprehensive care you deserve, with excellent value and flexibility scheduling.`,

            mission: `Our mission is to improve the lives of our clients by providing the highest quality care services in their homes and companionships. We are committed to fostering independence, promoting well-being, and ensuring a safe, comfortable, and nurturing family environment.`,

            vision: `To create a compassionate and supportive environment where people can maintain their independence and dignity while receiving the highest quality care in their homes and companionships.`,

            coreValues: `Compassion: We treat each client with kindness, empathy, and respect.\nIntegrity: We uphold honesty, transparency, and professionalism in everything we do.\nDignity: We honor and respect each person's individuality and choices.\nExcellence: We strive for the highest standards of care for our clients.\nCommunity: We foster meaningful relationships and social engagement for overall well-being.`,

            contactSubtitle: `At Evan Home Care Services LLC, we are happy to hear from you. Please send us a message with your comments and suggestions. We will get back to you as soon as possible.`,

            availability: `We are available 24 hours a day, 7 days a week`,
            phone: `(321) 300-9077`,
            legalDisclaimer: `These services do not include any type of Personal Care or Skilled Nursing in accordance with state law.`,
        },
    },
};

export default dictionary;
