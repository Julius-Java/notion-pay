import Button from "./ui/button";
import Image from "next/image";
import playStoreBadge from "@/public/playstore-badge.svg";
import appStoreBadge from "@/public/appstore-badge.svg";
import AppSample from "./app-sample";

export default function Hero() {
    return (
        <section
            id="Hero"
            className="bg-dark_green text-white bg-gradient  flex justify-center pt-5"
        >
            <div className="container lg:flex lg:items-center lg:justify-between lg:gap-x-7">
                <article className="lg:w-[45%]">
                    {/* Hero badge */}
                    <div className="text-xs sm:text-sm p-1 bg-white rounded-2xl flex items-center space-x-3 max-w-max">
                        <div className="bg-light_green font-semibold rounded-2xl max-w-max py-1 px-4">
                            Fast
                        </div>
                        <span className="block text-light_gray font-abeezee">
                            Limitless foreign transactions 💯
                        </span>
                    </div>
                    {/* ============= */}

                    <h2 className="text-3xl font-poppins_bold my-4 sm:text-4xl">
                        A peer-to-peer{" "}
                        <span className="text-wrapper">wallet</span> system
                        enabling borderless USD transfers made for Nigerians
                    </h2>

                    <p className="text-lg sm:text-xl font-poppins_semibold text-[#FFFFFF80]">
                        Send & receive money to family and friends to and from
                        abroad, also make seamless transactions, sales,
                        purchases & subscriptions without limits.
                    </p>

                    <div className="my-5 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-3 sm:gap-y-0">
                        <Button className="max-w-max bg-[#1C2B30]">
                            <Image
                                src={playStoreBadge}
                                alt="Download App From Play store"
                            />
                        </Button>

                        <Button className="max-w-max bg-[#1C2B30]">
                            <Image
                                src={appStoreBadge}
                                alt="Download App From App store"
                            />
                        </Button>
                    </div>
                </article>

                <div className="mt-8 lg:grow-[1]">
                    <AppSample />
                </div>
            </div>
        </section>
    );
}
