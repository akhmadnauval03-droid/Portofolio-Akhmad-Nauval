import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectCardProps {
    slug?: string,
    title: string,
    description: string,
    liveURL?: string,
    githubURL?: string,
    image: string,
    tags: string[]
}

export default function ProjectCard({
    slug,
    title,
    description,
    liveURL,
    githubURL,
    image,
    tags,
}: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
            <div className="relative h-60 overflow-hidden md:h-64">
                <Image src={image} alt={title} fill className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">
                        {title}
                    </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag} className="text px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex items-center gap-4">
                        {slug && (
                        <Link
                            href={`/projects/${slug}`}
                            className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-9 py-2.5 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary"
                        >
                            Detail
                        </Link>
                    )}

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
        </div>
    )
}