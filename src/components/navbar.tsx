"use client";

import {motion} from "framer-motion";
import {HeartIcon, SearchIcon, ShoppingBagIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navItems = [
    {
        item: "Home",
        path: "/"
    },
    {
        item: "Product",
        path: "/product"
    },
    {
        item: "About",
        path: "/about"
    },
    {
        item: "FAQ",
        path: "/faq"
    },
];

export default function Navbar() {
    const curPath = usePathname();

    return (
        <motion.div
            className="flex flex-row items-center text-black"
            data-cursor-exclusion
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 80}}
        >
            <motion.a
                className="flex flex-1 font-bebas items-center gap-3"
                href="/"
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
            </motion.a>

            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 90, delay: 0.3}}
            >
                <motion.div
                    className="flex flex-row gap-16 px-16 pt-3 pb-2 rounded-full bg-complement text-2xl font-bebas"
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 90}}
                >
                    {
                        navItems.map(({item, path}, i) =>
                            <Link href={path}
                                  className={path == curPath ? "nav-link-selected" : "nav-link"}
                                  key={i}
                            >
                                {item}
                            </Link>
                        )
                    }
                </motion.div>
            </motion.div>

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
                    <button
                        key={index}
                        className="rounded-full p-3 bg-complement"
                    >
                        <Icon size={22}/>
                    </button>
                ))}
            </motion.div>
        </motion.div>
    );
}
