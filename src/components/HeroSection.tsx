"use client";

import { useRef, useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const HeroSection = () => {
    const [cursorSize, setCursorSize] = useState(2);
    const { mouseX, mouseY } = useMousePosition();
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="my-10 w-full h-full bg-primary px-16 py-24 text-background"
            onMouseEnter={() => {
                setCursorSize(16);
            }}
            onMouseLeave={() => {
                setCursorSize(1);
            }}
        >
            <div className="flex justify-between w-full max-w-6xl mx-auto">
                <div className="">
                    <h1 className="text-9xl select-none font-bold mb-10">
                        {"Hiii , I'm"}
                    </h1>
                    <h1 className="text-10xl select-none font-custom font-extrabold">
                        SHIVAM
                    </h1>
                    <h1 className="text-10xl select-none font-custom font-extrabold">
                        RAMANI
                    </h1>
                </div>
                <motion.div
                    ref={divRef}
                    animate={{
                        maskPosition: `${
                            mouseX -
                            divRef.current?.offsetLeft -
                            cursorSize * 10
                        }px ${
                            mouseY - divRef.current?.offsetTop - cursorSize * 10
                        }px`,
                        maskSize: `${cursorSize * 20}px`,
                        WebkitMaskSize: `${cursorSize * 20}px`,
                    }}
                    transition={{
                        type: "just",
                        stiffness: 10,
                        duration: 0.006,
                    }}
                    style={{
                        maskImage: "url(./mask.svg)",
                        maskPosition: "-100px -100px",
                        maskRepeat: "no-repeat",
                    }}
                    className="absolute z-20 bg-secondary text-white"
                >
                    <h1 className="text-9xl select-none font-bold mb-10">
                        {"Hiii , I'm"}
                    </h1>
                    <h1 className="text-10xl select-none font-custom font-extrabold">
                        WEB
                    </h1>
                    <h1 className="text-10xl select-none font-custom font-extrabold">
                        DEVELOPER
                    </h1>
                </motion.div>
                <div
                    className={cn(
                        "animate-liquid h-80 w-80 border-secondary shrink-0 my-auto border-8 transition-colors duration-500",
                        {
                            "bg-secondary": cursorSize === 1,
                        }
                    )}
                    onMouseEnter={() => {
                        setCursorSize(1);
                    }}
                    onMouseLeave={() => {
                        setCursorSize(16);
                    }}
                ></div>
            </div>
            <CustomCursor size={cursorSize} />
        </div>
    );
};
