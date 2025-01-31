import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import the heavy PDF viewer component
const WebViewer = dynamic(() => import("@pdftron/webviewer"), {
    ssr: false,
    loading: () => <div>Loading PDF viewer...</div>,
});

// Implement proper cleanup
useEffect(() => {
    let instance;

    const initViewer = async () => {
        instance = await WebViewer({
            path: "/webviewer/lib",
            initialDoc: documentUrl,
            // Enable optimization features
            enableOptimizedWorkers: true,
            preloadWorker: "pdf",
            useDownloader: false,
        });
    };

    initViewer();

    return () => {
        if (instance) {
            instance.dispose();
        }
    };
}, [documentUrl]);
