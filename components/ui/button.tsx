import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
};

export default function Button({
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, size }), className)}
        />
    );
}

// Ignore type errors
const buttonVariants = cva(
    "rounded-md font-semibold hover:opacity-80 active:opacity-50",
    // @ts-ignore
    {
        variants: {
            variant: {
                primary: "bg-[#0B454F] text-white",
                secondary: "text-[#333F51] bg-white border-2",
            },
            size: {
                sm: "py-[12.44px] px-[17.78px]",
                md: "py-[13px] px-[19px]",
                lg: "py-[14.43px] px-[25.25px]",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "sm",
        },
    }
);
