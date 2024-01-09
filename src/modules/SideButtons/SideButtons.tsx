"use client";

import {Button} from "@nextui-org/react";
import styles from './SideButtons.module.css'
import {FacebookIcon, InstagramIcon, LinkedinIcon} from "~/components/Icons/Icons";

export function SideButtons() {


    return (
        <div className={styles.side}>
            <Button isIconOnly={true} variant='light'>
                <LinkedinIcon/>
            </Button>

            <Button isIconOnly={true} variant='light'>
                <FacebookIcon/>
            </Button>

            <Button isIconOnly={true} variant='light'>
                <InstagramIcon/>
            </Button>
        </div>
    );
}
