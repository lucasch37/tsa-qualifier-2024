"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center mx-auto max-w-3xl pb-20 w-full h-full">
            <h1 className="text-6xl font-bold font-bebas">
                Frequently Asked Questions
            </h1>
            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                    value="item-1"
                    className="bg-complement rounded-lg px-4 shadow-md border-none"
                >
                    <AccordionTrigger className="text-4xl font-bebas">
                        Customer Satisfaction Guarantee
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                        We guarantee your satisfaction <strong>100%</strong> of the time on every
                        product we sell, and will refund your purchase price if
                        you are not fully satisfied. We can also replace any
                        slippers if they come with defects or any manufacturing
                        issues.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="item-2"
                    className="bg-complement rounded-lg px-4 shadow-md border-none"
                >
                    <AccordionTrigger className="text-4xl font-bebas">
                        Return Policy
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                        You may return your product for a full refund within 60
                        days of purchase provided the product is in close to new
                        condition and has not been worn outside. Please request
                        a return label from us and you can either print it at
                        home or pick it up from a nearby post office.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="item-3"
                    className="bg-complement rounded-lg px-4 shadow-md border-none"
                >
                    <AccordionTrigger className="text-4xl font-bebas">
                        Caring for Your Slippers
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                        <ul className="mt-4 list-disc space-y-2">
                            <li>
                                <strong>Cleaning:</strong> Every now and then to
                                clean your slippers use a damp cloth and a mild
                                soap with circular motions and avoid soaking the
                                slippers.
                            </li>
                            <li>
                                <strong>Drying:</strong> If the slippers are
                                affected by any water, make sure to air dry them
                                and avoid heat sources as they can damage the
                                integrity of the slippers.
                            </li>
                            <li>
                                <strong>Integrity:</strong> When not in use,
                                stuff the slippers with some light paper in
                                order to maintain their shape and integrity.
                                Also, avoid putting heavy items on top of
                                slippers and store them in a cool and dry place.
                            </li>
                            <li>
                                <strong>Odor:</strong> Use a pinch of baking
                                soda and let the slippers sit overnight for the
                                soda to absorb the odors. Then shake them out
                                the next day and use a vacuum to remove any
                                leftover powder.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
