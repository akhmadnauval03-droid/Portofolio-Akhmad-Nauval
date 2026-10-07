"use client";

import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/project/ProjectCard";
import { supabase } from "@/lib/supabase";

const categoryOptions = [
    { value: "all", label: "Semua" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "iot", label: "IoT" },
    { value: "ui/ux", label: "UI/UX" },
] as const;

type CategoryFilter = (typeof categoryOptions)[number]["value"];

type Project = {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    detail_description: string;
    image: string;
    tags: string[];
    technologies: string[];
    githubURL?: string;
    liveURL?: string;
};

export default function ProjectSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] =
        useState<CategoryFilter>("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            if (!supabase) {
                console.error("Supabase belum terhubung.");
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from("Projects")
                .select("*")
                .order("id", { ascending: true });

            if (error) {
                console.error("Gagal mengambil data Projects:", error);
                setLoading(false);
                return;
            }

            const formattedProjects = (data || []).map((project) => ({
            ...project,

            tags: Array.isArray(project.tags)
            ? project.tags
            : typeof project.tags === "string"
                ? project.tags
                    .split(",")
                    .map((tag: string) => tag.trim())
                    .filter(Boolean)
                : [],

            technologies: Array.isArray(project.technologies)
            ? project.technologies
            : typeof project.technologies === "string"
                ? project.technologies
                    .split(",")
                    .map((tech: string) => tech.trim())
                    .filter(Boolean)
                : [],
            }));

            setProjects(formattedProjects);
            setLoading(false);
        }

        fetchProjects();
    }, []);

    const filteredProjects = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesCategory =
                activeCategory === "all" ||
                project.category === activeCategory;

            const searchableText = [
                project.title,
                project.description,
                ...(Array.isArray(project.tags) ? project.tags : []),
            ]
                .join(" ")
                .toLowerCase();

            const matchesQuery =
                !query || searchableText.includes(query);

            return matchesCategory && matchesQuery;
        });
    }, [projects, searchQuery, activeCategory]);

    return (
        <section
            id="projects"
            className="relative scroll-mt-24 py-24"
        >
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="mx-auto w-[90%] mx-w-6xl space-y-12">
                <SectionHeader
                    title="Some of my recent"
                    higlight="word"
                    badge="Projects"
                    description="a selection of projects showcasing my ability to design, build and scale modern fullstack application."
                />

                <div className="flex flex-col gap-4">
                    {/* Search */}
                    <div className="w-full max-w-md">
                        <label
                            htmlFor="project-search"
                            className="sr-only"
                        >
                            Search projects...
                        </label>

                        <div className="relative">
                            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-text-muted" />

                            <input
                                id="project-search"
                                type="search"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search projects..."
                                className="w-full rounded-xl border border-border bg-surface/80 py-3 pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="flex flex-wrap gap-2">
                        {categoryOptions.map((option) => {
                            const isActive =
                                activeCategory === option.value;

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(option.value)
                                    }
                                    className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? "border-primary bg-primary text-black"
                                            : "border-border bg-surface/80 text-text-muted hover:border-primary/40 hover:text-primary"
                                    }`}
                                >
                                    {option.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center text-sm text-text-muted">
                        Memuat proyek...
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center text-sm text-text-muted">
                        {searchQuery
                            ? `Tidak ada proyek yang sesuai dengan pencarian "${searchQuery}" pada kategori ${
                                  activeCategory === "all"
                                      ? "Semua"
                                      : activeCategory.toUpperCase()
                              }.`
                            : `Tidak ada proyek dalam kategori ${
                                  activeCategory === "all"
                                      ? "Semua"
                                      : activeCategory.toUpperCase()
                              }.`}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={`${project.id}-${project.slug}`}
                                data-aos="fade-right"
                                data-aos-delay={index * 100}
                                data-aos-anchor-placement="top-center"
                            >
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

// "use client";

// import { useMemo, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import SectionHeader from "@/components/ui/SectionHeader";
// import ProjectCard from "@/components/project/ProjectCard";
// import { projects } from "@/data/projects";
// import { supabase } from "@/lib/supabase"

// const categoryOptions = [
//     { value: "all", label: "Semua" },
//     { value: "web", label: "Web" },
//     { value: "mobile", label: "Mobile" },
//     { value: "iot", label: "IoT" },
//     { value: "ui/ux", label: "UI/UX" },
// ] as const;

// type CategoryFilter = (typeof categoryOptions)[number]["value"];

// export default function ProjectSection() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

//     const filteredProjects = useMemo(() => {
//         const query = searchQuery.trim().toLowerCase();

//         return projects.filter((project) => {
//             const matchesCategory =
//                 activeCategory === "all" || project.category === activeCategory;

//             const searchableText = [
//                 project.title,
//                 project.description,
//                 ...project.tags,
//             ]
//                 .join(" ")
//                 .toLowerCase();

//             const matchesQuery = !query || searchableText.includes(query);

//             return matchesCategory && matchesQuery;
//         });
//     }, [searchQuery, activeCategory]);

//     return (
//         <section id="projects" className="py-24 relative scroll-mt-24">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
//             <div className="w-[90%] mx-w-6xl mx-auto space-y-12">
//                 <SectionHeader
//                     title="Some of my recent"
//                     higlight="word"
//                     badge="Projects"
//                     description="a selection of projects showcasing my ability to design, build and scale modern fullstack application."
//                 />

//                 <div className="flex flex-col gap-4">
//                     <div className="max-w-md w-full">
//                         <label htmlFor="project-search" className="sr-only">
//                             Search projects...
//                         </label>
//                         <div className="relative">
//                             <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-text-muted" />
//                             <input
//                                 id="project-search"
//                                 type="search"
//                                 value={searchQuery}
//                                 onChange={(event) => setSearchQuery(event.target.value)}
//                                 placeholder="Search projects..."
//                                 className="w-full rounded-xl border border-border bg-surface/80 py-3 pl-11 pr-4 text-sm text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
//                             />
//                         </div>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                         {categoryOptions.map((option) => {
//                             const isActive = activeCategory === option.value;

//                             return (
//                                 <button
//                                     key={option.value}
//                                     type="button"
//                                     onClick={() => setActiveCategory(option.value)}
//                                     className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
//                                         isActive
//                                             ? "border-primary bg-primary text-black"
//                                             : "border-border bg-surface/80 text-text-muted hover:border-primary/40 hover:text-primary"
//                                     }`}
//                                 >
//                                     {option.label}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {filteredProjects.length === 0 ? (
//                     <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center text-sm text-text-muted">
//                         {searchQuery
//                             ? `Tidak ada proyek yang sesuai dengan pencarian "${searchQuery}" pada kategori ${activeCategory === "all" ? "Semua" : activeCategory.toUpperCase()}.`
//                             : `Tidak ada proyek dalam kategori ${activeCategory === "all" ? "Semua" : activeCategory.toUpperCase()}.`}
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
//                         {filteredProjects.map((project, index) => (
//                             <div
//                                 key={`${project.title}-${index}`}
//                                 data-aos="fade-right"
//                                 data-aos-delay={index * 100}
//                                 data-aos-anchor-placement="top-center"
//                             >
//                                 <ProjectCard {...project} />
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }