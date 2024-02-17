"use client";

import { useEffect, useRef, useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { useMousePosition } from "@/hooks/useMousePosition";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useViewportScroll,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { useCursorContext } from "@/hooks/useCursorContext";

export const HeroSection = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const heroDivRef = useRef<HTMLDivElement>(null);
    const { setCursorSize, cursorSize } = useCursorContext();
    const { mouseX, mouseY } = useMousePosition();
    const { scrollY, scrollYProgress } = useScroll();

    const [currentScrollY, setCurrentScrollY] = useState(scrollY.get());

    useMotionValueEvent(scrollY, "change", (latest) => {
        setCurrentScrollY(latest);
    });

    useEffect(() => {
        const currValue = heroDivRef.current;
        if (
            currValue?.offsetTop - currentScrollY <= mouseY &&
            currValue?.offsetTop + currValue.offsetHeight - currentScrollY >=
                mouseY
        ) {
            setCursorSize(16);
        } else {
            setCursorSize(2);
        }
    }, [
        heroDivRef.current?.offsetTop,
        heroDivRef.current?.offsetHeight,
        mouseY,
        setCursorSize,
        currentScrollY,
    ]);

    return (
        <div
            ref={heroDivRef}
            className="my-10 w-full h-full bg-primary px-16 py-24 text-background"
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
                            (cursorSize > 10 ? 16 : 0) * 10
                        }px ${
                            mouseY +
                            currentScrollY -
                            divRef.current?.offsetTop -
                            (cursorSize > 10 ? 16 : 0) * 10
                        }px`,
                        maskSize: `${cursorSize * 20}px`,
                        WebkitMaskSize: `${cursorSize * 20}px`,
                        opacity: cursorSize > 10 ? 1 : 0,
                    }}
                    transition={{
                        type: "just",
                        stiffness: 10,
                        duration: 0.006,
                        opacity: {
                            ease: "easeInOut",
                            duration: 0.15,
                        },
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
