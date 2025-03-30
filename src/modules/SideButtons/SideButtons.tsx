"use client";

import { Button } from "@nextui-org/react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "~/components/Icons/Icons";
import { SearchInput } from "../Search/SearchInput";
import Image from "next/image";

export function SocialButtons() {
    const clickLink = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-2">
                <Button
                    onPress={() => {
                        clickLink(
                            "https://www.linkedin.com/company/evan-home-care/",
                        );
                    }}
                    aria-label="linkedin button"
                    isIconOnly={true}
                    size="lg"
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
                    size="lg"
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
                    size="lg"
                >
                    {window.innerWidth < 640 ? (
                        <Image
                            src="/Instagram_icon.png"
                            alt="Instagram"
                            width="38"
                            height="38"
                        />
                    ) : (
                        <InstagramIcon />
                    )}
                </Button>
            </div>

            <SearchInput />
        </div>
    );
}
