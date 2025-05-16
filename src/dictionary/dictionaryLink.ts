type RequiredKeys = {
    ContactUs: DicType;
    Team: DicType;
    Homemaker: DicType;
};

export type DictionaryType = RequiredKeys & Record<string, DicType>;
export type TextsType = Record<string, string | string[]>;

export type DicType = {
    link: string;
    name: string;
    texts: TextsType;
};

const dictionary: DictionaryType = {
    Team: {
        link: `/#OurTeam`,
        name: "OurTeam",
        texts: {},
    },

    ContactUs: {
        link: `/#ContactUs`,
        name: `Contact Us`,
        texts: {
            sectionName: `Contact Us`,
            contactUsText: `Tell us about your and one of our team members will contact your shortly.`,
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
            legalDisclaimer: `These services do not include any type of Personal Care or Skilled Nursing in accordance with state law.`,
            phone: `(321) 300-9077`,
        },
    },
};

export default dictionary;
