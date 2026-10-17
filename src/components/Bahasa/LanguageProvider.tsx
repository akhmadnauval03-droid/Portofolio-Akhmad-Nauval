
// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";

// type Language = "id" | "en";

// type LanguageContextType = {
//   language: Language;
//   setLanguage: (language: Language) => void;
// };

// const LanguageContext = createContext<LanguageContextType | null>(null);

// export function LanguageProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [language, setLanguageState] = useState<Language>("en");

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("language");

//     if (savedLanguage === "id" || savedLanguage === "en") {
//       setLanguageState(savedLanguage);
//     }
//   }, []);

//   const setLanguage = (value: Language) => {
//     setLanguageState(value);
//     localStorage.setItem("language", value);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error(
//       "useLanguage must be used inside LanguageProvider"
//     );
//   }

//   return context;
// }

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "id" | "en";

const translations = {
  id: {
    hero: {
      greeting: "Halo, saya",
      role: "Full Stack Web Developer",
      description:
        "Saya membangun aplikasi web yang modern, responsif, dan mudah digunakan.",
      projects: "Lihat Proyek",
      contact: "Hubungi Saya",
    },
    about: {
      title: "Tentang Saya",
      description:
        "Saya adalah siswa kelas XI Rekayasa Perangkat Lunak yang tertarik pada pengembangan website dan aplikasi.",
    },
    skills: {
      title: "Keahlian",
      description: "Teknologi dan tools yang saya gunakan.",
    },
    projects: {
      title: "Proyek Saya",
      description: "Beberapa proyek yang telah saya kerjakan.",
      search: "Cari proyek...",
      all: "Semua",
      web: "Web",
      mobile: "Mobile",
      iot: "IoT",
      uiux: "UI/UX",
      view: "Lihat Detail",
      empty: "Proyek tidak ditemukan.",
    },
    contact: {
      title: "Hubungi Saya",
      description: "Silakan hubungi saya untuk berdiskusi atau bekerja sama.",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      send: "Kirim Pesan",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
    },
    login: {
      title: "Login Admin",
      description: "Masuk untuk mengelola proyek portofolio.",
      email: "Alamat Email",
      password: "Kata Sandi",
      submit: "Masuk",
      loading: "Memproses...",
      back: "Kembali ke Website",
      required: "Email dan kata sandi wajib diisi.",
      invalid: "Email atau kata sandi tidak valid.",
    },
    admin: {
      title: "Dashboard Admin",
      subtitle: "Kelola proyek portofolio kamu.",
      total: "Total Proyek",
      web: "Proyek Web",
      technology: "Teknologi",
      search: "Cari proyek...",
      filter: "Semua Kategori",
      add: "Tambah Proyek",
      edit: "Edit",
      delete: "Hapus",
      save: "Simpan",
      cancel: "Batal",
      logout: "Keluar",
      noProjects: "Belum ada proyek.",
      confirmDelete: "Yakin ingin menghapus proyek ini?",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Web Developer",
      description:
        "I build modern, responsive, and user-friendly web applications.",
      projects: "View Projects",
      contact: "Get in Touch",
    },
    about: {
      title: "About Me",
      description:
        "I am an 11th-grade Software Engineering student interested in website and application development.",
    },
    skills: {
      title: "Skills",
      description: "Technologies and tools I use.",
    },
    projects: {
      title: "My Projects",
      description: "Some of the projects I have worked on.",
      search: "Search projects...",
      all: "All",
      web: "Web",
      mobile: "Mobile",
      iot: "IoT",
      uiux: "UI/UX",
      view: "View Details",
      empty: "No projects found.",
    },
    contact: {
      title: "Get in Touch",
      description: "Feel free to contact me to discuss or collaborate.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    footer: {
      rights: "All rights reserved.",
    },
    login: {
      title: "Admin Login",
      description: "Sign in to manage your portfolio projects.",
      email: "Email Address",
      password: "Password",
      submit: "Sign In",
      loading: "Processing...",
      back: "Back to Website",
      required: "Email and password are required.",
      invalid: "Invalid email or password.",
    },
    admin: {
      title: "Admin Dashboard",
      subtitle: "Manage your portfolio projects.",
      total: "Total Projects",
      web: "Web Projects",
      technology: "Technologies",
      search: "Search projects...",
      filter: "All Categories",
      add: "Add Project",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      logout: "Log Out",
      noProjects: "No projects yet.",
      confirmDelete: "Are you sure you want to delete this project?",
    },
  },
} as const;

type TranslationDictionary = (typeof translations)["en"];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "id" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }

    setReady(true);
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    localStorage.setItem("language", value);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationDictionary,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}