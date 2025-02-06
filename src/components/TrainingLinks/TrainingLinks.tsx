import { motion } from "framer-motion";
import Image from "next/image";

interface TrainingLink {
    id: string;
    name: string;
    description: string;
    href: string;
    image: string;
}
const trainingLinks: TrainingLink[] = [
    {
        id: "1",
        name: "CeuFast",
        description:
            "Online continuing education platform offering courses for healthcare professionals",
        href: "https://ceufast.com/",
        image: "/training/CeuFast.png",
    },
    {
        id: "2",
        name: "Cph insurance",
        description:
            "Professional liability insurance provider for healthcare workers",
        href: "https://cphins.com/",
        image: "/training/cph.png",
    },
    {
        id: "3",
        name: "Nso insurance",
        description:
            "Nursing service organization providing malpractice insurance coverage",
        href: "https://www.nso.com/",
        image: "/training/nso.svg",
    },
    {
        id: "4",
        name: "rn.Org",
        description:
            "Continuing education and professional development resources for registered nurses",
        href: "https://www.rn.org/",
        image: "/training/rn.png",
    },
    {
        id: "5",
        name: "Train",
        description:
            "Learning network for professionals in public health and healthcare",
        href: "https://www.train.org/main/welcome",
        image: "/training/train.png",
    },
    {
        id: "6",
        name: "APD",
        description:
            "Agency for Persons with Disabilities - Florida state resources and support",
        href: "https://apd.myflorida.com/",
        image: "/training/apd.png",
    },
    {
        id: "7",
        name: "AHCA",
        description:
            "Agency for Health Care Administration - Florida healthcare regulation and licensing",
        href: "https://ahca.myflorida.com/",
        image: "/training/ahca.png",
    },
];

export function TrainingLinks() {
    return (
        <>
            <h2 className="mb-6 rounded-lg bg-primary/10 p-4 text-2xl font-semibold  text-primary">
                Quick Access Resources
            </h2>
            <div className="mb-5 flex flex-col gap-4">
                {trainingLinks.map((link, index) => (
                    <motion.a
                        key={link.id}
                        href={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                    >
                        <div className="relative flex h-auto w-32 flex-shrink-0 items-center justify-center overflow-hidden bg-slate-100">
                            <Image
                                src={link.image}
                                alt={link.name}
                                width={128}
                                height={128}
                                className="object-contain p-2 transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-4">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary">
                                {link.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                {link.description}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </>
    );
}
