"use client";


import {motion} from "framer-motion";
import {ChevronsRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center mt-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-200 font-bebas landing-text leading-[0.9]"
                >
                    LOBSTER
                </motion.div>
                <motion.img
                    src="/slippers.png"
                    alt="slippers"
                    className="h-[50vh] -mt-64"
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                />
            </div>

            <motion.div
                className="flex justify-between items-end absolute bottom-12 w-full pr-12"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <motion.div
                    className="flex flex-col gap-2 font-bebas text-2xl"
                    variants={{
                        hidden: {x: -100, opacity: 0},
                        visible: {x: 0, opacity: 1},
                    }}
                >
                    <div className="text-black" data-cursor-exclusion>
                        Find your perfect pair
                        <br/> in one click
                    </div>
                    <Link
                        href="https://www.amazon.com/Lobster-Slippers-Unisex-Sandals-Swimming/dp/B089GN7WCJ/ref=sr_1_5?crid=166HGCHSSOIY7"
                        className="flex items-center"
                        data-cursor-exclusion
                    >
                        <div
                            className="py-3 px-8 rounded-full bg-orange-400 w-fit text-3xl"
                        >
                            PURCHASE NOW
                        </div>
                        <div className="h-4 bg-orange-400 w-4 -mx-[2px]"></div>
                        <div className="p-1.5 rounded-full bg-orange-400 w-fit text-xl">
                            <div className="rounded-full p-1">
                                <ChevronsRight size={40}/>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <div className="flex gap-4 items-end">
                    <motion.div
                        className="p-3 flex gap-4 items-center bg-complement rounded-xl h-fit"
                        variants={{
                            hidden: {x: 100, opacity: 0},
                            visible: {x: 0, opacity: 1},
                        }}
                    >
                        <img
                            src="/lobster-beach.jpg"
                            alt=""
                            className="w-28 rounded-xl"
                        />
                        <div
                            data-cursor-exclusion
                            className="font-bebas text-2xl h-28 px-3 leading-tight bg-accent/80 rounded-xl text-center flex items-center "
                        >
                            COMFORT AND
                            <br/>
                            STYLE
                        </div>
                    </motion.div>
                    <motion.div
                        className="p-3 flex flex-col gap-2 items-center bg-complement text-background rounded-xl font-bold text-2xl relative"
                        variants={{
                            hidden: {x: 100, opacity: 0, rotate: -10},
                            visible: {x: 0, opacity: 1, rotate: 0},
                        }}
                    >
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
                    </motion.div>
                    <motion.div
                        className="p-3 flex gap-4 items-center bg-complement rounded-xl h-fit"
                        variants={{
                            hidden: {x: 100, opacity: 0},
                            visible: {x: 0, opacity: 1},
                        }}
                    >
                        <img
                            src="/lobster-pan.jpg"
                            alt=""
                            className="w-64 rounded-xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
