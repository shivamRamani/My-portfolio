"use client";
import { HeroSection } from "@/components/HeroSection";
import About from "@/components/About";
import { CursorContextProvide } from "@/contexts/CursorContext";
import { BodyLayout } from "@/layouts/BodyLayout";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { cubicBezier, useScroll, useTransform } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { useCursorContext } from "@/hooks/useCursorContext";

export default function Home() {
    const aboutRef = useRef();
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start start", "end center"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 10, 80], {
        ease: cubicBezier(0.61, 1, 0.88, 1),
    });
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
            <main className="bg-background h-full w-full">
                {<HeroSection scale={scale} display={display} />}
                <BodyLayout>
                    <About ref={aboutRef} />
                </BodyLayout>
            </main>
        </CursorContextProvide>
    );
}
