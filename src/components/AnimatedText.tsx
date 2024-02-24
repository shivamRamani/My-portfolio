import { cn } from "@/utils/cn";
import { AnimationProps, motion, useAnimate } from "framer-motion";
import { Fragment, HTMLProps, useEffect, useRef } from "react";

type Props = {
    text: string;
    className?: HTMLProps<HTMLElement>["className"];
    animationTransformFrom?: string;
    animationTransformTo?: string;
    showAnimation?: boolean;
};

export const AnimatedText = (props: Props) => {
    const {
        text,
        className = "",
        animationTransformFrom = "translate(0,100%)",
        animationTransformTo = "translate(0,0)",
        showAnimation = true,
    } = props;

    const variants: AnimationProps["variants"] = {
        initial: {
            opacity: 1,
            transform: animationTransformFrom,
            transition: {
                ease: "easeOut",
                duration: 1,
            },
        },
        visible: {
            opacity: 1,
            transform: animationTransformTo,
            transition: {
                ease: "easeOut",
                duration: 0.8,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate={showAnimation ? "visible" : "initial"}
            transition={{
                staggerChildren: 0.2,
                delayChildren: 0,
                ease: "easeOut",
                delay: 0,
            }}
            className={cn("overflow-hidden", className)}
        >
            {text?.split(/\s+/).map((word, wordIndex) => (
                <Fragment key={wordIndex}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            className="inline-block"
                            variants={variants}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </Fragment>
            ))}
        </motion.div>
    );
};
