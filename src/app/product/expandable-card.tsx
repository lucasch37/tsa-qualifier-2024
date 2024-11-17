"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { ChevronsRight } from "lucide-react";

interface ExpandableCardProps {
    src: string;
    title?: string;
    price: number;
    className?: string;
}

export function ExpandableCard({
    src,
    title,
    price,
    className,
}: ExpandableCardProps) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsActive(false);
            }
        }

        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isActive]);

    useOutsideClick(ref, () => setIsActive(false));

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    return (
        <>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isActive ? (
                    <motion.div
                        className="fixed inset-0 grid place-items-center z-[100]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            ref={ref}
                            className="h-fit w-fit bg-transparent rounded-2xl overflow-hidden"
                        >
                            <motion.div
                                layoutId={`image-${title}-${id}`}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    priority
                                    width={500}
                                    height={500}
                                    src={src}
                                    alt={title || "image"}
                                    className="rounded-t-2xl"
                                />
                            </motion.div>

                            <div className="flex p-6 justify-between bg-[#ffc299]">
                                <div className="flex flex-col">
                                    <motion.div className="truncate font-bebas text-4xl">
                                        {title}
                                    </motion.div>
                                    <motion.div className="font-bebas text-2xl">
                                        ${price}
                                    </motion.div>
                                </div>
                                <div>
                                    <div className="font-bebas flex gap-2 items-center text-2xl px-2 bg-[#FFA567] rounded-lg">
                                        Buy now <ChevronsRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <div
                className={`rounded-xl ${
                    isHovering && "scale-105"
                } transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    setIsHovering(false);
                    setMousePosition({ x: 0, y: 0 });
                }}
                style={{
                    transform: isHovering
                        ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.07, 1.07, 1.07)`
                        : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                    transition: "transform 0.1s ease-out",
                }}
                onClick={() => setIsActive(true)}
            >
                <motion.div layoutId={`image-${title}-${id}`}>
                    <img
                        src={src}
                        alt={title || "image"}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
