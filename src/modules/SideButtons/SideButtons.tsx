"use client";

import { Button } from "@nextui-org/react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "~/components/Icons/Icons";
import styles from "./SideButtons.module.css";

export function SideButtons() {
    const clickLink = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.side}>
            <Button
                onPress={() => {
                    clickLink(
                        "https://www.linkedin.com/company/evan-home-care/",
                    );
                }}
                aria-label="linkedin button"
                isIconOnly={true}
                variant="light"
            >
                <LinkedinIcon />
            </Button>

            <Button
                onPress={() => {
                    clickLink(
                        "https://www.facebook.com/EvanHomecare?checkpoint_src=any",
                    );
                }}
                aria-label="facebook button"
                isIconOnly={true}
                variant="light"
            >
                <FacebookIcon />
            </Button>

            <Button
                onPress={() => {
                    clickLink("https://www.instagram.com/evan_homecare/");
                }}
                aria-label="instagram button"
                isIconOnly={true}
                variant="light"
            >
                <InstagramIcon />
            </Button>
        </div>
    );
}
