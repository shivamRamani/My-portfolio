import { cn } from "@/utils/cn";
import { AnimationProps, motion } from "framer-motion";
import { HTMLProps } from "react";

type Props = {
    text: string;
    className?: HTMLProps<HTMLElement>["className"];
    animationTransformFrom?: string;
    animationTransformTo?: string;
};

export const AnimatedText = (props: Props) => {
    const {
        text,
        className = "",
        animationTransformFrom = "translate(0,100%)",
        animationTransformTo = "translate(0,0)",
    } = props;

    const variants: AnimationProps["variants"] = {
        initial: {
            opacity: 1,
            transform: animationTransformFrom,
            transition: {
                ease: "easeOut",
                // type: " spring",
                // damping: 12,
                // stiffness: 100,
                duration: 1,
            },
        },
        visible: {
            opacity: 1,
            transform: animationTransformTo,
            transition: {
                ease: "easeOut",
                // type: " spring",
                // damping: 12,
                // stiffness: 100,
                duration: 0.8,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="visible"
            transition={{
                staggerChildren: 0.2,
                delayChildren: 0,
                ease: "easeOut",
                delay: 0,
            }}
            className={cn("overflow-hidden", className)}
        >
            {text?.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={variants}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};
