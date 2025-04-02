import { motion } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";
import { useEffect } from "react";

interface YouTubeEmbedProps {
    youtubeId: string;
    title: string;
    description: string;
    onClose: () => void;
}

export function YouTubeEmbed({
    youtubeId,
    title,
    description,
    onClose,
}: YouTubeEmbedProps) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl rounded-xl bg-white p-4 shadow-2xl"
        >
            <div className="relative aspect-video w-full">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-lg"
                />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
                <button
                    className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                    onClick={onClose}
                >
                    <FaTimesCircle className="h-6 w-6" />
                </button>
            </div>
        </motion.div>
    );
}
