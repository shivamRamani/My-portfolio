import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "Barlow",
                custom: "Titillium Web",
            },
            colors: {
                text: "var(--text)",
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
            },
            fontSize: {
                "9xl": ["8rem", "0.75"],
                "10xl": ["10rem", "0.75"],
                "11xl": ["12rem", "0.75"],
            },
            animation: {
                liquid: "spin 40s linear infinite, liquid 10s linear infinite",
            },
            keyframes: {
                liquid: {
                    "0%": {
                        borderRadius: "36% 64% 70% 30% / 30% 62% 38% 70%",
                    },
                    "25%": {
                        borderRadius: "55% 45% 55% 45% / 45% 29% 71% 55%",
                    },
                    "50%": {
                        borderRadius: "40% 76% 76% 24% / 74% 57% 43% 26% ",
                    },
                    "75%": {
                        borderRadius: "28% 72% 22% 78% / 70% 48% 52% 30%",
                    },
                    "100%": {
                        borderRadius: "36% 64% 70% 30% / 30% 62% 38% 70%",
                    },
                },
            },
        },
    },

    plugins: [],
};
export default config;
