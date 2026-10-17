// import SectionHeader from "@/components/ui/SectionHeader";
// import {
//   SiCss,
//   SiFigma,
//   SiGit,
//   SiGithub,
//   SiHtml5,
//   SiJavascript,
//   SiMysql,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiPython,
//   SiReact,
//   SiSupabase,
//   SiTailwindcss,
//   SiTypescript,
// } from "react-icons/si";
// import type { IconType } from "react-icons";

// const skills = [
//   {
//     category: "Frontend",
//     items: [
//       { name: "HTML", icon: SiHtml5 },
//       { name: "CSS", icon: SiCss },
//       { name: "JavaScript", icon: SiJavascript },
//       { name: "React", icon: SiReact },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "Tailwind", icon: SiTailwindcss },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [{ name: "Node.js", icon: SiNodedotjs }],
//   },
//   {
//     category: "Programming",
//     items: [
//       { name: "Python", icon: SiPython },
//       { name: "TypeScript", icon: SiTypescript },
//       { name: "JavaScript", icon: SiJavascript },
//     ],
//   },
//   {
//     category: "Tools",
//     items: [
//       { name: "Git", icon: SiGit },
//       { name: "GitHub", icon: SiGithub },
//       { name: "Figma", icon: SiFigma },
//     ],
//   },
//   {
//     category: "Database",
//     items: [
//       { name: "MySQL", icon: SiMysql },
//       { name: "Supabase", icon: SiSupabase },
//     ],
//   },
// ] as Array<{
//   category: string;
//   items: Array<{ name: string; icon: IconType }>;
// }>;

// export default function SkillSection() {
//   return (
//     <section id="skills" className="py-24 scroll-mt-24">
//       <div className="w-[90%] mx-w-6xl mx-auto space-y-12">
//         <SectionHeader
//           title="My"
//           higlight="Skill"
//           badge="Skill"
//           description="The technologies and tools I use in website development."
//         />

//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           data-aos-anchor-placement="top-center"
//           className="grid md:grid-cols-2 gap-6"
//         >
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-surface p-6 rounded-2xl border border-slate-800 hover:border-primary transition"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-text">
//                 {skill.category}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {skill.items.map((item, i) => {
//                   const Icon = item.icon;

//                   return (
//                     <span
//                       key={i}
//                       className="group inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
//                     >
//                       <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6" />
//                       {item.name}
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import SectionHeader from "@/components/ui/SectionHeader";
// import {
//   SiCss,
//   SiGit,
//   SiGithub,
//   SiHtml5,
//   SiJavascript,
//   SiMysql,
//   SiNextdotjs,
//   SiReact,
//   SiSupabase,
//   SiTailwindcss,
//   SiTypescript,
//   SiFigma,
//   SiNodedotjs
// } from "react-icons/si";
// import type { IconType } from "react-icons";

// const skills = [
//   {
//     category: "Frontend",
//     items: [
//       { name: "HTML", icon: SiHtml5 },
//       { name: "CSS", icon: SiCss },
//       { name: "JavaScript", icon: SiJavascript },
//       { name: "TypeScript", icon: SiTypescript },
//       { name: "React", icon: SiReact },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       { name: "Node.js", icon: SiNodedotjs },
//     ],
//   },
//   {
//     category: "Database",
//     items: [
//       { name: "Supabase", icon: SiSupabase },
//       { name: "MySQL", icon: SiMysql },
//     ],
//   },
//   {
//     category: "Tools",
//     items: [
//       { name: "Git", icon: SiGit },
//       { name: "GitHub", icon: SiGithub },
//       { name: "Figma", icon: SiFigma },
//     ],
//   },
// ] as Array<{
//   category: string;
//   items: Array<{ name: string; icon: IconType }>;
// }>;

// export default function SkillSection() {
//   return (
//     <section id="skill" className="py-24 scroll-mt-24">
//       <div className="w-[90%] max-w-6xl mx-auto space-y-12">
//         <SectionHeader
//           title="My"
//           higlight="Skill"
//           badge="Skill"
//           description="Technologies and tools I use to build modern full-stack web applications."
//         />

//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           data-aos-anchor-placement="top-center"
//           className="grid md:grid-cols-2 gap-6"
//         >
//           {skills.map((skill) => (
//             <div
//               key={skill.category}
//               className="bg-surface p-6 rounded-2xl border border-slate-800 hover:border-primary transition duration-300"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-text">
//                 {skill.category}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {skill.items.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <span
//                       key={item.name}
//                       className="group inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
//                     >
//                       <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6" />
//                       {item.name}
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/components/Bahasa/LanguageProvider";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skills = [
  {
    category: { id: "Frontend", en: "Frontend" },
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: { id: "Backend", en: "Backend" },
    items: [{ name: "Node.js", icon: SiNodedotjs }],
  },
  {
    category: { id: "Basis Data", en: "Database" },
    items: [
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: { id: "Alat Pengembangan", en: "Development Tools" },
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
] as Array<{
  category: { id: string; en: string };
  items: Array<{ name: string; icon: IconType }>;
}>;

export default function SkillSection() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <section id="skill" className="py-24 scroll-mt-24">
      <div className="w-[90%] max-w-6xl mx-auto space-y-12">
        <SectionHeader
          title={isId ? "Keahlian" : "My"}
          higlight={isId ? "Saya" : "Skills"}
          badge={isId ? "Keahlian" : "Skills"}
          description={
            isId
              ? "Teknologi dan tools yang saya gunakan untuk membangun aplikasi web full-stack modern."
              : "Technologies and tools I use to build modern full-stack web applications."
          }
        />

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((skill) => (
            <div
              key={skill.category.en}
              className="bg-surface p-6 rounded-2xl border border-slate-800 hover:border-primary transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-text">
                {skill.category[language]}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={item.name}
                      className="group inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
