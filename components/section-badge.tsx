export default function SectionBadge({ name }: { name: string }) {
    return (
        <div className="max-w-max p-[10px] rounded-3xl border bg-[#1C2B3021] text-light_green mx-auto">
            <span className="block text-light_green font-poppins_semibold">
                {name}
            </span>
        </div>
    );
}
