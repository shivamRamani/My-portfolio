"use client";

import { createContext, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

type T = {
    cursorSize: number;
    mouseX: number;
    mouseY: number;
    setCursorSize: (value: number) => void;
};

export const CursorContext = createContext<T>({
    cursorSize: 2,
    mouseX: -100,
    mouseY: -100,
    setCursorSize: () => {},
});

export const CursorContextProvide = ({
    children,
}: {
    children: JSX.Element;
}) => {
    const [cursorSize, setCursorSize] = useState(2);
    const { mouseX, mouseY } = useMousePosition();

    return (
        <CursorContext.Provider
            value={{
                cursorSize,
                setCursorSize,
                mouseX,
                mouseY,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};
