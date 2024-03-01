"use client";

import React, { forwardRef, useEffect, useState } from "react";
import { AnimatedText } from "./AnimatedText";
import {
    cubicBezier,
    motion,
    useAnimate,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    const [scope, animate] = useAnimate();

    const isInView = useInView(scope, {
        margin: "0% 0px -40% 0px",
    });
    useEffect(() => {
        if (isInView) {
            animate(
                scope.current,
                { opacity: 1 },
                { ease: "easeOut", delay: 0.3 }
            );
        } else {
            animate(
                scope.current,
                { opacity: 0 },
                { ease: "easeOut", delay: 0.2 }
            );
        }
    }, [animate, isInView, scope]);

    return (
        <>
            <div
                ref={ref}
                className="h-[80rem] -z-10 relative bg-background"
            ></div>
            <motion.div
                ref={scope}
                className="flex flex-col font-custom text-white w-full tracking-widest h-screen sticky top-0"
            >
                <AnimatedText
                    text="ABOUT ME"
                    className="font-extrabold text-7xl w-full text-white bg-background  z-10"
                    showAnimation={isInView}
                />
                <h6 className="font-light h-full grid max-w-4xl text-center mx-auto my-auto items-center leading-10">
                    {
                        "Hello, I'm Shivam Ramani, Web Developer & Problem Solver."
                    }
                    <br />
                    <br />
                    {` Welcome to my digital playground where creativity meets
                functionality. I specialize in crafting exceptional web
                experiences that captivate, engage, and inspire. With a keen eye
                for detail and a passion for innovation, I strive to bring ideas
                to life through clean, elegant code and stunning design. Let's
                collaborate and turn your vision into reality. Explore my
                portfolio to see how I can elevate your online presence.`}
                </h6>
            </motion.div>
        </>
    );
});

About.displayName = "About";

export default About;
