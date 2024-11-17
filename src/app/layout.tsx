import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Triangle} from "lucide-react";


export const metadata: Metadata = {
  title: "Lobster Land",
  description: "land of the lobsters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-[#ffd1b3] p-8 h-screen overflow-hidden container mx-auto">
        <div className="absolute -top-60 right-12 -z-10">
          <div className="flex items-center justify-center w-96 h-96 bg-[#ffdac2] rounded-full">
            <div className="bg-[#ffd1b3] w-72 h-72 rounded-full"/>
          </div>
        </div>
        <div className="absolute top-12 left-12 -z-10">
          <Triangle className="fill-none text-[#ffdac2] stroke-[3px]" size={384}/>
        </div>
        <div className="absolute top-96 -right-12 -z-10">
          <div className="flex items-center justify-center w-96 h-96 bg-[#ffdac2]">
            <div className="bg-[#ffd1b3] w-72 h-72"/>
          </div>
        </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
