import Image from "next/image";
import client_one from "@/public/client-1.svg";
import client_two from "@/public/client-2.svg";
import client_three from "@/public/client-3.svg";
import client_four from "@/public/client-4.svg";
import client_five from "@/public/client-5.svg";

export default function Client() {
    return (
        <section className="container py-7">
            <h3 className="text-center font-poppins_semibold text-[#BBC3CF] sm:text-lg">
                Join 4,000+ customers already growing
            </h3>

            <div className="flex gap-x-5 flex-wrap mt-10 gap-y-4">
                <Image src={client_one} alt="Client 1" className="mx-auto" />
                <Image src={client_two} alt="Client 2" className="mx-auto" />
                <Image src={client_three} alt="Client 3" className="mx-auto" />
                <Image src={client_four} alt="Client 4" className="mx-auto" />
                <Image src={client_five} alt="Client 5" className="mx-auto" />
            </div>
        </section>
    );
}
