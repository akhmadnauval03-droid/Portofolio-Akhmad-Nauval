"use client";

import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import LinkButton from '../ui/LinkButton';
import { LuDownload } from "react-icons/lu";
import { LuMenu, LuX } from "react-icons/lu";
import MobileNav from './MobileNav';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skill" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar({ sectionPrefix = "" }: { sectionPrefix?: string }) {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const links = navLinks.map((link) => ({
        ...link,
        href: `${sectionPrefix}${link.href}`,
    }));

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full z-60 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : "bg-transparent"}`}>
                <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex justify-between items-center">
                    <Logo />

                    <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:block">
                        <LinkButton iconPosition="left" icon={LuDownload} rounded text="download CV" href="/documents/cv.pdf" download />
                    </div>

                    <button
                        type="button"
                        onClick={() => setNavOpen((open) => !open)}
                        className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
                    >
                        {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                    </button>
                </div>
            </nav>

            <MobileNav links={links} navOpen={navOpen} onClose={() => setNavOpen(false)} />
        </>
    );
}