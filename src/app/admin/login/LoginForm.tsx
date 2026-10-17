
"use client";

import Link from "next/link";
import {
  FiCode,
  FiLock,
  FiMail,
  FiHome,
} from "react-icons/fi";
import { useLanguage } from "@/components/Bahasa/LanguageProvider";

type Props = {
  error?: string;
  loginAction: (formData: FormData) => void | Promise<void>;
};

export default function LoginForm({
  error,
  loginAction,
}: Props) {
  const { language } = useLanguage();
  const isId = language === "id";

  const errorMessage =
    error === "required"
      ? isId
        ? "Email dan kata sandi wajib diisi."
        : "Email and password are required."
      : error === "invalid"
        ? isId
          ? "Email atau kata sandi tidak valid."
          : "Invalid email or password."
        : "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f1418] px-5 py-10 text-white">
      <div className="w-full max-w-sm">
        <div className="mb-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <FiCode size={23} className="text-primary" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            {isId ? "Login Admin" : "Admin Login"}
            <span className="text-white">.</span>
          </h1>

          <p className="mt-2 text-sm text-neutral-500">
            {isId
              ? "Masuk untuk mengelola proyek portofolio."
              : "Log in to manage your portfolio."}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">
          {errorMessage && (
            <p
              role="alert"
              className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
            >
              {errorMessage}
            </p>
          )}

          <form action={loginAction} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {isId ? "Alamat Email" : "Email"}
              </label>

              <div className="relative">
                <FiMail
                  size={17}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="admin@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                {isId ? "Kata Sandi" : "Password"}
              </label>

              <div className="relative">
                <FiLock
                  size={17}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
                />

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder={
                    isId
                      ? "Masukkan kata sandi"
                      : "Enter your password"
                  }
                  required
                  className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 active:scale-[0.99]"
            >
              {isId ? "Masuk" : "Login"}
            </button>

            <div className="mt-1">
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-primary/20 py-3 text-sm font-medium text-neutral-300 transition hover:border-primary/50 hover:bg-white/[0.06] hover:text-primary"
              >
                <FiHome size={17} aria-hidden="true" />
                {isId
                  ? "Kembali ke Beranda"
                  : "Back to Home"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
