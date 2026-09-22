import Logo from "@/components/navbar/Logo";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Footer() {
    return(
        <footer className="relative border-t border-border bg-background overflow-hidden"> 
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl
            bg-primary/10"/>

            <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
                {/* top section */}
                <div className="flex flec-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left">
                    <div className="space-y-3 max-w-xs">
                        <div className="flex justify-center md:justify-start">
                            <Logo/>
                        </div>
                        <p className="text-sm text-gray-300">
                            Crafting modern, scalable web experineces with clean code and thougthful design.
                        </p>
                    </div>

                    {/* socials */}
                    <div className="flex items-center gap-4">
                        {[LuGithub,LuLinkedin,LuTwitter].map((Icon, index) => (
                            <Link key={index} href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all decoration-neutral-300">
                                <Icon className="w-5 h-5"/>
                            </Link>
                        ))}
                    </div>
                </div>
                
                    <div className="h-px bg-border"/>

                    {/* bottom footer */}
                    <p className="text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()}Akhmad Nauval. All rights reserved
                    </p>
            </div>
        </footer>
    )
}