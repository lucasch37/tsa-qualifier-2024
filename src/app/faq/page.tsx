"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center mx-auto max-w-3xl pb-20 w-full h-full">
            <h1 className="text-6xl font-bold font-bebas">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-complement rounded-lg px-4 shadow-md border-none">
                <AccordionTrigger className="text-4xl font-bebas">Customer Satisfaction Guarantee</AccordionTrigger>
                <AccordionContent className="text-lg">
                Made you look.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-complement rounded-lg px-4 shadow-md border-none">
                <AccordionTrigger className="text-4xl font-bebas">Return Policy</AccordionTrigger>
                <AccordionContent className="text-lg">
                Made you look.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-complement rounded-lg px-4 shadow-md border-none">
                <AccordionTrigger className="text-4xl font-bebas">Caring for Your Slippers</AccordionTrigger>
                <AccordionContent className="text-lg">
                Made you look.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    );
}