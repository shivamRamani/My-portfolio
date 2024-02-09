"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/utils/cn";

type Props = {
    size?: number;
};

export const CustomCursor = (props: Props) => {
    const { size = 3 } = props;
    const { mouseX, mouseY } = useMousePosition();

    return (
        <div
            style={{
                height: 20 * size + "px",
                left: mouseX,
                top: mouseY,
                transform: "translate(-50%,-50%)",
            }}
            className={cn(
                "aspect-square rounded-full fixed bg-white  z-10 mix-blend-difference origin-center"
            )}
        />
    );
};
