"use client";

import { Button } from "@nextui-org/react";
import styles from "./SideButtons.module.css";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "~/components/Icons/Icons";

export function SideButtons() {
    const clickLink = (url) => {
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
