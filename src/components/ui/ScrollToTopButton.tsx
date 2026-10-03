"use client";

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-4 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-surface px-4 py-2 text-sm font-medium text-gray-300 shadow-lg shadow-black/30 transition-all duration-300 hover:border-primary hover:text-primary",
        showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <FiChevronUp className="h-4 w-4" aria-hidden="true" />
      <span>Back to top</span>
    </button>
  );
}
