"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { useState } from "react";

export default function Home() {
    const [cursorSize, setCursorSize] = useState(8);
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="my-10 mx-auto max-w-6xl w-full h-full bg-primary dark rounded-2xl p-20 text-background ">
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
                <h1 className="text-11xl select-none">SHIVAM</h1>
            </div>
            <CustomCursor size={cursorSize} />
        </main>
    );
}
