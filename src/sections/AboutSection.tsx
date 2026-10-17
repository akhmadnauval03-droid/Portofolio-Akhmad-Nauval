// import Image from "next/image";
// import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";

// export default function AboutSection() {
//     return (
//         <section id="about" className="py-24 overflow-hidden relative scroll-mt-24">

//             {/* background glow */}
//             <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

//             <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl
//             bg-primary/10"/>
//             <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                 {/* leftside */}
//                 <div data-aos="fade-right" data-aos-delay="100"data-aos-anchor-placement="top-center" className="flew justify-center lg:justify-start">
//                     <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80
//                         backdrop-blur-md border border-border flex items-center justify-center">
//                         <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />

//                         <div className="w-[85%] h-[85%] relative">
//                             <Image fill src="/images/a.png" alt="About me" className="z-10 object-cover rounded-xl" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* rigthside */}
//                 <div className="space-y-6" data-aos="fade-left" data-aos-delay="100"data-aos-anchor-placement="top-center">
//                     <span className="text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border
//                     border-border inline-block">
//                         About Me
//                     </span>

//                     <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
//                         Hello, I'm AKHMAD NAUVAL
//                     </h2>
//                     <p className="text-gray-400 max-w-xl">
//                     I am an 11th-grade student majoring in Software Engineering at SMKN 1 Pasuruan City, focusing on the development of modern, interactive websites. I am passionate about transforming ideas into seamless, functional, and user-friendly digital products. Every project I undertake serves as an opportunity for me to grow and deliver effective solutions that create a tangible impact.
//                     </p>
//                     <p className="text-gray-400 max-w-xl">
//                     I frequently work with HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS, as well as MySQL and basic Python. For UI design and development, I rely on Figma and shadcn/ui to create clean, responsive, and consistent user experiences.
//                     </p>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
//                         <div className="p-4 rounded-xl bg-surface border border-border text-center">
//                             <LuCode className="mx-auto mb-2 text-primary w-6 h-6" />
//                             <p className="text-text text-sm">Clean code</p>
//                         </div>
//                         <div className="p-4 rounded-xl bg-surface border border-border text-center">
//                             <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6" />
//                             <p className="text-text text-sm">Fullstack Apps</p>
//                         </div>
//                         <div className="p-4 rounded-xl bg-surface border border-border text-center">
//                             <LuRocket className="mx-auto mb-2 text-primary w-6 h-6" />
//                             <p className="text-text text-sm">Performance</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import Image from "next/image";
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";
import { useLanguage } from "@/components/Bahasa/LanguageProvider";

export default function AboutSection() {
    const { language } = useLanguage();

    return (
        <section
            id="about"
            className="py-24 overflow-hidden relative scroll-mt-24"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10"
            />

            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left side */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-anchor-placement="top-center"
                    className="flex justify-center lg:justify-start"
                >
                    <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />

                        <div className="w-[85%] h-[85%] relative">
                            <Image
                                fill
                                src="/images/a.png"
                                alt={
                                    language === "id"
                                        ? "Tentang saya"
                                        : "About me"
                                }
                                className="z-10 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div
                    className="space-y-6"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-anchor-placement="top-center"
                >
                    <span className="text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border inline-block">
                        {language === "id" ? "Tentang Saya" : "About Me"}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
                        {language === "id"
                            ? "Halo, Saya AKHMAD NAUVAL"
                            : "Hello, I'm AKHMAD NAUVAL"}
                    </h2>

                    <p className="text-gray-400 max-w-xl">
                        {language === "id"
                            ? "Saya adalah siswa kelas XI jurusan Rekayasa Perangkat Lunak di SMKN 1 Kota Pasuruan, dengan fokus pada pengembangan website modern dan interaktif. Saya tertarik mengubah ide menjadi produk digital yang fungsional, mudah digunakan, dan memiliki pengalaman pengguna yang baik. Setiap proyek menjadi kesempatan bagi saya untuk terus berkembang dan menghasilkan solusi yang bermanfaat."
                            : "I am an 11th-grade student majoring in Software Engineering at SMKN 1 Pasuruan City, focusing on the development of modern, interactive websites. I am passionate about transforming ideas into seamless, functional, and user-friendly digital products. Every project I undertake serves as an opportunity for me to grow and deliver effective solutions that create a tangible impact."}
                    </p>

                    <p className="text-gray-400 max-w-xl">
                        {language === "id"
                            ? "Saya sering menggunakan HTML, CSS, JavaScript, TypeScript, React, Next.js, dan Tailwind CSS, serta MySQL dan dasar-dasar Python. Untuk desain UI dan pengembangan antarmuka, saya menggunakan Figma dan shadcn/ui guna menciptakan pengalaman pengguna yang rapi, responsif, dan konsisten."
                            : "I frequently work with HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS, as well as MySQL and basic Python. For UI design and development, I rely on Figma and shadcn/ui to create clean, responsive, and consistent user experiences."}
                    </p>

                    {/* Skills highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuCode className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">
                                {language === "id" ? "Kode Rapi" : "Clean Code"}
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">
                                {language === "id" ? "Aplikasi Full Stack" : "Full Stack Apps"}
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <LuRocket className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">
                                {language === "id" ? "Performa" : "Performance"}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
