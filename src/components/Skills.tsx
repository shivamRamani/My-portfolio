import { AnimatedText } from "./AnimatedText";
import Image from "next/image";

// TODO: On hold
export const Skills = () => {
    return (
        <div className="h-[35rem] w-full max-w-6xl mx-auto grid grid-cols-5 grid-rows-5 mb-40 gap-4">
            <div className="flex flex-col justify-center relative w-full h-full bg-white row-span-4 col-span-1 rounded-3xl p-4">
                <div className="w-full aspect-square bg-black/5 rounded-2xl p-4 mb-4">
                    <div className="w-full h-full relative ">
                        <Image
                            src={"./next.svg"}
                            alt="hi"
                            fill
                            objectFit="contain"
                            className=""
                        />
                    </div>
                </div>
                <div className="w-full aspect-square bg-black/5 rounded-2xl p-4 mt-4">
                    <div className="w-full h-full relative ">
                        <Image
                            src={"./react.svg"}
                            alt="hi"
                            fill
                            objectFit="contain"
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white row-span-2 col-span-2 rounded-3xl p-4">
                <div className="w-full h-full aspect-square relative">
                    <Image
                        src={"./react.svg"}
                        alt="hi"
                        fill
                        objectFit="contain"
                    />
                </div>
                <h5 className="font-bold text-2xl font-custom text-center">
                    React Js
                </h5>
            </div>
            <div className="w-full h-full bg-white row-span-2 col-span-1 rounded-3xl">
                3
            </div>
            <div className="w-full h-full bg-white row-span-2 col-span-1 rounded-3xl">
                4
            </div>
            <div className="w-full h-full bg-white row-span-2 col-span-1 rounded-3xl">
                5
            </div>
            <div className="w-full h-full bg-white row-span-2 col-span-2 rounded-3xl grid place-content-center">
                <AnimatedText
                    text="SKILLS"
                    className="text-9xl font-extrabold w-fit font-custom ml-4"
                />
            </div>
            <div className="w-full h-full bg-white row-span-4 col-span-1 rounded-3xl">
                7
            </div>
            <div className="grid place-content-center w-full h-full bg-black row-span-2 col-span-3 rounded-3xl">
                <h3 className="font-custom font-extrabold text-white p-4">
                    Data structures and Algorithms
                </h3>
            </div>
            <div className="w-full h-full bg-white row-span-2 col-span-1 rounded-3xl">
                9
            </div>
            {/* <div className="w-full h-full bg-white row-span-1 col-span-1 rounded-3xl"></div> */}
        </div>
    );
};
