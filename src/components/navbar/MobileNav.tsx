import Link from "next/link";
import { LuDownload } from "react-icons/lu";

interface MobileNavProps {
    links: { href: string; label: string }[];
    navOpen: boolean;
    onClose: () => void;
}

export default function MobileNav({ links, navOpen, onClose }: MobileNavProps) {
    return (
        <>
            <button
                type="button"
                aria-label="Close mobile menu"
                onClick={onClose}
                className={`fixed inset-0 z-40 lg:hidden bg-background/70 backdrop-blur-sm transition-all duration-500 ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[80%] sm:w-[60%] lg:hidden bg-surface/95 backdrop-blur-md border border-border flex flex-col items-center justify-center space-y-2 px-6 transition-all duration-500 ${navOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="flex flex-col items-center gap-3 text-center">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={onClose}
                                className="block w-full text-center py-4 px-6 rounded-lg text-lg font-medium text-text border border-transparent transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-border"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a
                    href="/documents/cv.pdf"
                    download
                    onClick={onClose}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary"
                >
                    <LuDownload aria-hidden="true" />
                    Download CV
                </a>
            </aside>
        </>
    );
}