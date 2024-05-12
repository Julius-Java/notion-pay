import type { Metadata } from "next";
import { Inter, Poppins, ABeeZee } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Navigation from "@/components/navigation";
import "../globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: "300",
});
const abeezee = ABeeZee({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-abeezee",
});
const poppins_normal = Poppins({
    subsets: ["latin"],
    weight: "200",
    variable: "--font-poppins-normal",
});
const poppins_semibold = Poppins({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-poppins-semibold",
});
const poppins_bold = Poppins({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-poppins-bold",
});
const poppins_extrabold = Poppins({
    subsets: ["latin"],
    weight: "900",
    variable: "--font-poppins-extrabold",
});

export const metadata: Metadata = {
    title: "Notion Pay NG",
    description: "Borderless payments for Africans by Africans",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    poppins_normal.className,
                    inter.variable,
                    poppins_semibold.variable,
                    poppins_bold.variable,
                    poppins_extrabold.variable,
                    abeezee.variable
                )}
            >
                <header>
                    <Navigation />
                </header>
                {children}
            </body>
        </html>
    );
}
