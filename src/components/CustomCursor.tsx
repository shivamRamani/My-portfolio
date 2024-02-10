"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/utils/cn";
import { motion, CustomValueType, ValueType } from "framer-motion";

type Props = {
    size?: number;
};

export const CustomCursor = (props: Props) => {
    const { size = 3 } = props;
    const { mouseX, mouseY } = useMousePosition();

    const variants = {
        default: {
            height: 20 * size + "px",
            left: mouseX,
            top: mouseY,
        },
    };

    return (
        <motion.div
            className={cn(
                "aspect-square rounded-full fixed bg-white -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-difference origin-center pointer-events-none"
            )}
            animate={{
                height: 20 * size + "px",
                left: mouseX,
                top: mouseY,
            }}
            transition={{
                type: "just",
                stiffness: 10,
                duration: 0.006,
                height: {
                    ease: "easeInOut",
                    duration: 0.15,
                },
            }}
            // variants={variants}
        />
    );
};
