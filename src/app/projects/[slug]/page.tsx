import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCode,
} from "react-icons/fi";
import { LuCodeXml } from "react-icons/lu";
import type { IconType } from "react-icons";

import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "@/sections/Footer";
import { projects } from "@/data/projects";

const technologyIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  Figma: SiFigma,
  Supabase: SiSupabase,
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const combinedDescription = [
    project.description,
    project.detail_description,
  ]
    .filter(Boolean)
    .join(" ");

  const projectNumber = String(projectIndex + 1).padStart(2, "0");

  return (
    <>
    <main className="relative min-h-screen overflow-hidden bg-[#0b1014] text-white">
      {/* =====================================================
          BACKGROUND EFFECT
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#20b8b5]/10 blur-[150px]" />

        <div className="absolute left-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-[#20b8b5]/5 blur-[130px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#20b8b5]/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(32,184,181,0.08),transparent_35%)]" />
      </div>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 md:px-10 md:py-12 lg:px-12">

        {/* =====================================================
            TOP NAVIGATION
        ====================================================== */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121a1f]/80 px-5 py-3 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-[#20b8b5]/40 hover:bg-[#172127] hover:text-[#20b8b5]"
          >
            <FiArrowLeft
              className="transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Projects
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#20b8b5]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Project Details
            </span>
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_auto]">

          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#20b8b5]/20 bg-[#123b3d]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#20b8b5] backdrop-blur-sm">
              <FiLayers aria-hidden="true" />
              Project {projectNumber}
            </div>

            {/* Title */}
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
              {project.description}
            </p>
          </div>

          {/* Project Number */}
          <div className="hidden select-none text-right lg:block">
            <span className="text-[100px] font-black leading-none text-white/[0.03]">
              {projectNumber}
            </span>
          </div>
        </div>

        {/* =====================================================
            PROJECT IMAGE SHOWCASE
        ====================================================== */}
        <div className="group relative">

          {/* Glow */}
          <div className="absolute -inset-1 rounded-[26px] bg-[#20b8b5]/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151e23] p-2 shadow-2xl shadow-black/30">

            {/* Browser Header */}
            <div className="flex h-11 items-center gap-2 border-b border-white/5 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <div className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-[#0d1418] px-4 sm:flex">
                <span className="truncate text-[11px] text-gray-600">
                  {project.title}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-b-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-top transition duration-700 group-hover:scale-[1.015]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1014]/30 via-transparent to-transparent opacity-70" />
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_350px]">

          {/* =====================================================
              ABOUT PROJECT
          ====================================================== */}
          <div className="rounded-3xl border border-white/10 bg-[#151e23]/80 p-7 backdrop-blur-sm md:p-9">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123b3d] text-[#20b8b5]">
                <FiCode size={20} aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#20b8b5]">
                  Overview
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Tentang Project
                </h2>
              </div>
            </div>

            <div className="mb-7 h-px w-full bg-gradient-to-r from-[#20b8b5]/40 via-white/5 to-transparent" />

            <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-gray-400 md:text-[17px]">
              {combinedDescription}
            </p>
          </div>

          {/* =====================================================
              PROJECT INFORMATION
          ====================================================== */}
          <div className="h-fit rounded-3xl border border-white/10 bg-[#151e23]/80 p-7 backdrop-blur-sm md:p-8 lg:sticky lg:top-8">

            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#20b8b5]">
                Information
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Project Details
              </h2>
            </div>

            {/* Technologies */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => {
                  const Icon =
                    technologyIcons[technology] ?? LuCodeXml;

                  return (
                    <span
                      key={technology}
                      className="group inline-flex items-center gap-2 rounded-xl border border-[#20b8b5]/10 bg-[#102a2c] px-3.5 py-2.5 text-sm font-medium text-[#20b8b5] transition-all duration-300 hover:-translate-y-1 hover:border-[#20b8b5]/40 hover:bg-[#123b3d] hover:shadow-lg hover:shadow-[#20b8b5]/10"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                      />

                      {technology}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-white/5" />

            {/* Buttons */}
            <div className="space-y-3">

              {project.liveURL && (
                <a
                  href={project.liveURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#20b8b5] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#20b8b5]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19a5a2] hover:shadow-xl hover:shadow-[#20b8b5]/20"
                >
                  <FiExternalLink
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  Live Website
                </a>
              )}

              {project.githubURL && (
                <a
                  href={project.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0e1519] px-5 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20b8b5]/40 hover:bg-[#123b3d] hover:text-[#20b8b5]"
                >
                  <FiGithub
                    className="transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  View on Github
                </a>
              )}
            </div>
          </div>
        </div>

      </section>
    </main>
    <Footer />
    <ScrollToTopButton />
    </>
  );
}