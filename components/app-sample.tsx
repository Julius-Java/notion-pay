"use client";
import Image from "next/image";
import appSample from "@/public/hero-app-sample.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AppSample() {
    const imageRef = useRef<HTMLImageElement | null>(null);
    useGSAP(() => {
        gsap.from(imageRef.current, {
            opacity: 0,
            x: 300,
            duration: 0.8,
            // ease: "power4.out",
        });
    });

    return (
        <div ref={imageRef}>
            <Image
                src={appSample}
                alt="App sample"
                className="w-full sm:w-[70%] mx-auto lg:w-[90%]"
            />
        </div>
    );
}
