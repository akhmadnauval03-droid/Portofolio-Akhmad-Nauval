// import Logo from "@/components/navbar/Logo";
// import Link from "next/link";
// import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

// export default function Footer() {
//     return(
//         <footer className="relative border-t border-border bg-background overflow-hidden"> 
//             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl
//             bg-primary/10"/>

//             <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
//                 {/* top section */}
//                 <div className="flex flec-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left">
//                     <div className="space-y-3 max-w-xs">
//                         <div className="flex justify-center md:justify-start">
//                             <Logo/>
//                         </div>
//                         <p className="text-xs text-gray-400">
//                             FULL STACK WEB DEVELOPER
//                         </p>
//                     </div>

//                     {/* socials */}
//                     <div className="flex items-center gap-4">
//                         {[LuGithub,LuLinkedin,LuTwitter].map((Icon, index) => (
//                             <Link key={index} href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all decoration-neutral-300">
//                                 <Icon className="w-5 h-5"/>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
                
//                     <div className="h-px bg-border"/>

//                     {/* bottom footer */}
//                     <p className="text-center text-gray-400 text-sm">
//                         &copy; {new Date().getFullYear()}Akhmad Nauval. All rights reserved
//                     </p>
//             </div>
//         </footer>
//     )
// }


"use client";

import Logo from "@/components/navbar/Logo";
import { useLanguage } from "@/components/Bahasa/LanguageProvider";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Footer() {
    const { language } = useLanguage();
    const isId = language === "id";

    const socials = [
        {
            name: "GitHub",
            icon: LuGithub,
            href: "https://github.com/akhmadnauval03-droid",
        },
        {
            name: "LinkedIn",
            icon: LuLinkedin,
            href: "#",
        },
        {
            name: "Twitter",
            icon: LuTwitter,
            href: "#",
        },
    ];

    return (
        <footer className="relative border-t border-border bg-background overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

            <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
                {/* Top section */}
                <div className="flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left">
                    <div className="space-y-3 max-w-xs">
                        <div className="flex justify-center md:justify-start">
                            <Logo />
                        </div>

                        <p className="text-xs text-gray-400">
                            FULL STACK WEB DEVELOPER
                        </p>

                        <p className="text-sm text-gray-400">
                            {isId
                                ? "Membangun aplikasi web modern dan mudah digunakan."
                                : "Building modern and user-friendly web applications."}
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ name, icon: Icon, href }) => (
                            <Link
                                key={name}
                                href={href}
                                aria-label={name}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all"
                            >
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-border" />

                {/* Bottom footer */}
                <p className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Akhmad Nauval.{" "}
                    {isId
                        ? "Hak cipta dilindungi."
                        : "All rights reserved."}
                </p>
            </div>
        </footer>
    );
}
