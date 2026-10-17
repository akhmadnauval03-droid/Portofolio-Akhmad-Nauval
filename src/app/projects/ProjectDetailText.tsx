
"use client";

import { useLanguage } from "@/components/Bahasa/LanguageProvider";

type ProjectDetailTextProps = {
    id: string;
    en: string;
};

export default function ProjectDetailText({
    id,
    en,
}: ProjectDetailTextProps) {
    const { language } = useLanguage();

    return <>{language === "id" ? id : en}</>;
}
