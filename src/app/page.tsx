"use client";
import { HeroSection } from "@/components/HeroSection";
import About from "@/components/About";
import { CursorContextProvide } from "@/contexts/CursorContext";
import { BodyLayout } from "@/layouts/BodyLayout";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
    const aboutRef = useRef();
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start start", "end center"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 10, 80]);
    const display = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "none" : "flex";
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <CursorContextProvide>
            <main className=" bg-background">
                {<HeroSection scale={scale} display={display} />}
                <BodyLayout>
                    <About ref={aboutRef} />
                </BodyLayout>
            </main>
        </CursorContextProvide>
    );
}
