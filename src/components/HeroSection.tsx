"use client";

import { useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { motion } from "framer-motion";

export const HeroSection = () => {
    const [cursorSize, setCursorSize] = useState(2);
    return (
        <>
            <div
                className="my-10 mx-auto max-w-6xl w-full h-full bg-primary dark rounded-2xl p-20 text-background "
                onMouseEnter={() => {
                    setCursorSize(10);
                }}
                onMouseLeave={() => {
                    setCursorSize(1);
                }}
            >
                <h1 className="text-11xl select-none">WELCOME</h1>
                <h1 className="text-11xl select-none">I AM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
            </div>
            <CustomCursor size={cursorSize} />
        </>
    );
};
