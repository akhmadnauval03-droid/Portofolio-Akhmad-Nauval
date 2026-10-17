
// "use client";

// import {
//   useActionState,
//   useCallback,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";
// import Link from "next/link";

// import {
//   FiArrowUpRight,
//   FiCode,
//   FiEdit2,
//   FiFolder,
//   FiGithub,
//   FiLayers,
//   FiPlus,
//   FiSearch,
//   FiTag,
//   FiTrash2,
//   FiX,
//   FiHome,
//   FiGrid,
//   FiLogOut,
//   FiMenu,
//   FiShield,
//   FiBox,
// } from "react-icons/fi";

// import {
//   SiCss,
//   SiFigma,
//   SiGithub as SiGithubTech,
//   SiHtml5,
//   SiJavascript,
//   SiMysql,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiPython,
//   SiReact,
//   SiSupabase,
//   SiTailwindcss,
//   SiTypescript,
// } from "react-icons/si";

// import type { IconType } from "react-icons";

// import {
//   createProject,
//   updateProject,
//   logoutAction,
// } from "./actions";

// // ==============================
// // TIPE DATA
// // ==============================

// type Project = {
//   id: number | string;
//   slug: string;
//   title: string;
//   category: string;
//   description: string;
//   detail_description?: string;
//   image?: string | null;
//   tags: string[] | string | null;
//   technologies: string[] | string | null;
//   liveURL?: string | null;
//   githubURL?: string | null;
// };

// type ProjectActionState = {
//   success: boolean;
//   error: string | null;
// };

// const initialActionState: ProjectActionState = {
//   success: false,
//   error: null,
// };

// // ==============================
// // IKON TEKNOLOGI UNTUK TAGS
// // ==============================

// const tagIcons: Record<string, IconType> = {
//   html: SiHtml5,
//   html5: SiHtml5,
//   css: SiCss,
//   css3: SiCss,
//   javascript: SiJavascript,
//   js: SiJavascript,
//   react: SiReact,
//   "next.js": SiNextdotjs,
//   nextjs: SiNextdotjs,
//   typescript: SiTypescript,
//   ts: SiTypescript,
//   "tailwind css": SiTailwindcss,
//   tailwind: SiTailwindcss,
//   tailwindcss: SiTailwindcss,
//   python: SiPython,
//   figma: SiFigma,
//   github: SiGithubTech,
//   mysql: SiMysql,
//   supabase: SiSupabase,
//   "node.js": SiNodedotjs,
//   nodejs: SiNodedotjs,
// };

// function getTagIcon(tag: string): IconType {
//   return tagIcons[tag.trim().toLowerCase()] ?? FiTag;
// }

// // ==============================
// // FILTER KATEGORI
// // ==============================

// const categoryOptions = [
//   { value: "all", label: "Semua" },
//   { value: "web", label: "Web" },
//   { value: "mobile", label: "Mobile" },
//   { value: "iot", label: "IoT" },
//   { value: "ui/ux", label: "UI/UX" },
// ];

// // ==============================
// // MENGUBAH DATA MENJADI ARRAY
// // ==============================

// function toArray(value: Project["tags"]): string[] {
//   if (Array.isArray(value)) {
//     return value.map(String);
//   }

//   if (typeof value !== "string" || !value.trim()) {
//     return [];
//   }

//   try {
//     const parsed: unknown = JSON.parse(value);

//     if (Array.isArray(parsed)) {
//       return parsed.map(String);
//     }
//   } catch {
//     // Jika bukan JSON, anggap sebagai teks biasa.
//   }

//   return value
//     .split(",")
//     .map((item) => item.trim())
//     .filter(Boolean);
// }

// // ==============================
// // FORM TAMBAH / EDIT PROYEK
// // ==============================

// function ProjectForm({
//   project,
//   onClose,
// }: {
//   project?: Project | null;
//   onClose: () => void;
// }) {
//   const editing = Boolean(project);

//   const [createState, createAction, isCreating] = useActionState<
//     ProjectActionState,
//     FormData
//   >(createProject, initialActionState);

//   const [updateState, updateAction, isUpdating] = useActionState<
//     ProjectActionState,
//     FormData
//   >(updateProject, initialActionState);

//   const isPending = editing ? isUpdating : isCreating;
//   const actionState = editing ? updateState : createState;

//   // State untuk nama file dan preview gambar secara interaktif
//   const [fileName, setFileName] = useState<string | null>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(project?.image ?? null);

//   const inputClass =
//     "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

//   const labelClass = "grid gap-2 text-sm text-text-muted";

//   useEffect(() => {
//     if (actionState.success) {
//       onClose();
//     }
//   }, [actionState.success, onClose]);

//   return (
//     <form
//       action={editing ? updateAction : createAction}
//       className="space-y-5"
//     >
//       {editing && (
//         <input
//           type="hidden"
//           name="id"
//           value={project!.id}
//         />
//       )}

//       <div className="grid gap-4 sm:grid-cols-2">
//         <label className={labelClass}>
//           Nama proyek *
//           <input
//             name="title"
//             required
//             defaultValue={project?.title ?? ""}
//             placeholder="Website Sekolah"
//             className={inputClass}
//           />
//         </label>

//         <label className={labelClass}>
//           Slug *
//           <input
//             name="slug"
//             required
//             defaultValue={project?.slug ?? ""}
//             placeholder="website-sekolah"
//             className={inputClass}
//           />
//         </label>
//       </div>

//       <label className={labelClass}>
//         Kategori *
//         <select
//           name="category"
//           required
//           defaultValue={project?.category || "web"}
//           className={inputClass}
//         >
//           {categoryOptions
//             .filter((option) => option.value !== "all")
//             .map((option) => (
//               <option
//                 key={option.value}
//                 value={option.value}
//               >
//                 {option.label}
//               </option>
//             ))}
//         </select>
//       </label>

//       <label className={labelClass}>
//         Deskripsi singkat *
//         <textarea
//           name="description"
//           required
//           rows={3}
//           defaultValue={project?.description ?? ""}
//           placeholder="Jelaskan proyek secara singkat..."
//           className={inputClass}
//         />
//       </label>

//       <label className={labelClass}>
//         Deskripsi detail
//         <textarea
//           name="detail_description"
//           rows={4}
//           defaultValue={project?.detail_description ?? ""}
//           placeholder="Informasi lengkap tentang proyek..."
//           className={inputClass}
//         />
//       </label>

//       {/* BAGIAN UPLOAD FOTO PROYEK DENGAN PREVIEW */}
//       <div className="space-y-2">
//         <label className="text-sm text-text-muted">Project Image</label>

//         <input
//           type="hidden"
//           name="image"
//           value={project?.image ?? ""}
//         />

//         <div className="relative group flex items-center gap-4 rounded-2xl border-2 border-dashed border-border bg-background/40 p-5 transition hover:border-primary/50 hover:bg-background/80 cursor-pointer overflow-hidden">
//           <input
//             type="file"
//             name="imageFile"
//             accept="image/png,image/jpeg,image/webp"
//             onChange={(e) => {
//               if (e.target.files && e.target.files[0]) {
//                 const file = e.target.files[0];
//                 setFileName(file.name);
//                 setPreviewImage(URL.createObjectURL(file));
//               }
//             }}
//             className="absolute inset-0 z-10 opacity-0 cursor-pointer w-full h-full"
//           />

//           {previewImage ? (
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="h-14 w-14 shrink-0 rounded-xl border border-border object-cover"
//             />
//           ) : (
//             <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-surface text-text-muted transition group-hover:border-primary/40 group-hover:text-primary">
//               <FiFolder className="text-xl" />
//             </div>
//           )}

//           <div className="flex-1 overflow-hidden">
//             <p className="text-sm font-semibold text-text group-hover:text-primary transition truncate">
//               {fileName ? fileName : previewImage ? "Change image" : "Click to upload image"}
//             </p>
//             <p className="text-xs text-text-muted mt-0.5">
//               PNG, JPG, WEBP supported
//             </p>
//           </div>
//         </div>
//       </div>

//       <label className={labelClass}>
//         Teknologi
//         <input
//           name="technologies"
//           defaultValue={toArray(project?.technologies ?? null).join(", ")}
//           placeholder="Next.js, TypeScript, Tailwind CSS"
//           className={inputClass}
//         />
//         <span className="text-xs text-text-muted">
//           Pisahkan setiap teknologi dengan koma.
//         </span>
//       </label>

//       <label className={labelClass}>
//         Tags
//         <input
//           name="tags"
//           defaultValue={toArray(project?.tags ?? null).join(", ")}
//           placeholder="HTML, CSS, UI/UX"
//           className={inputClass}
//         />
//         <span className="text-xs text-text-muted">
//           Pisahkan setiap tag dengan koma.
//         </span>
//       </label>

//       <div className="grid gap-4 sm:grid-cols-2">
//         <label className={labelClass}>
//           Link website
//           <input
//             name="liveURL"
//             type="url"
//             defaultValue={project?.liveURL ?? ""}
//             placeholder="https://..."
//             className={inputClass}
//           />
//         </label>

//         <label className={labelClass}>
//           Link GitHub
//           <input
//             name="githubURL"
//             type="url"
//             defaultValue={project?.githubURL ?? ""}
//             placeholder="https://github.com/..."
//             className={inputClass}
//           />
//         </label>
//       </div>

//       {actionState.error && (
//         <div
//           role="alert"
//           className="rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-400"
//         >
//           <p className="font-semibold">
//             {editing
//               ? "Gagal memperbarui proyek"
//               : "Gagal menambahkan proyek"}
//           </p>
//           <p className="mt-1 break-words">
//             {actionState.error}
//           </p>
//         </div>
//       )}

//       <div className="flex flex-wrap justify-end gap-3 border-t border-border pt-5">
//         <button
//           type="button"
//           onClick={onClose}
//           disabled={isPending}
//           className="rounded-xl border border-border px-5 py-3 text-sm text-text-muted transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           Batal
//         </button>

//         <button
//           type="submit"
//           disabled={isPending}
//           className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           {isPending ? (
//             <>
//               <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
//               Menyimpan...
//             </>
//           ) : (
//             <>
//               {editing ? <FiEdit2 /> : <FiPlus />}
//               {editing ? "Simpan Perubahan" : "Tambah Proyek"}
//             </>
//           )}
//         </button>
//       </div>
//     </form>
//   );
// }

// // ==============================
// // DASHBOARD PROYEK DENGAN SIDEBAR KIRI BER-IKON
// // ==============================

// export default function ProjectDashboard({
//   projects = [],
//   userEmail = "",
//   databaseError = null,
// }: {
//   projects?: Project[];
//   userEmail?: string;
//   databaseError?: string | null;
// }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [showForm, setShowForm] = useState(false);
//   const [editingProject, setEditingProject] = useState<Project | null>(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const closeForm = useCallback(() => {
//     setShowForm(false);
//     setEditingProject(null);
//   }, []);

//   const openCreateForm = useCallback(() => {
//     setEditingProject(null);
//     setShowForm(true);
//   }, []);

//   const filteredProjects = useMemo(() => {
//     const query = searchQuery.trim().toLowerCase();

//     return projects.filter((project) => {
//       const matchesCategory =
//         activeCategory === "all" ||
//         project.category === activeCategory;

//       const searchable = [
//         project.title,
//         project.slug,
//         project.description,
//         project.category,
//         ...toArray(project.tags),
//         ...toArray(project.technologies),
//       ]
//         .join(" ")
//         .toLowerCase();

//       return matchesCategory && searchable.includes(query);
//     });
//   }, [projects, searchQuery, activeCategory]);

//   return (
//     <div className="min-h-screen bg-background text-text flex">
//       {/* ================= SIDEBAR KIRI ================= */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-6">
//           {/* Admin Panel Header dengan Ikon */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-3">
//               <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold shadow-sm">
//                 <FiGrid className="text-lg" />
//               </div>
//               <div>
//                 <h1 className="font-bold text-sm leading-none flex items-center gap-1.5">
//                   Admin Panel
//                 </h1>
//                 <span className="text-[11px] text-text-muted">Dashboard</span>
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(false)}
//               className="lg:hidden text-text-muted hover:text-text"
//             >
//               <FiX className="text-xl" />
//             </button>
//           </div>

//           {/* Menu Navigasi dengan Ikon di Setiap Fitur */}
//           <nav className="space-y-1.5">
//             <p className="px-3 text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
//               Menu
//             </p>
            
//             {/* Menu Projects */}
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-primary/10 text-primary transition shadow-sm"
//             >
//               <FiFolder className="text-base shrink-0" />
//               <span>Projects</span>
//             </a>

//             {/* Menu Ke Beranda */}
//             {/* <Link
//               href="/"
//               className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-text-muted hover:bg-background hover:text-text transition"
//             >
//               <FiHome className="text-base shrink-0" />
//               <span>Ke Beranda</span>
//             </Link> */}
//           </nav>
//         </div>

//         {/* Footer Sidebar / Logout dengan Ikon */}
//         <div className="p-4 border-t border-border bg-surface/50 space-y-3">
//           {userEmail && (
//             <div className="px-2 overflow-hidden">
//               <p className="text-xs font-semibold truncate">{userEmail}</p>
//               <p className="text-[10px] text-text-muted">Administrator</p>
//             </div>
//           )}
//           {/* <Link
//             href="/admin/login?door=nauval"
//             className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 transition"
//           >
//             <FiLogOut className="text-base shrink-0" />
//             <span>Logout</span>
//           </Link> */}
          
//           <form action={logoutAction}>
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 transition"
//             >
//               <FiLogOut className="text-base shrink-0" />
//               <span>Logout</span>
//             </button>
//           </form>

//         </div>
//       </aside>

//       {/* Overlay Gelap Mobile */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
//         />
//       )}

//       {/* ================= KONTEN UTAMA (KANAN) ================= */}
//       <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
//         {/* Top Header Mobile */}
//         <header className="h-16 px-6 border-b border-border flex items-center justify-between lg:hidden bg-surface sticky top-0 z-30">
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 rounded-xl border border-border text-text-muted hover:text-primary"
//           >
//             <FiMenu className="text-xl" />
//           </button>
//           <span className="font-bold text-sm">Dashboard Projects</span>
//           <div className="w-8" />
//         </header>

//         <main className="mx-auto w-[92%] max-w-6xl space-y-10 py-10 flex-1">
//           {/* Heading */}
//           <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                
//               Manage <span className="text-primary">Projects</span>
//               </h1>

//               <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
//                 Manage your portfolio project data, technologies, and project links all in one place.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={openCreateForm}
//               className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary"
//             >
//               <FiPlus className="text-base" />
//               Add Project
//             </button>
//           </section>

//           {/* Error database */}
//           {databaseError && (
//             <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-5 text-sm text-red-400">
//               <p className="font-semibold">
//                 Gagal mengambil data proyek
//               </p>

//               <p className="mt-2 break-words">
//                 {databaseError}
//               </p>

//               <p className="mt-2 text-text-muted">
//                 Periksa nama tabel, kolom, dan kebijakan akses Supabase.
//               </p>
//             </div>
//           )}

//           {/* Manajemen proyek */}
//           <section className="space-y-6">
//             {filteredProjects.length === 0 ? (
//               <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-10 text-center">
//                 <FiFolder className="mx-auto mb-4 text-3xl text-text-muted" />

//                 <h3 className="font-semibold">
//                   Belum ada proyek yang cocok
//                 </h3>

//                 <p className="mt-2 text-sm text-text-muted">
//                   Coba kata kunci lain atau tambahkan proyek baru.
//                 </p>
//               </div>
//             ) : (
//               <div className="grid gap-5 md:grid-cols-2">
//                 {filteredProjects.map((project) => (
//                   <article
//                     key={project.id}
//                     className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
//                   >
//                     {/* Gambar proyek */}
//                     <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-background/60">
//                       {project.image ? (
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           loading="lazy"
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <FiFolder className="text-4xl text-text-muted" />
//                       )}

//                       <span className="absolute left-3 top-3 rounded-lg border border-primary/30 bg-background/90 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
//                         {project.category.toUpperCase()}
//                       </span>
//                     </div>

//                     <div className="space-y-4 p-5">
//                       <div>
//                         <h3 className="text-lg font-semibold transition group-hover:text-primary">
//                           {project.title}
//                         </h3>

//                         <p className="mt-1 break-all text-xs text-text-muted">
//                           /projects/{project.slug}
//                         </p>
//                       </div>

//                       <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">
//                         {project.description}
//                       </p>

//                       {/* TAGS DENGAN IKON */}
//                       <div className="flex flex-wrap gap-2">
//                         {toArray(project.tags)
//                           .slice(0, 4)
//                           .map((tag, index) => {
//                             const Icon = getTagIcon(tag);

//                             return (
//                               <span
//                                 key={`${tag}-${index}`}
//                                 className="group/tag inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md hover:shadow-primary/10"
//                               >
//                                 <Icon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/tag:scale-125 group-hover/tag:rotate-6" />

//                                 {tag}
//                               </span>
//                             );
//                           })}
//                       </div>

//                       {/* Tombol aksi */}
//                       <div className="flex flex-wrap gap-2 border-t border-border pt-4">
//                         <Link
//                           href={`/admin/proyek/edit/${project.id}`}
//                           className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-medium text-black transition hover:bg-transparent hover:text-primary"
//                         >
//                           <FiEdit2 />
//                           Edit
//                         </Link>

//                         <Link
//                           href={`/admin/proyek/delete/${project.id}`}
//                           className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-3 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10"
//                         >
//                           <FiTrash2 />
//                           Delete
//                         </Link>

//                         {project.liveURL && (
//                           <a
//                             href={project.liveURL}
//                             target="_blank"
//                             rel="noreferrer"
//                             aria-label="Buka website proyek"
//                             className="ml-auto inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-text-muted transition hover:border-primary/50 hover:text-primary"
//                           >
//                             <FiArrowUpRight />
//                           </a>
//                         )}

//                         {project.githubURL && (
//                           <a
//                             href={project.githubURL}
//                             target="_blank"
//                             rel="noreferrer"
//                             aria-label="Buka repository GitHub"
//                             className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-text-muted transition hover:border-primary/50 hover:text-primary"
//                           >
//                             <FiGithub />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Footer */}
//           <footer className="flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-text-muted sm:flex-row">
//             <span>Portfolio Admin Dashboard</span>
//             <span>Powered by Next.js &amp; Supabase</span>
//           </footer>
//         </main>
//       </div>

//       {/* Modal tambah / edit */}
//       {showForm && (
//         <div
//           className="fixed inset-0 z-50 overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               closeForm();
//             }
//           }}
//         >
//           <div className="mx-auto my-6 max-w-2xl rounded-2xl border border-border bg-surface shadow-2xl">
//             <div className="flex items-center justify-between border-b border-border p-5 sm:p-6">
//               <div>
//                 <p className="text-sm text-primary">
//                   Projects Management
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold">
//                   {editingProject
//                     ? "Edit Proyek"
//                     : "Tambah Proyek"}
//                 </h2>
//               </div>

//               <button
//                 type="button"
//                 onClick={closeForm}
//                 aria-label="Tutup formulir"
//                 className="rounded-xl border border-border p-2 text-text-muted transition hover:border-primary/50 hover:text-primary"
//               >
//                 <FiX className="text-xl" />
//               </button>
//             </div>

//             <div className="p-5 sm:p-6">
//               <ProjectForm
//                 key={editingProject?.id ?? "new"}
//                 project={editingProject}
//                 onClose={closeForm}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import {
  useActionState,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiCode,
  FiEdit2,
  FiFolder,
  FiGithub,
  FiLayers,
  FiPlus,
  FiSearch,
  FiTag,
  FiTrash2,
  FiX,
  FiHome,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiShield,
  FiBox,
} from "react-icons/fi";

import {
  SiCss,
  SiFigma,
  SiGithub as SiGithubTech,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { IconType } from "react-icons";

import {
  createProject,
  updateProject,
  logoutAction,
} from "./actions";

import { useLanguage } from "@/components/Bahasa/LanguageProvider";

// ==============================
// TIPE DATA
// ==============================

type Project = {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  description: string;
  detail_description?: string;
  image?: string | null;
  tags: string[] | string | null;
  technologies: string[] | string | null;
  liveURL?: string | null;
  githubURL?: string | null;
};

type ProjectActionState = {
  success: boolean;
  error: string | null;
};

const initialActionState: ProjectActionState = {
  success: false,
  error: null,
};

// ==============================
// IKON TEKNOLOGI UNTUK TAGS
// ==============================

const tagIcons: Record<string, IconType> = {
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  javascript: SiJavascript,
  js: SiJavascript,
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  ts: SiTypescript,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  python: SiPython,
  figma: SiFigma,
  github: SiGithubTech,
  mysql: SiMysql,
  supabase: SiSupabase,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
};

function getTagIcon(tag: string): IconType {
  return tagIcons[tag.trim().toLowerCase()] ?? FiTag;
}

// ==============================
// FILTER KATEGORI
// ==============================

const categoryOptions = [
  { value: "all", label: "Semua" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "iot", label: "IoT" },
  { value: "ui/ux", label: "UI/UX" },
];

// ==============================
// MENGUBAH DATA MENJADI ARRAY
// ==============================

function toArray(value: Project["tags"]): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value !== "string" || !value.trim()) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.map(String);
    }
  } catch {
    // Jika bukan JSON, anggap sebagai teks biasa.
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

// ==============================
// FORM TAMBAH / EDIT PROYEK
// ==============================

function ProjectForm({
  project,
  onClose,
}: {
  project?: Project | null;
  onClose: () => void;
}) {
  const editing = Boolean(project);

  const [createState, createAction, isCreating] = useActionState<
    ProjectActionState,
    FormData
  >(createProject, initialActionState);

  const [updateState, updateAction, isUpdating] = useActionState<
    ProjectActionState,
    FormData
  >(updateProject, initialActionState);

  const isPending = editing ? isUpdating : isCreating;
  const actionState = editing ? updateState : createState;

  // State untuk nama file dan preview gambar secara interaktif
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    project?.image ?? null
  );

  const inputClass =
    "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

  const labelClass = "grid gap-2 text-sm text-text-muted";

  useEffect(() => {
    if (actionState.success) {
      onClose();
    }
  }, [actionState.success, onClose]);

  return (
    <form
      action={editing ? updateAction : createAction}
      className="space-y-5"
    >
      {editing && (
        <input
          type="hidden"
          name="id"
          value={project!.id}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Project Name *
          <input
            name="title"
            required
            defaultValue={project?.title ?? ""}
            placeholder="School Website"
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          Slug *
          <input
            name="slug"
            required
            defaultValue={project?.slug ?? ""}
            placeholder="website-school"
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Category *
        <select
          name="category"
          required
          defaultValue={project?.category || "web"}
          className={inputClass}
        >
          {categoryOptions
            .filter((option) => option.value !== "all")
            .map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
        </select>
      </label>

      <label className={labelClass}>
        Short Description *
        <textarea
          name="description"
          required
          rows={3}
          defaultValue={project?.description ?? ""}
          placeholder="Briefly describe the project..."
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
      Detailed Description
        <textarea
          name="detail_description"
          rows={4}
          defaultValue={project?.detail_description ?? ""}
          placeholder="Complete information about the project..."
          className={inputClass}
        />
      </label>

      {/* BAGIAN UPLOAD FOTO PROYEK DENGAN PREVIEW */}
      <div className="space-y-2">
        <label className="text-sm text-text-muted">
        Project Image
        </label>

        <input
          type="hidden"
          name="image"
          value={project?.image ?? ""}
        />

        <div className="relative group flex items-center gap-4 rounded-2xl border-2 border-dashed border-border bg-background/40 p-5 transition hover:border-primary/50 hover:bg-background/80 cursor-pointer overflow-hidden">
          <input
            type="file"
            name="imageFile"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                setFileName(file.name);
                setPreviewImage(URL.createObjectURL(file));
              }
            }}
            className="absolute inset-0 z-10 opacity-0 cursor-pointer w-full h-full"
          />

          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="h-14 w-14 shrink-0 rounded-xl border border-border object-cover"
            />
          ) : (
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-surface text-text-muted transition group-hover:border-primary/40 group-hover:text-primary">
              <FiFolder className="text-xl" />
            </div>
          )}

          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-text group-hover:text-primary transition truncate">
              {fileName
                ? fileName
                : previewImage
                  ? "Change image"
                  : "Click to upload image"}
            </p>

            <p className="text-xs text-text-muted mt-0.5">
              PNG, JPG, WEBP supported
            </p>
          </div>
        </div>
      </div>

      <label className={labelClass}>
        Technologies
        <input
          name="technologies"
          defaultValue={toArray(project?.technologies ?? null).join(", ")}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClass}
        />
        <span className="text-xs text-text-muted">
          "Separate each technology with a comma."
        </span>
      </label>

      <label className={labelClass}>
        Tags
        <input
          name="tags"
          defaultValue={toArray(project?.tags ?? null).join(", ")}
          placeholder="HTML, CSS, UI/UX"
          className={inputClass}
        />
        <span className="text-xs text-text-muted">
          "Separate each tag with a comma."
        </span>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Website Link
          <input
            name="liveURL"
            type="url"
            defaultValue={project?.liveURL ?? ""}
            placeholder="https://..."
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          GitHub Link
          <input
            name="githubURL"
            type="url"
            defaultValue={project?.githubURL ?? ""}
            placeholder="https://github.com/..."
            className={inputClass}
          />
        </label>
      </div>

      {actionState.error && (
        <div
          role="alert"
          className="rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-400"
        >
          <p className="font-semibold">
            {editing
              ? "Failed to update project"
              : "Failed to add project"}
          </p>

          <p className="mt-1 break-words">
            {actionState.error}
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isPending}
          className="rounded-xl border border-border px-5 py-3 text-sm text-text-muted transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Saving...
            </>
          ) : (
            <>
              {editing ? <FiEdit2 /> : <FiPlus />}
              {editing ? "Save Changes" : "Add Project"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// ==============================
// DASHBOARD PROYEK DENGAN SIDEBAR KIRI BER-IKON
// ==============================

export default function ProjectDashboard({
  projects = [],
  userEmail = "",
  databaseError = null,
}: {
  projects?: Project[];
  userEmail?: string;
  databaseError?: string | null;
}) {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setEditingProject(null);
  }, []);

  const openCreateForm = useCallback(() => {
    setEditingProject(null);
    setShowForm(true);
  }, []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ||
        project.category === activeCategory;

      const searchable = [
        project.title,
        project.slug,
        project.description,
        project.category,
        ...toArray(project.tags),
        ...toArray(project.technologies),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchable.includes(query);
    });
  }, [projects, searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* ================= SIDEBAR KIRI ================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Admin Panel Header dengan Ikon */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold shadow-sm">
                <FiGrid className="text-lg" />
              </div>
              <div>
                <h1 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  Admin Panel
                </h1>
                <span className="text-[11px] text-text-muted">
                  {isEnglish ? "Dashboard" : "Dasbor"}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-text-muted hover:text-text"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Menu Navigasi */}
          <nav className="space-y-1.5">
            <p className="px-3 text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              {isEnglish ? "Menu" : "Menu"}
            </p>

            <a
              href="#"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-primary/10 text-primary transition shadow-sm"
            >
              <FiFolder className="text-base shrink-0" />
              <span>{isEnglish ? "Projects" : "Proyek"}</span>
            </a>

            {/* Menu Ke Beranda */}
            {/* <Link
              href="/"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-text-muted hover:bg-background hover:text-text transition"
            >
              <FiHome className="text-base shrink-0" />
              <span>{isEnglish ? "Home" : "Ke Beranda"}</span>
            </Link> */}
          </nav>
        </div>

        {/* Footer Sidebar / Logout */}
        <div className="p-4 border-t border-border bg-surface/50 space-y-3">
          {userEmail && (
            <div className="px-2 overflow-hidden">
              <p className="text-xs font-semibold truncate">{userEmail}</p>
              <p className="text-[10px] text-text-muted">
                {isEnglish ? "Administrator" : "Administrator"}
              </p>
            </div>
          )}

          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 transition"
            >
              <FiLogOut className="text-base shrink-0" />
              <span>{isEnglish ? "Logout" : "Keluar"}</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Overlay Gelap Mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ================= KONTEN UTAMA ================= */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header Mobile */}
        <header className="h-16 px-6 border-b border-border flex items-center justify-between lg:hidden bg-surface sticky top-0 z-30">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl border border-border text-text-muted hover:text-primary"
          >
            <FiMenu className="text-xl" />
          </button>
          <span className="font-bold text-sm">
            {isEnglish ? "Dashboard Projects" : "Dasbor Proyek"}
          </span>
          <div className="w-8" />
        </header>

        <main className="mx-auto w-[92%] max-w-6xl space-y-10 py-10 flex-1">
          {/* Heading */}
          <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEnglish ? "Manage " : "Kelola "}
                <span className="text-primary">
                  {isEnglish ? "Projects" : "Proyek"}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                {isEnglish
                  ? "Manage your portfolio project data, technologies, and project links all in one place."
                  : "Kelola data proyek portofolio, teknologi, dan tautan proyek dalam satu tempat."}
              </p>
            </div>

            <button
              type="button"
              onClick={openCreateForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary"
            >
              <FiPlus className="text-base" />
              {isEnglish ? "Add Project" : "Tambah Proyek"}
            </button>
          </section>

          {/* Error database */}
          {databaseError && (
            <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-5 text-sm text-red-400">
              <p className="font-semibold">
                {isEnglish
                  ? "Failed to fetch project data"
                  : "Gagal mengambil data proyek"}
              </p>

              <p className="mt-2 break-words">{databaseError}</p>

              <p className="mt-2 text-text-muted">
                {isEnglish
                  ? "Check the Supabase table name, columns, and access policies."
                  : "Periksa nama tabel, kolom, dan kebijakan akses Supabase."}
              </p>
            </div>
          )}

          {/* Manajemen proyek */}
          <section className="space-y-6">
            {filteredProjects.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-10 text-center">
                <FiFolder className="mx-auto mb-4 text-3xl text-text-muted" />

                <h3 className="font-semibold">
                  {isEnglish
                    ? "No matching projects found"
                    : "Belum ada proyek yang cocok"}
                </h3>

                <p className="mt-2 text-sm text-text-muted">
                  {isEnglish
                    ? "Try another keyword or add a new project."
                    : "Coba kata kunci lain atau tambahkan proyek baru."}
                </p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                  >
                    {/* Gambar proyek */}
                    <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-background/60">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <FiFolder className="text-4xl text-text-muted" />
                      )}

                      <span className="absolute left-3 top-3 rounded-lg border border-primary/30 bg-background/90 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-4 p-5">
                      <div>
                        <h3 className="text-lg font-semibold transition group-hover:text-primary">
                          {project.title}
                        </h3>

                        <p className="mt-1 break-all text-xs text-text-muted">
                          /projects/{project.slug}
                        </p>
                      </div>

                      <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">
                        {project.description}
                      </p>

                      {/* TAGS DENGAN IKON */}
                      <div className="flex flex-wrap gap-2">
                        {toArray(project.tags)
                          .slice(0, 4)
                          .map((tag, index) => {
                            const Icon = getTagIcon(tag);

                            return (
                              <span
                                key={`${tag}-${index}`}
                                className="group/tag inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md hover:shadow-primary/10"
                              >
                                <Icon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/tag:scale-125 group-hover/tag:rotate-6" />
                                {tag}
                              </span>
                            );
                          })}
                      </div>

                      {/* Tombol aksi */}
                      <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                        <Link
                          href={`/admin/proyek/edit/${project.id}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-medium text-black transition hover:bg-transparent hover:text-primary"
                        >
                          <FiEdit2 />
                          {isEnglish ? "Edit" : "Ubah"}
                        </Link>

                        <Link
                          href={`/admin/proyek/delete/${project.id}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-3 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10"
                        >
                          <FiTrash2 />
                          {isEnglish ? "Delete" : "Hapus"}
                        </Link>

                        {project.liveURL && (
                          <a
                            href={project.liveURL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={
                              isEnglish
                                ? "Open project website"
                                : "Buka website proyek"
                            }
                            className="ml-auto inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-text-muted transition hover:border-primary/50 hover:text-primary"
                          >
                            <FiArrowUpRight />
                          </a>
                        )}

                        {project.githubURL && (
                          <a
                            href={project.githubURL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={
                              isEnglish
                                ? "Open GitHub repository"
                                : "Buka repository GitHub"
                            }
                            className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-text-muted transition hover:border-primary/50 hover:text-primary"
                          >
                            <FiGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Footer */}
          <footer className="flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-text-muted sm:flex-row">
            <span>Portfolio Admin Dashboard</span>
            <span>Powered by Next.js &amp; Supabase</span>
          </footer>
        </main>
      </div>

      {/* Modal tambah / edit */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeForm();
            }
          }}
        >
          <div className="mx-auto my-6 max-w-2xl rounded-2xl border border-border bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-5 sm:p-6">
              <div>
                <p className="text-sm text-primary">
                    Project Management
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  <h2 className="mt-1 text-xl font-bold">
                    {editingProject ? "Edit Project" : "Add Project"}
                  </h2>
                </h2>
              </div>

              <button
                type="button"
                onClick={closeForm}
                aria-label={
                  isEnglish ? "Close form" : "Tutup formulir"
                }
                className="rounded-xl border border-border p-2 text-text-muted transition hover:border-primary/50 hover:text-primary"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <ProjectForm
                key={editingProject?.id ?? "new"}
                project={editingProject}
                onClose={closeForm}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
