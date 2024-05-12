"use client";
import Link from "next/link";
import Button from "./ui/button";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Mobilemenu from "./mobile-menu";
import { useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClicked = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-dark_green text-white fixed w-full top-0 z-[1000]">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between w-[95%] py-3 md:py-4">
                {/* Branding */}
                <Link href={"/"} className="">
                    <h1 className="text-xl font-poppins_extrabold lg:text-2xl">
                        Notionpay.
                    </h1>
                </Link>

                {/* Mobile Menu - Only visible on mobile screens */}
                <Mobilemenu isOpen={isOpen} />

                {/* Desktop Menu */}
                <section className="hidden md:block">
                    <ul className="flex items-center space-x-3 text-xs font-inter lg:text-sm xl:text-base lg:space-x-8">
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
                    </ul>
                </section>

                {/* Right end of navigation */}
                <section className="flex items-center gap-x-5">
                    <Button className="hidden sm:block font-inter font-[500] text-sm py-2 lg:py-3 lg:text-base">
                        Download now🚀
                    </Button>

                    {/* Mobile Menu Toogle - Only visible on mobile screens */}
                    <div onClick={handleClicked} className="md:hidden">
                        {!isOpen ? (
                            <Bars2Icon className="w-7 h-7 text-white cursor-pointer" />
                        ) : (
                            <XMarkIcon className="w-7 h-7 text-white cursor-pointer" />
                        )}
                    </div>
                </section>
            </div>
        </nav>
    );
}
