import SectionHeader from "@/components/ui/SectionHeader"
import ProjectCard from "@/components/project/ProjectCard"

const projects = [
    {
        title: "Website SMKN 1 PASURUAN",
        description: "The SMKN 1 PASURUAN website is an interactive digital educational profile platform designed as the official school information center. This website aims to provide accurate information, increase school transparency, introduce the school profile to the public, and serve as a two-way communication medium between the school and students, parents, alumni, prospective students, and the general public.",
        image: "/images/projek1.png",
        tags: ["HTML", "CSS"],
        liveURL: " https://akhmadnauval03-droid.github.io/Web-SMKN-1-PASURUAN/",
        githubURL: "https://github.com/akhmadnauval03-droid/Web-SMKN-1-PASURUAN"
    },
    {
        title: "Figma",
        description: "A UI/UX design concept for a modern learning platform designed to make studying more engaging and organized. StudyLine features a clean interface with learning materials, progress tracking, challenges, and interactive elements to help users stay motivated throughout their learning journey. The entire interface was designed in Figma with a focus on usability, visual consistency, and user experience.",
        image: "/images/projek2.png",
        tags: ["UI/UX", "Figma", "Design"],
        liveURL: "https://www.figma.com/design/YpFlfBw6mLpycCCePYiUbX/Untitled?node-id=0-1&t=EcQ1L82E16Sqd9LQ-1", 
    },
    {
        title: "Management Siswa",
        description: "A web-based student management system developed to help schools efficiently manage student data. The system provides features for student registration, class management, and a student disciplinary system within a single, centralized platform.",
        image: "/images/ms.png",
        tags: ["Next.js","TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
]

export default function ProjectSection() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl
            bg-primary/10"/>
            <div className="w-[90%] mx-w-6xl mx-auto space-y-12">
                <SectionHeader
                title="Some of my recent"
                higlight="word"
                badge="Projects"
                description="a selection of projects showcasing my ability to design, build and scale modern fullstack application." />

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gp-10">
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-right"data-aos-delay={index * 100}data-aos-anchor-placement="top-center">
                        <ProjectCard {...project}/>
                    </div>
                ))}
             </div>
            </div>
        </section>
    )

}