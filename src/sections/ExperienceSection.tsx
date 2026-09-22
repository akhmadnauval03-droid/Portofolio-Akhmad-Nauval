import SectionHeader from "@/components/ui/SectionHeader";

const experience = [
    {
        role:"Fullstack Engineer",
        company:"Independent Project",
        periode:"2023 - Present",
        description:"Build a fullstack application using Next.js, Tailwind CSS, and TypeScript.",
        technologies:["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        role:"Fullstack Engineer",
        company:"Independent Project",
        periode:"2023 - Present",
        description:"Build a fullstack application using Next.js, Tailwind CSS, and TypeScript.",
        technologies:["Next.js", "Tailwind CSS", "TypeScript"],
    }
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl
            bg-primary/10"/>
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader title="Experince that" higlight="speaks volume"/>
            </div>
        </section>
    )
}