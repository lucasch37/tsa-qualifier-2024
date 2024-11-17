"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { ChevronsRight } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

interface ExpandableCardProps {
    title: string;
    className?: string;
    children: React.ReactNode;
}

export function ExpandableInfo({
    title,
    className,
    children,
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
                        <motion.div
                            ref={ref}
                            layoutId={`card-${title}-${id}`}
                            className="h-fit w-[600px] bg-[#FFA567] p-16 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] rounded-2xl overflow-hidden"
                        >
                            <motion.div
                                className="flex justify-between text-5xl font-bebas"
                                layoutId={`image-${title}-${id}`}
                            >
                                <div>{title}</div>
                            </motion.div>
                            {children}
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.div
                onClick={() => setIsActive(true)}
                className="h-full cursor-pointer"
                layoutId={`card-${title}-${id}`}
            >
                <WobbleCard
                    containerClassName="bg-[#FFA567] h-full"
                    scale={1.07}
                >
                    <motion.div className="text-center p-8 flex flex-col items-center justify-center h-full">
                        <motion.div
                            className="text-5xl font-bebas"
                            layoutId={`image-${title}-${id}`}
                        >
                            {title}
                        </motion.div>
                    </motion.div>
                </WobbleCard>
            </motion.div>
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
