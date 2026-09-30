export type Project = {
  slug: string;
  title: string;
  role: string;
  description: string;
  detailDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  features: string[];
  screenshots?: string[];
  githubURL?: string;
  liveURL?: string;
};

export const projects: Project[] = [
  {
    slug: "website-smkn-1-pasuruan",
    title: "Website SMKN 1 PASURUAN",
    role: "Web Developer",
    description:
      "Situs web SMKN 1 PASURUAN merupakan platform profil pendidikan digital interaktif yang dirancang sebagai pusat informasi resmi sekolah.",
    detailDescription:
      "Situs web ini bertujuan untuk menyajikan informasi yang akurat, meningkatkan transparansi sekolah, memperkenalkan profil sekolah kepada masyarakat, serta menjadi sarana komunikasi dua arah antara pihak sekolah dengan siswa, orang tua, alumni, calon siswa, dan masyarakat umum.",
    image: "/images/skensa.png",
    tags: ["HTML", "CSS"],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Landing page sekolah yang menampilkan profil, visi, misi, dan kegiatan utama.",
      "Tampilan responsif untuk desktop, tablet, dan mobile.",
      "Desain sederhana tapi informatif untuk memperkenalkan sekolah ke publik."
    ],
    liveURL: "https://akhmadnauval03-droid.github.io/Web-SMKN-1-PASURUAN/",
    githubURL: "https://github.com/akhmadnauval03-droid/Web-SMKN-1-PASURUAN"
  },
  {
    slug: "figma-studyline",
    title: "Figma",
    role: "UI/UX Designer",
    description:
      "Konsep desain UI/UX untuk platform pembelajaran modern yang dirancang agar kegiatan belajar menjadi lebih menarik dan terorganisasi.",
    detailDescription:
      "StudyLine menampilkan antarmuka yang bersih serta dilengkapi dengan materi pembelajaran, pelacakan progres, tantangan, dan elemen interaktif untuk menjaga motivasi pengguna sepanjang perjalanan belajar mereka. Seluruh antarmuka dirancang menggunakan Figma dengan fokus pada aspek kegunaan, konsistensi visual, dan pengalaman pengguna.",
    image: "/images/projek2.png",
    tags: ["UI/UX", "Figma", "Design"],
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing"],
    features: [
      "Mendesain alur belajar yang mudah dipahami dan lebih interaktif.",
      "Berfokus pada konsistensi visual, hierarchy, dan pengalaman pengguna.",
      "Mengembangkan konsep dashboard belajar dengan tampilan yang modern dan ramah pengguna."
    ],
    liveURL: "https://www.figma.com/design/YpFlfBw6mLpycCCePYiUbX/Untitled?node-id=0-1&t=EcQ1L82E16Sqd9LQ-1"
  },
  {
    slug: "management-siswa",
    title: "Management Siswa",
    role: "Full-stack Developer",
    description:
      "Sebuah sistem manajemen siswa berbasis web yang dikembangkan untuk membantu sekolah mengelola data siswa secara efisien.",
    detailDescription:
      "Sistem ini menyediakan fitur untuk pendaftaran siswa, pengelolaan kelas, dan sistem kedisiplinan siswa dalam satu platform terpusat.",
    image: "/images/ms.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Sistem untuk mengelola data siswa, kelas, dan pendaftaran secara terpusat.",
      "Menyediakan dashboard admin untuk memantau proses operasional sekolah.",
      "Dirancang agar mudah digunakan oleh pengelola sekolah dalam kegiatan harian."
    ],
  },
  {
    slug: "website-portofolio",
    title: "Website Portofolio",
    role: "Frontend Developer",
    description:
      "Website yang saya buat merupakan website portofolio pribadi yang digunakan untuk memperkenalkan diri, menampilkan kemampuan, serta menunjukkan project yang telah saya kerjakan di bidang pengembangan web.",
    image: "/images/projek4.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Portfolio digital untuk menampilkan pengalaman, keahlian, dan project yang telah dikerjakan.",
      "Terdiri dari section hero, project, experience, skill, dan contact yang responsif.",
      "Menggunakan desain modern dengan sentuhan animasi halus agar terlihat lebih profesional."
    ],
    liveURL: "https://portofolio-akhmadnauval.vercel.app/"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
