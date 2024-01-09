import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { nextui } from "@nextui-org/react";

export default {
    content: [
        "./src/**/*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: "#547DA7",
                secondary: "#2B7FA8",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
        },
    },
    plugins: [nextui()],
} satisfies Config;
