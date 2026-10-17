// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase-server";
// import { FiCode, FiLock, FiMail } from "react-icons/fi";
// import Link from "next/link";
// import { FiHome } from "react-icons/fi";

// async function loginAction(formData: FormData) {
//   "use server";

//   const email = String(formData.get("email") ?? "").trim();
//   const password = String(formData.get("password") ?? "");

//   if (!email || !password) {
//     redirect("/admin/login?error=Email+dan+password+wajib+diisi");
//   }

//   const supabase = await createSupabaseServerClient();

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     redirect("/admin/login?error=Email+atau+password+tidak+valid");
//   }

//   redirect("/admin/proyek");
// }

// export default async function AdminLoginPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ error?: string }>;
// }) {
//   const params = await searchParams;

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-#0f1418 px-5 py-10 text-white">
//       <div className="w-full max-w-sm">

//         {/* Header */}
//         <div className="mb-2 text-center">
//           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
//             <FiCode size={23} className="text-primary" />
//           </div>

//           <h1 className="text-2xl font-bold tracking-tight">
//             Admin Login<span className="text-white">.</span>
//           </h1>

//           <p className="mt-2 text-sm text-neutral-500">
//             Log in to manage your portfolio.
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">

//           {params.error && (
//             <p
//               role="alert"
//               className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
//             >
//               {params.error}
//             </p>
//           )}

//           <form action={loginAction} className="space-y-5">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-2 block text-sm font-medium text-neutral-300"
//               >
//                 Email
//               </label>

//               <div className="relative">
//                 <FiMail
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
//                 />

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="username"
//                   placeholder="admin@example.com"
//                   required
//                   className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="mb-2 block text-sm font-medium text-neutral-300"
//               >
//                 Password
//               </label>

//               <div className="relative">
//                 <FiLock
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
//                 />

//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   placeholder="Enter your password"
//                   required
//                   className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 active:scale-[0.99]"
//             >
//               Login
//             </button>

//             {/* Tombol Kembali ke Project */}
//             <div className="mt-1">
//               <Link
//                 href="/"
//                 className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-primary/20 py-3 text-sm font-medium text-neutral-300 transition hover:border-primary/50 hover:bg-white/[0.06] hover:text-primary"
//               >
//                 <FiHome size={17} />
//                 Back to Home
//               </Link>
//             </div>
//           </form>
//         </div>

//         {/* Footer */}
//         {/* <p className="mt-7 text-center text-xs text-neutral-600">
//           © {new Date().getFullYear()} Akhmad Nauval
//         </p> */}
//       </div>
//     </main>
//   );
// }


// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase-server";
// import { FiCode, FiLock, FiMail, FiHome } from "react-icons/fi";
// import Link from "next/link";

// async function loginAction(formData: FormData) {
//   "use server";

//   const email = String(formData.get("email") ?? "").trim();
//   const password = String(formData.get("password") ?? "");

//   if (!email || !password) {
//     redirect(
//       "/admin/login?door=nauval&error=Email+dan+password+wajib+diisi"
//     );
//   }

//   const supabase = await createSupabaseServerClient();

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     redirect(
//       "/admin/login?door=nauval&error=Email+atau+password+tidak+valid"
//     );
//   }

//   redirect("/admin/proyek");
// }

// export default async function AdminLoginPage({
//   searchParams,
// }: {
//   searchParams: Promise<{
//     error?: string;
//     door?: string;
//   }>;
// }) {
//   const params = await searchParams;

//   // Halaman login hanya ditampilkan melalui URL khusus
//   if (params.door !== "nauval") {
//     redirect("/");
//   }

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#0f1418] px-5 py-10 text-white">
//       <div className="w-full max-w-sm">
//         {/* Header */}
//         <div className="mb-2 text-center">
//           <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
//             <FiCode size={23} className="text-primary" />
//           </div>

//           <h1 className="text-2xl font-bold tracking-tight">
//             Admin Login<span className="text-white">.</span>
//           </h1>

//           <p className="mt-2 text-sm text-neutral-500">
//             Log in to manage your portfolio.
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">
//           {params.error && (
//             <p
//               role="alert"
//               className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
//             >
//               {params.error}
//             </p>
//           )}

//           <form action={loginAction} className="space-y-5">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-2 block text-sm font-medium text-neutral-300"
//               >
//                 Email
//               </label>

//               <div className="relative">
//                 <FiMail
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
//                 />

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="username"
//                   placeholder="admin@example.com"
//                   required
//                   className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="mb-2 block text-sm font-medium text-neutral-300"
//               >
//                 Password
//               </label>

//               <div className="relative">
//                 <FiLock
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
//                 />

//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   placeholder="Enter your password"
//                   required
//                   className="w-full rounded-lg border border-white/10 bg-black py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 active:scale-[0.99]"
//             >
//               Login
//             </button>

//             {/* Tombol Kembali ke Project */}
//             <div className="mt-1">
//               <Link
//                 href="/"
//                 className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-primary/20 py-3 text-sm font-medium text-neutral-300 transition hover:border-primary/50 hover:bg-white/[0.06] hover:text-primary"
//               >
//                 <FiHome size={17} />
//                 Back to Home
//               </Link>
//             </div>
//           </form>
//         </div>

//         {/* Footer */}
//         {/* <p className="mt-7 text-center text-xs text-neutral-600">
//           © {new Date().getFullYear()} Akhmad Nauval
//         </p> */}
//       </div>
//     </main>
//   );
// }


import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import LoginForm from "./LoginForm";

async function loginAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect(
      "/admin/login?door=nauval&error=required"
    );
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);

    redirect(
      "/admin/login?door=nauval&error=invalid"
    );
  }

  redirect("/admin/proyek");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    door?: string;
  }>;
}) {
  const params = await searchParams;

  if (params.door !== "nauval") {
    redirect("/");
  }

  return (
    <LoginForm
      error={params.error}
      loginAction={loginAction}
    />
  );
}
