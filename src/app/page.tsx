import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center mt-16 relative">
                <div className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-200 font-bebas text-[30rem] leading-[0.9]">
                    LOBSTER
                </div>
                {/* <img src="/rhs-logo.svg" alt="slippers" className="h-[20vh] absolute -left-24 top-8" /> */}
                <img
                    src="/slippers.png"
                    alt="slippers"
                    className="h-[45vh] -mt-72"
                />
            </div>
            <div className="flex justify-between items-end absolute bottom-12 w-full pr-12">
                <div className="flex flex-col gap-2 font-bebas text-2xl ">
                    <div className="text-black">
                        Find your perfect pair
                        <br /> in one click
                    </div>
                    <div className="flex items-center">
                        <div className="py-3 px-8 rounded-full bg-[#FFA567] w-fit text-3xl">
                            PURCHASE NOW
                        </div>
                        <div className="h-4 bg-[#FFA567] w-4 -mx-[2px]"></div>
                        <div className="p-1.5 rounded-full bg-[#FFA567] w-fit text-xl">
                            <div className="rounded-full p-1">
                                <ChevronsRight size={40} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-end">
                    <div className="p-3 flex gap-4 items-center bg-[#ffc299] rounded-xl h-fit">
                        <img
                            src="/lobster-beach.jpg"
                            alt=""
                            className="w-28 rounded-xl"
                        />
                        <div className="font-bebas text-2xl h-28 px-3 leading-tight bg-[#FFA567]/80 rounded-xl text-center flex items-center ">
                            COMFORT AND
                            <br />
                            STYLE
                        </div>
                    </div>
                    <div className="p-3 flex flex-col gap-2 items-center bg-[#ffc299] text-orange-400 rounded-xl font-bold text-2xl relative">
                        <div>L O B S T E R</div>
                        <div>L O B S T E R</div>
                        <div>L O B S T E R</div>
                        <div>L O B S T E R</div>
                        <div>L O B S T E R</div>
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full">
                            <img
                                src="/slippers.png"
                                alt=""
                                className="w-36 mx-auto -rotate-45"
                            />
                        </div>
                    </div>
                    <div className="p-3 flex gap-4 items-center bg-[#ffc299] rounded-xl h-fit">
                        <img
                            src="/lobster-pan.jpg"
                            alt=""
                            className="w-64 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
