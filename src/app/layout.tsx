import "./globals.css";
import Navbar from "@/components/navbar";
import { Circle, Square, Triangle } from "lucide-react";
import { Cursor } from "@/lib/react-creative-cursor";
import "@/lib/react-creative-cursor/dist/styles.css";
import { Metadata } from "next";
import CursorComponent from "./cursor";

export const metadata: Metadata = {
    title: "RHS Slippers",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="relative bg-background p-8 h-screen overflow-hidden container mx-auto ">
                <CursorComponent />
                <Circle
                    className="absolute -top-60 right-12 -z-10 fill-none text-lightShape stroke-[3px]"
                    size={384}
                />
                <Triangle
                    className="absolute top-12 left-12 -z-10 fill-none text-lightShape stroke-[3px]"
                    size={384}
                />
                <Square
                    className="absolute top-96 -right-12 -z-10 fill-none text-lightShape stroke-[3px]"
                    size={384}
                />
                <Circle
                    className="absolute -bottom-60 left-12 -z-10 fill-none text-lightShape stroke-[3px]"
                    size={384}
                />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
