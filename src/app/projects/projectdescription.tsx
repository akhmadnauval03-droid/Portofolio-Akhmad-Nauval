
// "use client";

// import { useLanguage } from "@/components/Bahasa/LanguageProvider";

// type Props = {
//   descriptionId?: string | null;
//   descriptionEn?: string | null;
//   fallback?: string | null;
// };

// export default function ProjectDescription({
//   descriptionId,
//   descriptionEn,
//   fallback,
// }: Props) {
//   const { language } = useLanguage();

//   const description =
//     language === "id"
//       ? descriptionId || fallback
//       : descriptionEn || fallback;

//   return <>{description || ""}</>;
// }



"use client";

import { useLanguage } from "@/components/Bahasa/LanguageProvider";

type Props = {
  descriptionId?: string | null;
  descriptionEn?: string | null;
  fallback?: string | null;
};

export default function ProjectDescription({
  descriptionId,
  descriptionEn,
  fallback,
}: Props) {
  const { language } = useLanguage();

  const description =
    language === "id"
      ? descriptionId?.trim() || fallback?.trim() || ""
      : descriptionEn?.trim() || fallback?.trim() || "";

  return <>{description}</>;
}
