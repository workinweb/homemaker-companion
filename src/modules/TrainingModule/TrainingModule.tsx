import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaPlayCircle, FaVideo } from "react-icons/fa";
import { TrainingLinks } from "~/components/TrainingLinks/TrainingLinks";

interface Training {
    id: string;
    title: string;
    description?: string;
    url: string;
    image_url: string;

    category: string;
    duration?: string;
}

const trainings: Training[] = [
    {
        id: "1",
        title: "Ambulate with a Gait Belt",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861667/evan_job_applications/training_videos/iiciorginkzkonf6f416.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861667/evan_job_applications/training_videos/iiciorginkzkonf6f416.jpg",
        category: "General",
        duration: "2:54",
    },

    {
        id: "2",
        title: "Assist a Resident with the Bedpan",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861779/evan_job_applications/training_videos/qdqroijml2mffghfpjrx.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861779/evan_job_applications/training_videos/qdqroijml2mffghfpjrx.jpg",

        category: "Care",
        duration: "6:11",
    },
    {
        id: "3",
        title: "Change Position to Supported Side Lying",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861853/evan_job_applications/training_videos/ua4l1rpuxaokvzjrrttx.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861853/evan_job_applications/training_videos/ua4l1rpuxaokvzjrrttx.jpg",

        category: "Transfer",
        duration: "5:00",
    },
    {
        id: "4",
        title: "Dress a Resident with a weak arm",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861948/evan_job_applications/training_videos/ghs0xjyckrun9qbu0q66.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861948/evan_job_applications/training_videos/ghs0xjyckrun9qbu0q66.jpg",

        category: "Transfer",
        duration: "7:04",
    },
    {
        id: "5",
        title: "Empty Urinary Drainage Bag",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862003/evan_job_applications/training_videos/f3xig1ky5o4evdrequxo.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862003/evan_job_applications/training_videos/f3xig1ky5o4evdrequxo.jpg",
        category: "Care",
        duration: "5:12",
    },
    {
        id: "6",
        title: "Feed a Resident in a Chair",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862076/evan_job_applications/training_videos/y67hfrxehoavi0haggsr.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862076/evan_job_applications/training_videos/y67hfrxehoavi0haggsr.jpg",

        category: "Care",
        duration: "3:44",
    },
    {
        id: "7",
        title: "Female Catheter Care",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862143/evan_job_applications/training_videos/pzlevybfbaurayjtwpf7.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862143/evan_job_applications/training_videos/pzlevybfbaurayjtwpf7.jpg",

        category: "Care",
        duration: "10:51",
    },
    {
        id: "8",
        title: "Gait-Belt Training",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862207/evan_job_applications/training_videos/tea6ipeixskj5enjfcjb.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862207/evan_job_applications/training_videos/tea6ipeixskj5enjfcjb.jpg",

        category: "General",
        duration: "2:54",
    },

    {
        id: "9",
        title: "Hand and Nail Care",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862291/evan_job_applications/training_videos/zhhaktwyd1i0qcfmqexq.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862291/evan_job_applications/training_videos/zhhaktwyd1i0qcfmqexq.jpg",

        category: "General",
        duration: "6:33",
    },

    {
        id: "10",
        title: "Handwashing",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862353/evan_job_applications/training_videos/dccdwrn5l4tfnzp8yxht.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862353/evan_job_applications/training_videos/dccdwrn5l4tfnzp8yxht.jpg",

        category: "General",
        duration: "2:49",
    },

    {
        id: "11",
        title: "Make an Occupied Bed",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862438/evan_job_applications/training_videos/wruqgrutsouu4r4yz2ak.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862438/evan_job_applications/training_videos/wruqgrutsouu4r4yz2ak.jpg",

        category: "General",
        duration: "8:00",
    },

    {
        id: "12",
        title: "Measure and Record Radial Pulse",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862500/evan_job_applications/training_videos/zq5zcoysrczi7e3cdnro.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862500/evan_job_applications/training_videos/zq5zcoysrczi7e3cdnro.jpg",

        category: "Measure",
        duration: "2:49",
    },
    {
        id: "13",
        title: "Measure and Record Respirations",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862568/evan_job_applications/training_videos/xx6bh9u0ki7noeqmqcbx.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862568/evan_job_applications/training_videos/xx6bh9u0ki7noeqmqcbx.jpg",

        category: "Measure",
        duration: "3:20",
    },

    {
        id: "14",
        title: "Perform Denture Care",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862635/evan_job_applications/training_videos/wpeki8sfrjpu4iym4gtj.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862635/evan_job_applications/training_videos/wpeki8sfrjpu4iym4gtj.jpg",

        category: "Care",
        duration: "8:00",
    },

    {
        id: "15",
        title: "Perform Mouth Care with Teeth",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862691/evan_job_applications/training_videos/ikfdae6hazmuklo1vfg4.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862691/evan_job_applications/training_videos/ikfdae6hazmuklo1vfg4.jpg",

        category: "Care",
        duration: "5:26",
    },

    {
        id: "16",
        title: "Perform Care on the Female Resident",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862774/evan_job_applications/training_videos/xbljk1giet2nnwvzu1su.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862774/evan_job_applications/training_videos/xbljk1giet2nnwvzu1su.jpg",

        category: "Care",
        duration: "11:13",
    },

    {
        id: "17",
        title: "Provide Foot Care",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862841/evan_job_applications/training_videos/ryuho3nmvvqnjcarttjp.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862841/evan_job_applications/training_videos/ryuho3nmvvqnjcarttjp.jpg",

        category: "Care",
        duration: "6:23",
    },

    {
        id: "18",
        title: "Provide Partial Bedbath and Backrub",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862923/evan_job_applications/training_videos/ons9f7yovngbtyhvosxn.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862923/evan_job_applications/training_videos/ons9f7yovngbtyhvosxn.jpg",

        category: "Care",
        duration: "12:55",
    },

    {
        id: "19",
        title: "ROM Elbow and Wrist",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862989/evan_job_applications/training_videos/pl60mzidu7bres1oq5ej.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738862989/evan_job_applications/training_videos/pl60mzidu7bres1oq5ej.jpg",

        category: "ROM",
        duration: "2:18",
    },

    {
        id: "20",
        title: "ROM Hip Knee and Ankle",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738863037/evan_job_applications/training_videos/c8qkxnwbh2gde6fofmjs.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738863037/evan_job_applications/training_videos/c8qkxnwbh2gde6fofmjs.jpg",

        category: "ROM",
        duration: "2:36",
    },

    {
        id: "21",
        title: "ROM Shoulder",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738863118/evan_job_applications/training_videos/tgkorychyhvtlxooyu9e.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738863118/evan_job_applications/training_videos/tgkorychyhvtlxooyu9e.jpg",

        category: "ROM",
        duration: "2:40",
    },

    {
        id: "22",
        title: "Skill Rules",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861541/evan_job_applications/training_videos/ltfez48lm0t63tjysqhk.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738861541/evan_job_applications/training_videos/ltfez48lm0t63tjysqhk.jpg",
        category: "General",
        duration: "5:06",
    },
    {
        id: "23",
        title: "Transfer from Bed to Wheelchair",
        url: "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738860521/evan_job_applications/training_videos/xtttd9o9fufdzlllcdqk.mp4",
        image_url:
            "https://res.cloudinary.com/dvy2a4v0d/video/upload/v1738860521/evan_job_applications/training_videos/xtttd9o9fufdzlllcdqk.jpg",
        category: "Transfer",
        duration: "4:13",
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
                //@ts-ignore
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
                                        {category}{" "}
                                        <span className="text-xs opacity-75">
                                            (
                                            {
                                                trainings.filter((t) =>
                                                    category === "All"
                                                        ? true
                                                        : t.category ===
                                                          category,
                                                ).length
                                            }
                                            )
                                        </span>
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
                                                        src={`${training.image_url}`}
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
                            <div className="relative w-full max-w-4xl rounded-lg bg-white p-4">
                                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                    <video
                                        src={selectedTraining.url}
                                        title={selectedTraining.title}
                                        autoPlay
                                        controls
                                        className="h-full w-full"
                                        onKeyDown={(e) => {
                                            if (e.key === "Escape") {
                                                setSelectedTraining(null);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {selectedTraining.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {selectedTraining.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSelectedTraining(null)
                                        }
                                        className="rounded-full p-2 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default TrainingModule;
