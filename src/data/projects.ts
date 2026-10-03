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
    "The website I created is a personal portfolio site used to introduce myself, showcase my skills, and display the projects I have worked on in the field of web development.",
    detail_description:"",
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
