import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
    href: string;
    text: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    rounded?: boolean;
    download?: boolean;

    variant?: "primary" | "outline";
}

export default function LinkButton({
    href,
    text, 
    icon: Icon,
    iconPosition = "left", 
    rounded,
    download = false,
    variant = "primary"
}: LinkButtonProps) {
    const baseStyles=`relative px-6 py-3 font-medium ${rounded ? "rounded-full" : "rounded-lg"} inline-flex items-center justify-center gap-2 overflow-hidden text-text border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`
    
    const variants = {
        primary:`bg-primary text-background border-none`,
        outline:`bg-transparent text-primary border-border hover:text-primary hover:border-primary hover:bg-primary/10`
    }
    return (
        <Link download={download} className={`${baseStyles} ${variants[variant]}`} href={href}>
            {Icon && iconPosition === "left" && (
                <Icon className="w-5 h-5 z-10" />
            )}
            <span className="z-10">{text}</span>
            {Icon && iconPosition === "right" && (
                <Icon className="w-5 h-5 z-10" />
            )}
        </Link>
    )
}