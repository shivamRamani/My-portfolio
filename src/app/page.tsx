import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { CursorContextProvide } from "@/contexts/CursorContext";
import { BodyLayout } from "@/layouts/BodyLayout";

export default function Home() {
    return (
        <CursorContextProvide>
            <main className=" bg-background">
                <HeroSection />
                <BodyLayout>
                    <About />
                </BodyLayout>
            </main>
        </CursorContextProvide>
    );
}
