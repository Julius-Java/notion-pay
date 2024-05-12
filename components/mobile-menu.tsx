import Link from "next/link";
import { Dispatch, SetStateAction, MutableRefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./ui/button";

type prop = {
    isOpen: boolean;
};

export default function Mobilemenu({ isOpen }: prop) {
    const mobileMenuRef = useRef<null | HTMLDivElement>(null);
    const containerRef = useRef<null | HTMLUListElement>(null);

    const menuItemAnimationConfig = {
        scope: containerRef,
        dependencies: [isOpen],
    };
    useGSAP(() => {
        if (!isOpen) {
            gsap.to(mobileMenuRef.current, {
                left: "-100%",
                duration: 0.5,
                ease: "spring",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                left: "0%",
                duration: 0.5,
                ease: "spring",
            });
        }
    }, [isOpen]);

    useGSAP(() => {
        if (!isOpen) return;
        gsap.from(".link", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
        });

        gsap.from("#download-btn", {
            scale: 0,
            yoyo: true,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
        });
    }, menuItemAnimationConfig);

    return (
        <div
            ref={mobileMenuRef}
            className="bg-white text-black absolute top-0 left-[-100%] w-full font-inter h-screen flex items-center justify-center mt-[52px] sm:mt-[60px] border-2 md:hidden"
        >
            <ul
                className="flex flex-col gap-y-5 text-center"
                ref={containerRef}
            >
                <Link href={"#"} className="link">
                    <li>About us</li>
                </Link>
                <Link href={"#"} className="link">
                    <li>Features</li>
                </Link>
                <Link href={"#"} className="link">
                    <li>FAQs</li>
                </Link>
                <Link href={"#"} className="link">
                    <li>How it works</li>
                </Link>
                <Link href={"#"} className="link">
                    <li>Contact</li>
                </Link>
                <Button
                    className="text-sm font-[500] sm:hidden"
                    id="download-btn"
                >
                    Download now🚀
                </Button>
            </ul>
        </div>
    );
}
