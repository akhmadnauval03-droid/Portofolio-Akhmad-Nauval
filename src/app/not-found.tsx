import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1117] text-[#f0f2f5]">
      <div className="absolute inset-0 bg-[#0b1117]" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(32,178,166,0.18) 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="relative mb-4 flex items-center justify-center">
          <div className="absolute h-44 w-44 rounded-full bg-[#20b2a6]/15 blur-3xl md:h-60 md:w-60" />
          <span className="relative text-[7rem] font-black leading-none tracking-[-0.08em] text-primary md:text-[11rem]">
            404
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Kembali ke beranda untuk melanjutkan melihat portfolio saya atau lihat project saya.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(255,255,255,0.04)]"
          >
            Kembali ke Home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-transparent hover:text-primary hover:shadow-[0_8px_18px_rgba(32,178,166,0.14)] hover:border-primary"
          >
            Lihat Projects
          </Link>
        </div>
      </div>
    </main>
  );
}