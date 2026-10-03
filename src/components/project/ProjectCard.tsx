import Image from "next/image";
import Link from "next/link";
import { FiLayers, FiTag } from "react-icons/fi";
import {
    SiCss,
    SiFigma,
    SiHtml5,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import type { IconType } from "react-icons";

const tagIcons: Record<string, IconType> = {
    HTML: SiHtml5,
    CSS: SiCss,
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    Figma: SiFigma,
    "UI/UX": FiLayers,
    Design: FiLayers,
};

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

                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => {
                        const Icon = tagIcons[tag] ?? FiTag;

                        return (
                            <span
                                key={tag}
                                className="group inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6"
                                />
                                {tag}
                            </span>
                        );
                    })}
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