"use client";

import {motion} from "framer-motion";
import {HeartIcon, SearchIcon, ShoppingBagIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.div
            className="flex flex-row items-center text-black"
            data-cursor-exclusion
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 80}}
        >
            {/* Logo Section */}
            <motion.div
                className="flex flex-1 font-bebas items-center gap-3"
                initial={{x: -100}}
                animate={{x: 0}}
                transition={{type: "spring", stiffness: 80, delay: 0.1}}
            >
                <Image
                    src="/rhs-logo.svg"
                    width={80}
                    height={80}
                    alt="logo"
                />
                <motion.div
                    initial={{scale: 0.8}}
                    animate={{scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        delay: 0.2,
                    }}
                    className="text-3xl"
                >
                    RHS SLIPPERS
                </motion.div>
            </motion.div>

            {/* Links Section */}
            <motion.div
                className="flex flex-row gap-16 px-16 pt-3 pb-2 rounded-full bg-[#ffc299] text-2xl font-bebas"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 90, delay: 0.3}}
            >
                <Link href="/" className="nav-link-selected">Home</Link>
                <Link href="/product" className="nav-link">Product</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/" className="nav-link">FAQ</Link>
            </motion.div>

            {/* Icons Section */}
            <motion.div
                className="flex flex-1 flex-row justify-end gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {opacity: 0, scale: 0},
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.4,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[SearchIcon, HeartIcon, ShoppingBagIcon].map((Icon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.3, rotate: -15}}
                        whileTap={{scale: 1}}
                        className="rounded-full p-3 bg-[#ffc299]"
                        variants={{
                            hidden: {opacity: 0, scale: 0},
                            visible: {opacity: 1, scale: 1},
                        }}
                    >
                        <Icon size={22}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
