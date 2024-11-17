"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";

const boxes = [
    {
        id: 1,
        title: "Company",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        className: "top-0 left-0"
    },
    {
        id: 2,
        title: "Creators",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        className: "top-0 right-0"
    },
    {
        id: 3,
        title: "Inspiration",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        className: "bottom-0 left-0"
    },
    {
        id: 4,
        title: "Mission",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        className: "bottom-0 right-0"
    }
];

export default function About() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="py-12 w-full h-full">
            <div className="relative w-full h-full">
                {boxes.map((box) => (
                    <motion.div
                        key={box.id}
                        className={`absolute ${box.className} bg-accent [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] rounded-lg shadow-md overflow-hidden`}
                        style={{
                            zIndex: hoveredId === box.id ? 10 : 1
                        }}
                        initial={{
                            width: "calc(50% - 20px)",
                            height: "calc(50% - 20px)",
                            margin: 20
                        }}
                        animate={{
                            width: expandedId === box.id ? "calc(100% - 240px)" : "calc(50% - 20px)",
                            height: expandedId === box.id ? "calc(100% - 240px)" : "calc(50% - 20px)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25
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
                        <div className="mt-8 ml-8 pt-8 h-full relative">
                            <motion.h2
                                className="text-6xl font-bold absolute"
                                initial={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)"
                                }}
                                animate={{
                                    left: expandedId === box.id ? "0" : "50%",
                                    top: expandedId === box.id ? "0" : "calc(50% - 2rem)",
                                    transform: expandedId === box.id ? "none" : "translate(-50%, -50%)"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                            >
                                {box.title}
                            </motion.h2>
                            {expandedId === box.id && (
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.2}}
                                    className="text-zinc-800 mt-12"
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
};