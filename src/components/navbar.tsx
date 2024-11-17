"use client";

import { SearchIcon, HeartIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center text-black">
            {/* <div className="text-4xl font-bold font-bebas">Lobster Slippers</div> */}
            <div className="flex flex-1 font-bebas items-center gap-3">
                <Image
                    // src="/logo_slippers.svg"
                    src={"/rhs-logo.svg"}
                    width={80}
                    height={80}
                    alt="logo"
                />
                <div className="text-3xl">RHS SLIPPERS</div>
            </div>
            <div className="flex flex-row gap-16 px-16 py-3 rounded-full bg-[#ffc299] text-2xl font-bebas">
                <Link href={"/"} className="relative group/home">
                    <div>Home</div>
                    <div
                        className={`absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-[2.5px] ${
                            pathname === "/"
                                ? "bg-black"
                                : "bg-orange-600 opacity-0 group-hover/home:opacity-100 transition-all duration-150"
                        }`}
                    />
                </Link>
                <Link href={"/product"} className="relative group/product">
                    <div>Product</div>
                    <div
                        className={`absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-[2.5px] ${
                            pathname === "/product"
                                ? "bg-black"
                                : "bg-orange-600 opacity-0 group-hover/product:opacity-100 transition-all duration-150"
                        }`}
                    />
                </Link>
                <Link href={"/about"} className="relative group/about">
                    <div>About Us</div>
                    <div
                        className={`absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-[2.5px] ${
                            pathname === "/about"
                                ? "bg-black"
                                : "bg-orange-600 opacity-0 group-hover/about:opacity-100 transition-all duration-150"
                        }`}
                    />
                </Link>
                <Link href={"/"} className="relative group/faq">
                    <div>FAQ</div>
                    <div
                        className={`absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-[2.5px] ${
                            pathname === "/faq"
                                ? "bg-black"
                                : "bg-orange-600 opacity-0 group-hover/faq:opacity-100 transition-all duration-150"
                        }`}
                    />
                </Link>
            </div>
            <div className="flex flex-1 flex-row justify-end gap-2">
                <div className="rounded-full p-3 bg-[#ffc299]">
                    <SearchIcon size={22} />
                </div>
                <div className="rounded-full p-3 bg-[#ffc299]">
                    <HeartIcon size={22} />
                </div>
                <div className="rounded-full p-3 bg-[#ffc299]">
                    <ShoppingBagIcon size={22} />
                </div>
            </div>
        </div>
    );
}
