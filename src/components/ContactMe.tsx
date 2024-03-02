import { AnimatedText } from "./AnimatedText";

export const ContactMe = () => {
    return (
        <div className="relative h-80 w-wll bg-background text-white">
            <div className="absolute w-full z-50">
                <AnimatedText
                    text={"CONTACT ME"}
                    className="font-bold text-center text-11xl w-full -translate-y-[57%] text-background z-20 overflow-visible"
                />
            </div>
            <div className="absolute overflow-hidden w-full h-fit  z-50 ">
                <AnimatedText
                    text="CONTACT ME"
                    className="text-11xl text-center -translate-y-[57%] text-white font-bold z-50 overflow-visible mx-auto"
                    animationTransformFrom="translate(0,-100%)"
                ></AnimatedText>
            </div>
        </div>
    );
};
