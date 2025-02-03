import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import dictionary from "~/dictionary/dictionaryLink";
import styles from "./aboutUs.module.css";

export function AboutUsSection() {
    return (
        <div id="AboutUs" className="mt-10  sm:mt-20 ">
            <div>
                <h2 className="text-center text-4xl font-bold text-primary">
                    {dictionary.AboutUs.texts.sectionName}
                </h2>
            </div>

            <Card className="mt-10 rounded-lg bg-primary px-10 py-5 text-white">
                <CardBody className="flex flex-col items-center justify-between overflow-visible p-0 lg:flex-row lg:gap-10">
                    <Image
                        width={500}
                        height={500}
                        quality={100}
                        alt="Two happy persons, one in a wheelchair"
                        className={styles.imageMasked}
                        src="/aboutus.webp"
                    />

                    <div>
                        <p className="text-left text-2xl text-white">
                            <span>
                                {dictionary.AboutUs.texts.aboutUsBanner}
                            </span>
                            <a
                                className="font-bold underline"
                                href="tel:+13213009077"
                            >
                                here
                            </a>
                            <span>
                                {dictionary.AboutUs.texts.aboutUsBanner2}
                            </span>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
