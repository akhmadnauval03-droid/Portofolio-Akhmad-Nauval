// "use client";

// import React, { useEffect, useState } from 'react';
// import Logo from './Logo';
// import Link from 'next/link';
// import LinkButton from '../ui/LinkButton';
// import { LuDownload } from "react-icons/lu";
// import { LuMenu, LuX } from "react-icons/lu";
// import MobileNav from './MobileNav';

// export const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#skills", label: "Skill" },
//     { href: "#contact", label: "Contact" },
// ];

// export default function Navbar({ sectionPrefix = "" }: { sectionPrefix?: string }) {
//     const [scrolled, setScrolled] = useState(false);
//     const [navOpen, setNavOpen] = useState(false);
//     const links = navLinks.map((link) => ({
//         ...link,
//         href: `${sectionPrefix}${link.href}`,
//     }));

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             setScrolled(scrollTop > 40);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <nav className={`fixed top-0 w-full z-60 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : "bg-transparent"}`}>
//                 <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex justify-between items-center">
//                     <Logo />

//                     <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
//                         {links.map((link, index) => (
//                             <li key={index}>
//                                 <Link href={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface">
//                                     {link.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="hidden lg:block">
//                         <LinkButton iconPosition="left" icon={LuDownload} rounded text="download CV" href="/documents/cv.pdf" download />
//                     </div>

//                     <button
//                         type="button"
//                         onClick={() => setNavOpen((open) => !open)}
//                         className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
//                     >
//                         {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
//                     </button>
//                 </div>
//             </nav>

//             <MobileNav links={links} navOpen={navOpen} onClose={() => setNavOpen(false)} />
//         </>
//     );
// }

// "use client";

// import React, { useEffect, useState, useRef } from 'react';
// import Logo from './Logo';
// import Link from 'next/link';
// import LinkButton from '../ui/LinkButton';
// import { LuDownload } from "react-icons/lu";
// import { LuMenu, LuX } from "react-icons/lu";
// import MobileNav from './MobileNav';
// import { LanguageProvider } from '../Bahasa/LanguageProvider';

// export const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#skill", label: "Skill" },
//     { href: "#contact", label: "Contact" },
// ];

// export default function Navbar({ sectionPrefix = "" }: { sectionPrefix?: string }) {
//     const [scrolled, setScrolled] = useState(false);
//     const [navOpen, setNavOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState("#home");
    
//     // Ref untuk menandai apakah user sedang mengklik menu (mencegah kalkulasi scroll saat smooth scrolling)
//     const isClickingRef = useRef(false);

//     const links = navLinks.map((link) => ({
//         ...link,
//         href: `${sectionPrefix}${link.href}`,
//     }));

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             setScrolled(scrollTop > 40);

//             // Jika sedang proses klik menu, jangan jalankan deteksi scroll otomatis agar tidak bergeser bertahap
//             if (isClickingRef.current) return;

//             const sections = navLinks.map((link) => link.href.substring(1));
//             const scrollPosition = scrollTop + 200;

//             for (const sectionId of sections) {
//                 const element = document.getElementById(sectionId);
//                 if (element) {
//                     const top = element.offsetTop;
//                     const height = element.offsetHeight;

//                     if (scrollPosition >= top && scrollPosition < top + height) {
//                         setActiveSection(`#${sectionId}`);
//                         break;
//                     }
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const handleLinkClick = (hash: string) => {
//         // 1. Langsung ubah state aktif secara instan
//         setActiveSection(hash);
        
//         // 2. Kunci state agar tidak berubah-ubah saat halaman melakukan smooth scroll melewati section lain
//         isClickingRef.current = true;
//         setTimeout(() => {
//             isClickingRef.current = false;
//         }, 800); // Durasi kunci (sesuaikan dengan kecepatan smooth scroll browser)
//     };

//     return (
//         <>
//             <nav className={`fixed top-0 w-full z-60 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-surface/80 border-b border-border shadow-sm" : "bg-transparent"}`}>
//                 <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex justify-between items-center">
//                     <Logo />

//                     <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
//                         {links.map((link, index) => {
//                             const cleanHash = link.href.replace(sectionPrefix, "");
//                             const isActive = activeSection === cleanHash;

//                             return (
//                                 <li key={index}>
//                                     <Link 
//                                         href={link.href} 
//                                         onClick={() => handleLinkClick(cleanHash)}
//                                         // PENTING: Hapus kata 'transition-all' pada background aktif 
//                                         // atau ubah durasinya menjadi 0 agar langsung berpindah tanpa efek geser
//                                         className={`px-4 py-2 rounded-full text-sm font-medium ${
//                                             isActive 
//                                                 ? "bg-transparent text-primary shadow-sm transition-none" // 'transition-none' membuat perpindahan instan
//                                                 : "text-gray-300 hover:text-primary hover:bg-surface transition-colors duration-200"
//                                         }`}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>

//                     <div className="hidden lg:block">
//                         <LinkButton iconPosition="left" icon={LuDownload} rounded text="download CV" href="/documents/cv.pdf" download />
//                     </div>

//                     <button
//                         type="button"
//                         onClick={() => setNavOpen((open) => !open)}
//                         className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
//                     >
//                         {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
//                     </button>
//                 </div>
//             </nav>

//             <MobileNav links={links} navOpen={navOpen} onClose={() => setNavOpen(false)} />
//         </>
//     );
// }


"use client";

import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useLanguage } from "../Bahasa/LanguageProvider";

export const navLinks = [
  { href: "#home", label: { id: "Beranda", en: "Home" } },
  { href: "#about", label: { id: "Tentang", en: "About" } },
  { href: "#projects", label: { id: "Proyek", en: "Projects" } },
  { href: "#skill", label: { id: "Keahlian", en: "Skills" } },
  { href: "#contact", label: { id: "Kontak", en: "Contact" } },
];

export default function Navbar({
  sectionPrefix = "",
}: {
  sectionPrefix?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const isClickingRef = useRef(false);

  const { language, setLanguage } = useLanguage();

  const links = navLinks.map((link) => ({
    ...link,
    href: `${sectionPrefix}${link.href}`,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 40);

      if (isClickingRef.current) return;

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = scrollTop + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (hash: string) => {
    setActiveSection(hash);
    setNavOpen(false);
    isClickingRef.current = true;

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-surface/80 border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex justify-between items-center">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
            {links.map((link) => {
              const cleanHash = link.href.replace(sectionPrefix, "");
              const isActive = activeSection === cleanHash;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(cleanHash)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isActive
                        ? "bg-transparent text-primary shadow-sm transition-none"
                        : "text-gray-300 hover:text-primary hover:bg-surface transition-colors duration-200"
                    }`}
                  >
                    {link.label[language]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/* Tombol ganti bahasa */}
            <div className="flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                aria-label="Ganti ke Bahasa Indonesia"
                aria-pressed={language === "id"}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "id"
                    ? "bg-primary text-black"
                    : "text-text hover:text-primary"
                }`}
              >
                ID
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
                aria-pressed={language === "en"}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-primary text-black"
                    : "text-text hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            <div className="hidden lg:block">
              <LinkButton
                iconPosition="left"
                icon={LuDownload}
                rounded
                text={
                  language === "id"
                    ? "Unduh CV"
                    : "Download CV"
                }
                href="/documents/cv.pdf"
                download
              />
            </div>

            <button
              type="button"
              onClick={() => setNavOpen((open) => !open)}
              aria-label={navOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={navOpen}
              className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
            >
              {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        links={links}
        navOpen={navOpen}
        onClose={() => setNavOpen(false)}
      />
    </>
  );
}
