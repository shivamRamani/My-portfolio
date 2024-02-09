import { useEffect, useState } from "react";

type TReturn = {
    mouseX: number;
    mouseY: number;
};

export const useMousePosition = (): TReturn => {
    const [mouseX, setMouseX] = useState(-100);
    const [mouseY, setMouseY] = useState(-100);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        const mouseOut = (e: MouseEvent) => {
            setMouseX(-100);
            setMouseY(-100);
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseout", mouseOut);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousemove", mouseOut);
        };
    }, []);

    return {
        mouseX,
        mouseY,
    };
};
