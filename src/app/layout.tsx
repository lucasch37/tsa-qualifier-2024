"use client";

import "./globals.css";
import Navbar from "@/components/navbar";
import { Circle, Square, Triangle } from "lucide-react";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="relative bg-[#ffd1b3] p-8 h-screen overflow-hidden container mx-auto">
                <Cursor isGelly={true} cursorBackgrounColor="rgb(249 115 22)" />
                <Circle
                    className="absolute -top-60 right-12 -z-10 fill-none text-[#ffdac2] stroke-[3px]"
                    size={384}
                />
                <Triangle
                    className="absolute top-12 left-12 -z-10 fill-none text-[#ffdac2] stroke-[3px]"
                    size={384}
                />
                <Square
                    className="absolute top-96 -right-12 -z-10 fill-none text-[#ffdac2] stroke-[3px]"
                    size={384}
                />
                <Circle
                    className="absolute -bottom-60 left-12 -z-10 fill-none text-[#ffdac2] stroke-[3px]"
                    size={384}
                />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
