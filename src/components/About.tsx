"use client";

import React, { forwardRef, useEffect, useState } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, useAnimate, useInView } from "framer-motion";

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
                className="font-custom text-white w-full max-w-6xl mx-auto tracking-widest"
            >
                <AnimatedText
                    text="ABOUT ME"
                    className="text-5xl font-extrabold mb-4"
                    showAnimation={isInView}
                />
                <h6 className="font-medium">
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
