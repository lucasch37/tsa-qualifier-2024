import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import React from "react";
import { ExpandableCard } from "./expandable-card";
import { ExpandableInfo } from "./expandable-info";

type Props = {};

const Product = (props: Props) => {
    return (
        <div className="flex flex-col py-12">
            <div className="grid grid-cols-5 gap-4 px-[4vw] h-full">
                <WobbleCard containerClassName="bg-complement">
                    <div className="text-center font-bebas text-5xl p-4 flex items-center justify-center h-full">
                        OUR <br /> PRODUCTS
                    </div>
                </WobbleCard>
                <ExpandableCard
                    src="/lobster-beach.jpg"
                    title="Orange Lobster Slippers"
                    price={12.99}
                    productLink="https://a.co/d/7GDyCZU"
                    className="col-span-2 row-span-2"
                />
                <ExpandableCard
                    src="/shark-water.jpg"
                    title="Blue Shark Slippers"
                    price={12.99}
                    productLink="https://a.co/d/5x69D6j"
                    className="col-span-1"
                />
                <ExpandableCard
                    src="/black-fish.jpg"
                    title="Black Fish Slippers"
                    price={12.99}
                    productLink="https://a.co/d/bqgZhLh"
                    className="col-span-1"
                />
                <ExpandableCard
                    src="/black-shark.jpg"
                    title="Black Shark Slippers"
                    price={12.99}
                    productLink="https://a.co/d/39iphIx"
                    className="col-span-1"
                />
                <div className="col-span-2">
                    <ExpandableInfo title="Features">
                        <ul className="mt-4 list-disc space-y-2">
                            <li>
                                Our slippers are made from a strong,
                                light-weight, elastic and shockproof material.
                                This makes them soft, flexible, comfortable and
                                prevent foot pain.
                            </li>
                            <li>
                                They are highly dense, have a high elastic
                                anti-skidding sole, no glue, and are more
                                resistant.
                            </li>
                            <li>
                                Unique and vivid, will be eye-catching products
                                during the summer day.
                            </li>
                        </ul>
                    </ExpandableInfo>
                </div>
                <div className="col-span-2">
                    <ExpandableInfo title="Sizes">
                        <div className="mt-4 grid grid-cols-2">
                            <div>3-4 Women / 2-3 Men</div>
                            <div>4-5 Women / 3.5-4 Men</div>
                            <div>5.5-6 Women / 4-5 Men</div>
                            <div>7-8 Women / 5.5-6.5 Men</div>
                            <div>8.5-9.5 Women / 7-8 Men</div>
                            <div>10-11 Women / 8.5-9.5 Men</div>
                            <div>11-12 Women / 10-11 Men</div>
                            <div>13-14 Women / 11.5-12.5 Men</div>
                        </div>
                    </ExpandableInfo>
                </div>
                <ExpandableCard
                    src="/blue-fish.jpg"
                    title="Blue Fish Slippers"
                    price={12.99}
                    productLink="https://a.co/d/6wPhSYN"
                    className="col-span-1"
                />
                <ExpandableCard
                    src="/lobster-pan.jpg"
                    title="Green Lobster Slippers"
                    price={12.99}
                    productLink="https://a.co/d/6wPhSYN"
                    className="col-span-1"
                />
                <ExpandableCard
                    src="/orange-fish.jpg"
                    title="Orange Fish"
                    price={12.99}
                    productLink="https://a.co/d/ePSFfcf"
                    className="col-span-1"
                />
            </div>
        </div>
    );
};

export default Product;
