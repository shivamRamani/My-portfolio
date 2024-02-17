import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { CursorContextProvide } from "@/contexts/CursorContext";

export default function Home() {
    return (
        <CursorContextProvide>
            <main className="flex min-h-screen flex-col bg-background">
                <HeroSection />
                <About />
            </main>
        </CursorContextProvide>
    );
}
