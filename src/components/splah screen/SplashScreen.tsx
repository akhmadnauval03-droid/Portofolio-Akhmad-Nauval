"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0b1014]">

      {/* Background dots */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 200, 200, 0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6">

        {/* Logo + Name */}
        <div className="flex items-center gap-5">

          {/* Coding Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-[#182127] shadow-[0_0_30px_rgba(0,200,200,0.08)]">
            <span className="font-mono text-2xl font-bold text-cyan-400">
              &lt;/&gt;
            </span>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Akhmad Nauval
            <span className="text-cyan-400"></span>
          </h1>

        </div>

        {/* Loading */}
        <div className="mt-10 w-full max-w-xl">

          {/* Loading line */}
          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-slate-800">

            {/* Progress */}
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-75"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
}