import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectCardProps {
    title: string,
    description: string,
    liveURL?: string,
    githubURL?: string,
    image: string,
    tags: string[]
}

export default function ProjectCard({
    title,
    description,
    liveURL,
    githubURL,
    image,
    tags,
}: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
            {/* image */}
            <div className="relative h-60 overflow-hidden md:h-64">
                <Image src={image} alt={title} fill className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* contant */}
            <div className="p-6 space-y-5">
                <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag} className="text px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border">{tag}</span>
                    ))}
                </div>
                {/* links */}
                <div className="flex items-center gap-4 pt-3">
                    {liveURL && (
                        <Link href={liveURL} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition">
                            <LuExternalLink className="w-4 h-4" />
                            Live
                        </Link>
                    )}
                    {githubURL && (
                        <Link href={githubURL} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition">
                            <LuGithub className="w-4 h-4" />
                            Github
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}