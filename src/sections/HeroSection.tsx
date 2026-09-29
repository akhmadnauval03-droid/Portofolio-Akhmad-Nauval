import  DotGrid  from "@/components/hero/background";
import LinkButton from "@/components/ui/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Image  from "next/image";
export default function HeroSection() {
    return(
        <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10 scroll-mt-24">

            {/* background glow */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

            {/* background */}
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
            {/* content */}
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* leftside */}
                <div className="space-y-6">
                    <span data-aos="fade-up" className="inline-block px-4 py-1.5 rounded-full font-bold text-2xl">Hi, I'm Akhmad Nauval</span>
                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-text/90">
                        FULL STACK
                        <span className="text-primary"> WEB DEVELOPER</span>
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 max-w-lg tracking-wide">
                       Seorang Full Stack Web Developer dengan minat besar terhadap rekayasa perangkat lunak. Saya mengembangkan aplikasi web yang skalabel menggunakan Next.js, TypeScript, dan Supabase. Saya berkomitmen untuk terus belajar, menjaga arsitektur kode yang bersih, serta menghadirkan solusi digital yang fungsional.

                    </p>

                    <div className="flex items-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="600">
                        <LinkButton text="Get in touch" href="#contact" rounded icon={LuArrowRight}/>
                        <LinkButton text="View projects" href="#projects" rounded variant="outline"/>
                    </div>
                </div>
                {/* rightside */}
                <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                    <div className="relative w-85 h-85 md:w-110 md:h-100 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                        {/* image glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"/>
                        <Image fill src="/images/projek3.jpeg" alt="profile" className="z-10 object-cover rounded-full"/>
                    </div>
                </div>

            </div>
        </section>
    )
}