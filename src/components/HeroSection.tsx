"use client";

import { useEffect, useRef, useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { useMousePosition } from "@/hooks/useMousePosition";
import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { useCursorContext } from "@/hooks/useCursorContext";

type TProps = {
    scale: MotionValue<number>;
    display: MotionValue<"none" | "flex">;
};

export const HeroSection = (props: TProps) => {
    const { scale, display } = props;
    const divRef = useRef<HTMLDivElement>(null);
    const heroDivRef = useRef<HTMLDivElement>(null);
    const bodyMaskDivRef = useRef<HTMLDivElement>(null);
    const { setCursorSize, cursorSize } = useCursorContext();
    const { mouseX, mouseY } = useMousePosition();

    const [bodyMaskDivPosition, setBodyMaskDivPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const currValue = divRef.current;
        if (
            currValue?.offsetTop <= mouseY &&
            currValue?.offsetTop + currValue.offsetHeight >= mouseY &&
            currValue?.offsetLeft <= mouseX &&
            currValue?.offsetLeft + currValue.offsetWidth > mouseX
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
        mouseX,
    ]);

    useEffect(() => {
        setBodyMaskDivPosition({
            x: bodyMaskDivRef.current?.offsetLeft,
            y: bodyMaskDivRef.current?.offsetTop,
        });
    }, []);

    return (
        <motion.div
            style={{ display: display }}
            className="flex fixed top-0 w-full h-full bg-background overflow-hidden"
        >
            <motion.div
                style={{
                    transformOrigin: `${bodyMaskDivPosition?.x}px ${bodyMaskDivPosition?.y}px`,
                    WebkitTransformOrigin: `${bodyMaskDivPosition?.x}px ${bodyMaskDivPosition?.y}px`,
                }}
                className="w-full bg-white text-background overflow-hidden grid items-center my-10 py-20"
            >
                <div className="flex w-full max-w-6xl mx-auto justify-between">
                    <div ref={heroDivRef} className="flex w-full">
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
                                    mouseY -
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
                            className="w-fit absolute z-20 text-background bg-white"
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
                    </div>
                    <motion.div
                        ref={bodyMaskDivRef}
                        style={{ scale }}
                        transition={{
                            type: "tween",
                        }}
                        className={cn(
                            "h-96 w-96 z-50 shrink-0 my-auto ml-12 grid place-items-center"
                        )}
                    >
                        <div className="animate-liquid3 size-96 shrink-0 my-auto z-10 bg-black/10 grid place-items-center">
                            <div
                                className={cn(
                                    "animate-liquid2  h-72 w-72  shrink-0 my-auto z-10 bg-black/20 grid place-items-center "
                                )}
                            >
                                <div
                                    className={cn(
                                        "animate-liquid shrink-0 h-48 w-48 z-20 bg-black/40 grid place-items-center "
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "animate-liquid2 shrink-0 h-28 w-28 z-30 bg-black/55 grid place-items-center "
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "animate-liquid shrink-0 h-12 w-12 z-40 bg-background shadow-md grid place-items-center"
                                            )}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <CustomCursor size={cursorSize} />
            </motion.div>
        </motion.div>
    );
};
