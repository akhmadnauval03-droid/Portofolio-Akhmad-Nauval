import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuCode, LuExternalLink, LuGithub, LuUserRound } from "react-icons/lu";
import Navbar from "@/components/navbar/Navbar";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar sectionPrefix="/" />
      <main className="min-h-screen bg-[#0d1117] text-white">
      <div className="mx-auto max-w-350 px-4 pb-6 pt-24 md:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-sm text-white/80 transition hover:border-white/20 hover:text-white"
        >
          <LuArrowLeft className="h-4 w-4" />
          Kembali
        </Link>

        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-center text-4xl font-semibold leading-tight text-white">
            {project.title}
          </h1>

          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="self-start rounded-3xl border border-white/10 bg-[#121821] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    <LuUserRound className="h-4 w-4" />
                    Role
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{project.role}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    <LuCode className="h-4 w-4" />
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.githubURL || project.liveURL) && (
                  <div className="space-y-3">
                    <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                      Link project
                    </h2>
                    <div className="flex flex-col items-start gap-3">
                      {project.githubURL && (
                        <Link
                          href={project.githubURL}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/25 hover:text-white"
                        >
                          <LuGithub className="h-4 w-4" />
                          GitHub
                        </Link>
                      )}

                      {project.liveURL && (
                        <Link
                          href={project.liveURL}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/25 hover:text-white"
                        >
                          <LuExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <div className="relative space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
                <div className="relative h-110 w-full overflow-hidden md:h-140 lg:h-160">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              </div>

              <section className="space-y-8 rounded-3xl border border-white/10 bg-[#121821] p-6">
                <div className="space-y-4">
                  <h2 className="border-b border-white/10 pb-3 text-3xl font-bold leading-tight text-white">
                    Description
                  </h2>
                  <p className="text-lg leading-relaxed text-white/70">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="border-b border-white/10 pb-3 text-3xl font-bold leading-tight text-white">
                    Fitur project
                  </h2>
                  <ul className="space-y-3 text-lg leading-relaxed text-white/70">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-[#121821] p-6">
              <h2 className="text-lg font-semibold text-white">Gambar / Screenshot</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={`${screenshot}-${index}`}
                    className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-black"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      </main>
    </>
  );
}
