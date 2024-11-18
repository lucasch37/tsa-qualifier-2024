"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Lightbulb, Sparkle, Target } from "lucide-react";

const boxes = [
    {
        id: 1,
        icon: <Building size={70} />,
        title: "Company",
        content:
            "Our company, the RHS Student Store, was founded in 2021 and is a student-led initiative which aims to fund school events, programs, and more. Appearing on Shark Tank in 2023 for our innovative and unique lobster slippers, we were able to get one particular shark to bite at our signature product, the lobster slippers. Securing a $300,000 deal with Mark Cuban, we were able to expand on the slippers and continue our journey to make people's lives more exciting through fashion.",
        className: "top-0 left-0",
    },
    {
        id: 2,
        icon: <Sparkle size={70} />,
        title: "Creators",
        content:
            "We are a group of 5 students from Redmond High School who created this product page. We are passionate about bringing joy and fun to our school and community. We hope you enjoy our website and our product, the lobster slippers!",
        className: "top-0 right-0",
    },
    {
        id: 3,
        icon: <Lightbulb size={70} />,
        title: "Inspiration",
        content:
            "We looked around Redmond High School and saw that students footwear was lacking in creativity. We wanted to change that and spice things up, bringing a sense of fun and whimsy to school. What better way to do that than with lobster slippers? These slippers turn heads in the hallways and make people smile. We wanted to bring that joy to everyone, and that's why we created the lobster slippers. After that, we expanded our product line to include fish slippers, shark slippers, and more!",
        className: "bottom-0 left-0",
    },
    {
        id: 4,
        icon: <Target size={70} />,
        title: "Mission",
        content:
            "Our mission is to bring comfort, uniqueness, and pizzazz to consumers with our high-quality product, the lobster slippers. Blending the unique and whimsical design with comfortable practicality, we aim to make every single part of the process create the best user experience possible.",
        className: "bottom-0 right-0",
    },
];

export default function About() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="px-24 mt-16 w-full h-[70vh]">
            <div className="relative w-full h-full flex">
                {boxes.map((box) => (
                    <motion.div
                        key={box.id}
                        className={`absolute ${box.className} bg-complement [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] rounded-2xl shadow-md overflow-hidden`}
                        style={{
                            zIndex: hoveredId === box.id ? 10 : 1,
                        }}
                        initial={{
                            width: "calc(50% - 30px)",
                            height: "calc(50% - 30px)",
                            margin: 20,
                        }}
                        animate={{
                            width:
                                expandedId === box.id
                                    ? "calc(100% - 240px)"
                                    : "calc(50% - 30px)",
                            height:
                                expandedId === box.id
                                    ? "calc(100% - 240px)"
                                    : "calc(50% - 30px)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                        }}
                        onHoverStart={() => {
                            setExpandedId(box.id);
                            setHoveredId(box.id);
                        }}
                        onHoverEnd={() => {
                            setExpandedId(null);
                            setHoveredId(null);
                        }}
                    >
                        <div
                            className={` ${
                                expandedId === box.id ? "mt-16" : "mt-8"
                            } ml-16 pt-8 h-full relative flex justify-center`}
                        >
                            <motion.h2
                                className="absolute font-bebas pr-16"
                                initial={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                                animate={{
                                    left: expandedId === box.id ? "0" : "50%",
                                    top:
                                        expandedId === box.id
                                            ? "0"
                                            : "calc(50% - 2rem)",
                                    transform:
                                        expandedId === box.id
                                            ? "none"
                                            : "translate(-50%, -50%)",
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                {expandedId !== box.id && (
                                    <div className="flex justify-center w-full">
                                        {box.icon}
                                    </div>
                                )}
                                <div
                                    className={`font-bebas text-7xl ${
                                        expandedId !== box.id && "mt-4"
                                    }`}
                                >
                                    {box.title}
                                </div>
                            </motion.h2>
                            {expandedId === box.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-zinc-800 mt-14 pr-16 text-lg"
                                >
                                    {box.content}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
