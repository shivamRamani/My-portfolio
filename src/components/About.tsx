"use client";

import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <>
            <div
                ref={ref}
                className="h-[80rem] -z-10 relative bg-background"
            ></div>
            <div className="font-custom text-white bg-background w-full max-w-6xl mx-auto tracking-widest mb-96">
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
            </div>
        </>
    );
});

About.displayName = "About";

export default About;
