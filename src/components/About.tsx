"use client";

import { useCursorContext } from "@/hooks/useCursorContext";

export const About = (): JSX.Element => {
    const { setCursorSize } = useCursorContext();
    return (
        <div className="text-white font-custom py-20 px-60 tracking-widest opacity-70 ">
            <h6 className="font-medium">
                {"Hello, I'm Shivam Ramani, Web Developer & Problem Solver."}
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
    );
};
