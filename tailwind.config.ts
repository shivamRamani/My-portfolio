import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
        },
    },

    plugins: [],
};
export default config;
