export type ProjectCategory = "web" | "mobile" | "iot" | "ui/ux";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  detail_description: string;
  image: string;
  tags: string[];
  technologies: string[];
  githubURL?: string;
  liveURL?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "website-smkn-1-pasuruan",
    title: "Website SMKN 1 PASURUAN",
    category: "web",
    description:
    "The SMKN 1 Pasuruan website is an interactive digital educational profile platform designed to serve as the school's official information hub.",
    detail_description:
    "This website aims to provide accurate information, enhance school transparency, introduce the school's profile to the public, and serve as a two-way communication channel between the school and students, parents, alumni, prospective students, and the general public.",
    image: "/images/skensa.png",
    tags: ["HTML", "CSS"],
    technologies: ["HTML", "CSS"],
    liveURL: "https://akhmadnauval03-droid.github.io/Web-SMKN-1-PASURUAN/",
    githubURL: "https://github.com/akhmadnauval03-droid/Web-SMKN-1-PASURUAN"
  },
  {
    id: 2,
    slug: "figma-studyline",
    title: "Figma",
    category: "ui/ux",
    description:
    "A UI/UX design concept for a modern learning platform, designed to make learning activities more engaging and organized.",
    detail_description:
    "StudyLine features a clean interface and incorporates learning materials, progress tracking, challenges, and interactive elements to maintain user motivation throughout their learning journey. The entire interface was designed using Figma, with a focus on usability, visual consistency, and user experience.",
    image: "/images/projek2.png",
    tags: ["UI/UX", "Figma", "Design"],
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing"],
    liveURL: "https://www.figma.com/design/YpFlfBw6mLpycCCePYiUbX/Untitled?node-id=0-1&t=EcQ1L82E16Sqd9LQ-1"
  },
  {
    id: 3,
    slug: "management-siswa",
    title: "Management Siswa",
    category: "web",
    description:
    "A web-based student management system developed to help schools manage student data efficiently.",
    detail_description:
    "This system provides features for student registration, class management, and a student discipline system within a single, centralized platform.",
    image: "/images/ms.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: 4,
    slug: "website-portofolio",
    title: "Website Portofolio",
    category: "web",
    description:
    "A personal portfolio website showcasing a profile, skills, and various web development projects.",
    detail_description:"I created this personal portfolio website to introduce myself as a Full-Stack Web Developer and to showcase my skills and completed projects. The site features key sections such as Home, About, Projects, Skills, and Contact. In the Projects section, visitors can view various projects—including the SMKN 1 Pasuruan website, Figma UI/UX designs, a student management system, and portfolio websites. Each project entry includes information on the technologies used, along with specific details and relevant links. The site also incorporates search and category filtering features to make finding information easier. This portfolio was developed using Next.js, TypeScript, React, and Tailwind CSS, featuring a modern, responsive design. It also highlights the various technologies and tools I use, such as HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Python, TypeScript, Git, GitHub, Figma, MySQL, and Supabase.",
    image: "/images/projek4.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveURL: "https://portofolio-akhmadnauval.vercel.app/",
    githubURL: " https://github.com/akhmadnauval03-droid/Portofolio-Akhmad-Nauval"
  },
  
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
