import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaPlayCircle, FaVideo } from "react-icons/fa";
import { TrainingLinks } from "~/components/TrainingLinks/TrainingLinks";
import { YouTubeEmbed } from "~/components/YouTubeEmbed/YouTubeEmbed";

interface Training {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: string;
    duration?: string;
}

const trainings: Training[] = [
    {
        id: "1",
        title: "Getting Started",
        description:
            "Learn the basics of our platform with this comprehensive introduction guide",
        youtubeId: "dQw4w9WgXcQ",
        category: "General",
        duration: "5:30",
    },
    {
        id: "2",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "General",
        duration: "8:45",
    },
    {
        id: "3",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "CPR",
        duration: "8:45",
    },
    {
        id: "4",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "CPR",
        duration: "8:45",
    },
    {
        id: "5",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "Advanced",
        duration: "8:45",
    },
    {
        id: "6",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "Advanced",
        duration: "8:45",
    },
    {
        id: "7",
        title: "Advanced Features",
        description: "Explore advanced functionality and power-user techniques",
        youtubeId: "dQw4w9WgXcQ",
        category: "Advanced",
        duration: "8:45",
    },
];

const categories = ["All", ...new Set(trainings.map((t) => t.category))];

export function TrainingModule() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTraining, setSelectedTraining] = useState<Training | null>(
        null,
    );
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTrainings = trainings.filter(
        (t) =>
            (selectedCategory === "All" || t.category === selectedCategory) &&
            (t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.description.toLowerCase().includes(searchTerm.toLowerCase())),
    );

    return (
        <div className="min-h-screen p-4">
            <div className="mx-auto max-w-[1920px]">
                <div className="mb-10">
                    <div className="relative flex flex-col items-center justify-between gap-8 rounded-xl bg-gradient-to-br from-transparent via-primary/5 to-transparent p-8 sm:mt-4 sm:flex-row lg:mt-0">
                        <div className="relative">
                            <Image
                                width={150}
                                height={150}
                                src="/logo.webp"
                                alt="Evan Home Care Logo"
                                className="relative z-10 h-24 w-24 transform transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32"
                            />
                        </div>

                        <div className="text-center sm:text-left">
                            <h1 className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold uppercase text-transparent sm:text-2xl sm:text-5xl">
                                Training Section
                            </h1>
                            <div className="mt-2 h-1 w-20 rounded bg-gradient-to-r from-primary/30 to-primary/20 sm:w-32"></div>
                            <p className="mt-4 text-xl text-gray-600">
                                Master our platform with step-by-step video
                                guides
                            </p>
                        </div>

                        <div className="hidden sm:block">
                            <div className="relative h-16 w-16 rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
                                <FaVideo className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-primary/40" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-full lg:w-2/3">
                        <div className="mb-8 flex flex-col gap-4">
                            <input
                                type="search"
                                placeholder="Search training videos..."
                                className="w-full rounded-lg border border-gray-300 px-6 py-3 text-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                            selectedCategory === category
                                                ? "bg-primary text-white"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {filteredTrainings.length === 0 ? (
                            <div className="flex h-64 items-center justify-center rounded-lg bg-white">
                                <p className="text-lg text-gray-500">
                                    No training videos found. Try adjusting your
                                    search or category filter.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredTrainings.map((training) => (
                                    <motion.div
                                        key={training.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="h-full"
                                    >
                                        <button
                                            onClick={() =>
                                                setSelectedTraining(training)
                                            }
                                            className="flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <div className="relative">
                                                <div className="aspect-video w-full bg-gray-100">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${training.youtubeId}/maxresdefault.jpg`}
                                                        alt={training.title}
                                                        className="h-full w-full object-cover"
                                                        width={640}
                                                        height={360}
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/50">
                                                        <FaPlayCircle className="h-12 w-12 text-white/90" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex h-full flex-col p-4">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                                        {training.category}
                                                    </span>
                                                    {training.duration && (
                                                        <span className="text-sm text-gray-500">
                                                            •{" "}
                                                            {training.duration}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="mb-2 text-left text-lg font-semibold">
                                                    {training.title}
                                                </h3>
                                                <p className="text-left text-sm text-gray-600">
                                                    {training.description}
                                                </p>
                                            </div>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-1/3">
                        <TrainingLinks />
                    </div>
                </div>

                <AnimatePresence>
                    {selectedTraining && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    setSelectedTraining(null);
                                }
                            }}
                        >
                            <YouTubeEmbed
                                youtubeId={selectedTraining.youtubeId}
                                title={selectedTraining.title}
                                description={selectedTraining.description}
                                onClose={() => setSelectedTraining(null)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default TrainingModule;
