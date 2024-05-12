import SectionBadge from "./section-badge";
import ftOne from "@/public/fintech-1.svg";
import ftTwo from "@/public/fintech-2.svg";
import ftThree from "@/public/fintech-3.svg";
import Image from "next/image";
import Button from "./ui/button";
import playStoreBadge from "@/public/playstore-badge.svg";
import appStoreBadge from "@/public/appstore-badge.svg";
import lady from "@/public/lady.svg";

export default function Features() {
    return (
        <section className="container py-14" id="features">
            {/* Section badge */}
            <SectionBadge name="Features" />
            {/* ================ */}
            <h2 className="text-center max-w-4xl mx-auto mt-8">
                <span className="font-poppins_bold text-4xl block text-[#084162] mb-3">
                    Transforming Your Financial Experience 😍
                </span>
                <span className="block text-lg font-poppins_semibold text-[#556987]">
                    Get a real-time overview of your financial health with our
                    intuitive dashboard. Track your spending, monitor
                    investments, and plan for the future—all in one place.
                </span>
            </h2>

            <section className="py-9">
                {/* Personlized Finance */}
                <div className="py-4 lg:flex lg:justify-between">
                    <div className="px-4 bg-[#D9D9D94D] pb-6 rounded-[20px] sm:flex sm:gap-x-3 lg:w-[65%]">
                        <Image src={ftOne} alt="" />
                        <article className="sm:self-center">
                            <h4 className="text-light_green font-poppins_bold text-2xl md:text-3xl my-3 md:mb-5">
                                Personalized Finance{" "}
                            </h4>
                            <p className="text-sm font-[500] text-light_green font-poppins_semibold md:text-base">
                                Tailored financial advice at your fingertips.
                                Notionpay provides personalized insights and
                                recommendations to help you make informed
                                decisions about your money.
                            </p>
                            <div className="flex items-center gap-x-2 mt-5 md:mt-7">
                                <Button className="bg-[#1C2B30] p-1 md:p-2 rounded-[3.1px]">
                                    <Image
                                        src={playStoreBadge}
                                        alt="Download from play store"
                                        width={102.92}
                                    />
                                </Button>

                                <Button className="bg-[#1C2B30] p-1 md:p-2 rounded-[3.1px]">
                                    <Image
                                        src={appStoreBadge}
                                        alt="Download from app store"
                                        width={95}
                                    />
                                </Button>
                            </div>
                        </article>
                    </div>

                    <div className="hidden lg:flex justify-center bg-[#FB8700] rounded-[20px] pt-5 lg:w-[30%]">
                        <Image src={ftTwo} alt="" className="" />
                    </div>
                </div>

                {/* Intuitive User Interface */}
                <div className="py-4 lg:flex lg:justify-between">
                    <div className="lg:w-[30%]">
                        <Image
                            src={lady}
                            alt=""
                            className="w-full hidden lg:block"
                        />
                    </div>
                    <div className="px-4 bg-[#D9D9D94D] py-6 sm:pb-0 rounded-[20px] sm:flex sm:gap-x-3 lg:w-[65%]">
                        <Image src={ftThree} alt="" />
                        <article className="sm:self-center">
                            <h4 className="text-light_green font-poppins_bold text-2xl md:text-3xl my-3 md:mb-5">
                                Intuitive User Interface
                            </h4>
                            <p className="text-sm font-[500] text-light_green font-poppins_semibold md:text-base">
                                No more navigating through complex menus. Our
                                user-friendly interface makes managing your
                                finances a breeze. Spend less time figuring out
                                your app and more time focusing on what matters
                                to you.
                            </p>
                            <div className="flex items-center gap-x-2 mt-5 md:mt-7">
                                <Button className="bg-[#1C2B30] p-1 md:p-2 rounded-[3.1px]">
                                    <Image
                                        src={playStoreBadge}
                                        alt="Download from play store"
                                        width={102.92}
                                    />
                                </Button>

                                <Button className="bg-[#1C2B30] p-1 md:p-2 rounded-[3.1px]">
                                    <Image
                                        src={appStoreBadge}
                                        alt="Download from app store"
                                        width={95}
                                    />
                                </Button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    );
}
