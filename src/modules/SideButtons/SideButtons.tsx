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
                isIconOnly={true}
                variant="light"
            >
                <FacebookIcon />
            </Button>

            <Button
                onPress={() => {
                    clickLink("https://www.instagram.com/evan_homecare/");
                }}
                isIconOnly={true}
                variant="light"
            >
                <InstagramIcon />
            </Button>
        </div>
    );
}
