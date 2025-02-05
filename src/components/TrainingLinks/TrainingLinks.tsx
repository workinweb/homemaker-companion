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
        name: "Getting Started Guide",
        description: "Essential onboarding information for new team members",
        href: "#",
        image: "/training/CeuFast.png",
    },
    {
        id: "2",
        name: "Employee Handbook",
        description: "Comprehensive guide to policies and procedures",
        href: "#",
        image: "/training/cph.png",
    },
    {
        id: "3",
        name: "Safety Procedures",
        description: "Critical safety protocols and best practices",
        href: "#",
        image: "/training/nso.svg",
    },
    {
        id: "4",
        name: "Client Care Guidelines",
        description: "Standards for providing exceptional client care",
        href: "#",
        image: "/training/rn.png",
    },
    {
        id: "5",
        name: "Training Resources",
        description: "Additional learning materials and resources",
        href: "#",
        image: "/training/train.png",
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
