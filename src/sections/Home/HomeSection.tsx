import Image from "next/image";
import dictionary from "~/dictionary/dictionaryLink";
import styles from "./home.module.css";

export function HomeSection() {
    return (
        <div id="Home">
            <div className="relative -mx-[calc((100vw-100%)/2)] overflow-hidden py-32">
                <div className="absolute inset-0 ">
                    <svg
                        className="h-full w-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 800"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 0C240 120 480 180 720 180C960 180 1200 120 1440 0V800H0V0Z"
                            fill="rgb(42, 128, 156)"
                            className="animate-[wave_15s_ease-in-out_infinite]"
                        >
                            <animate
                                attributeName="d"
                                dur="15s"
                                repeatCount="indefinite"
                                values="
                                    M0 0C240 120 480 180 720 180C960 180 1200 120 1440 0V680C1200 800 960 860 720 860C480 860 240 800 0 680V0Z;
                                    M0 120C240 0 480 60 720 60C960 60 1200 0 1440 120V740C1200 620 960 680 720 680C480 680 240 620 0 740V120Z;
                                    M0 0C240 120 480 180 720 180C960 180 1200 120 1440 0V680C1200 800 960 860 720 860C480 860 240 800 0 680V0Z
                                "
                            />
                        </path>
                    </svg>
                </div>
                <div className="relative mx-auto max-w-[1440px] px-4 md:px-8">
                    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                        <div className="max-w-3wl">
                            <h1
                                className={`${styles.slogan} mb-12 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.3] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
                            >
                                " Making a difference in people's lives, where
                                quality of life counts"
                            </h1>

                            <a
                                href="#Services"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/10 bg-white px-6 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary-100"
                            >
                                Our Services
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div className="w-full max-w-xl">
                            <div className="relative">
                                <Image
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    alt="Healthcare professional with patient"
                                    src="/1-Home Banner azul.png"
                                    className="h-auto w-full rounded-lg"
                                    priority
                                />
                                <div className="absolute bottom-0 h-20 w-full rounded-b-lg bg-gradient-to-t from-primary to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-10 rounded-2xl bg-primary/5 p-10">
                <h2 className="mb-6 text-3xl font-bold text-primary">
                    Evan Home Care
                </h2>
                <p className="text-left text-lg leading-relaxed text-primary/90">
                    {dictionary.Home.texts.agencyFor}
                </p>
            </div>
        </div>
    );
}
