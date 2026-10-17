// "use client";
// import  DotGrid  from "@/components/hero/background";
// import LinkButton from "@/components/ui/LinkButton";
// import { LuArrowRight } from "react-icons/lu";
// import Image  from "next/image";
// import AnimatedBackground from "@/components/hero/bg2";
// import { useLanguage } from "@/components/Bahasa/LanguageProvider";
// export default function HeroSection() {
//      const { language, t } = useLanguage();
//     return(
//         <section id="home" className="relative isolate min-h-screen overflow-hidden flex items-center pt-30 py-10 scroll-mt-24">

//             {/* background glow */}
//             <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

//             {/* background */}
//             <AnimatedBackground />
//             <div className="inset-0 absolute">
//                 <DotGrid
//                 dotSize={2}
//                 gap={15}
//                 baseColor="#2F293A"
//                 activeColor="#20b2a6"
//                 proximity={120}
//                 shockRadius={250}
//                 shockStrength={5}
//                 resistance={750}
//                 returnDuration={1.5}
//             />
//             </div>
//             {/* content */}
//             <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//                 {/* leftside */}
//                 <div className="space-y-6">
//                     <div data-aos="fade-up" className="flex items-center gap-4">
//                         <span className="block h-px w-12 bg-white/80" />
//                         <span className="inline-block font-bold text-2xl text-white">Hi, I'm Akhmad Nauval</span>
//                     </div>
//                     <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-text/90">
//                         FULL STACK
//                         <span className="text-primary"> WEB DEVELOPER</span>
//                     </h1>

//                     <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 max-w-lg tracking-wide">
//                         I am a Full Stack Web Developer with a strong passion for software engineering. I develop scalable web applications using Next.js, TypeScript, and Supabase. I am committed to continuous learning, maintaining clean code architecture, and delivering functional digital solutions.

//                     </p>

//                     <div className="flex items-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="600">
//                         <LinkButton text="Get in touch" href="#contact" rounded icon={LuArrowRight}/>
//                         <LinkButton text="View projects" href="#projects" rounded variant="outline"/>
//                     </div>
//                 </div>
//                 {/* rightside */}
//                 <div className="flex justify-center lg:justify-end" data-aos="fade-left">
//                     <div className="relative w-85 h-85 md:w-110 md:h-100 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
//                         {/* image glow */}
//                         <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"/>
//                         <Image fill src="/images/projek3.jpeg" alt="profile" className="z-10 object-cover rounded-full"/>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }


"use client";

import DotGrid from "@/components/hero/background";
import LinkButton from "@/components/ui/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import AnimatedBackground from "@/components/hero/bg2";
import { useLanguage } from "@/components/Bahasa/LanguageProvider";

export default function HeroSection() {
    const { language, t } = useLanguage();

    return (
        <section
            id="home"
            className="relative isolate min-h-screen overflow-hidden flex items-center pt-30 py-10 scroll-mt-24"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

            {/* Background */}
            <AnimatedBackground />

            <div className="inset-0 absolute">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#2F293A"
                    activeColor="#20b2a6"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                {/* Left side */}
                <div className="space-y-6">
                    <div
                        data-aos="fade-up"
                        className="flex items-center gap-4"
                    >
                        <span className="block h-px w-12 bg-white/80" />

                        <span className="inline-block font-bold text-2xl text-white">
                            {language === "id"
                                ? "Halo, saya Akhmad Nauval"
                                : "Hi, I'm Akhmad Nauval"}
                        </span>
                    </div>

                    <h1
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-text/90"
                    >
                        FULL STACK
                        <span className="text-primary">
                            {" "}WEB DEVELOPER
                        </span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="text-gray-400 max-w-lg tracking-wide"
                    >
                        {language === "id"
                            ? "Saya adalah Full Stack Web Developer yang memiliki minat besar dalam rekayasa perangkat lunak. Saya mengembangkan aplikasi web yang skalabel menggunakan Next.js, TypeScript, dan Supabase. Saya berkomitmen untuk terus belajar, menjaga struktur kode tetap rapi, dan menghasilkan solusi digital yang fungsional."
                            : "I am a Full Stack Web Developer with a strong passion for software engineering. I develop scalable web applications using Next.js, TypeScript, and Supabase. I am committed to continuous learning, maintaining clean code architecture, and delivering functional digital solutions."}
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex items-center gap-4 pt-2"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <LinkButton
                            text={t.hero.contact}
                            href="#contact"
                            rounded
                            icon={LuArrowRight}
                        />

                        <LinkButton
                            text={t.hero.projects}
                            href="#projects"
                            rounded
                            variant="outline"
                        />
                    </div>
                </div>

                {/* Right side */}
                <div
                    className="flex justify-center lg:justify-end"
                    data-aos="fade-left"
                >
                    <div className="relative w-85 h-85 md:w-110 md:h-100 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">

                        {/* Image glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

                        <Image
                            fill
                            src="/images/projek3.jpeg"
                            alt={
                                language === "id"
                                    ? "Foto profil Akhmad Nauval"
                                    : "Akhmad Nauval's profile photo"
                            }
                            className="z-10 object-cover rounded-full"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
