// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiArrowLeft, FiCheck, FiFolder, FiGithub, FiImage, FiSave } from "react-icons/fi";

// function toInputList(value: unknown): string {
//   if (Array.isArray(value)) return value.join(", ");
//   if (typeof value === "string") {
//     try {
//       const parsed: unknown = JSON.parse(value);
//       if (Array.isArray(parsed)) return parsed.join(", ");
//     } catch {}
//     return value;
//   }
//   return "";
// }

// const inputClass =
//   "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

// const labelClass =
//   "mb-2 block text-sm font-medium text-text";

// export default function EditProjectForm({ proyek, action }: { proyek: any; action: any }) {
//   const [fileName, setFileName] = useState<string | null>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(proyek?.image ?? null);

//   return (
//     <form action={action} className="space-y-6">
//       <input type="hidden" name="id" value={String(proyek.id)} />

//       <div className="grid gap-5 sm:grid-cols-2">
//         <div>
//           <label htmlFor="title" className={labelClass}>
//             Nama Proyek <span className="text-primary">*</span>
//           </label>
//           <input
//             id="title"
//             name="title"
//             required
//             defaultValue={proyek.title ?? ""}
//             placeholder="Nama proyek"
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <label htmlFor="slug" className={labelClass}>
//             Slug <span className="text-primary">*</span>
//           </label>
//           <input
//             id="slug"
//             name="slug"
//             required
//             defaultValue={proyek.slug ?? ""}
//             placeholder="nama-proyek"
//             className={inputClass}
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="category" className={labelClass}>
//           Kategori <span className="text-primary">*</span>
//         </label>
//         <select
//           id="category"
//           name="category"
//           required
//           defaultValue={proyek.category ?? "web"}
//           className={inputClass}
//         >
//           <option value="web">Web</option>
//           <option value="mobile">Mobile</option>
//           <option value="iot">IoT</option>
//           <option value="ui/ux">UI/UX</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="description" className={labelClass}>
//           Deskripsi Singkat <span className="text-primary">*</span>
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           required
//           rows={3}
//           defaultValue={proyek.description ?? ""}
//           placeholder="Deskripsi singkat proyek..."
//           className={inputClass}
//         />
//       </div>

//       <div>
//         <label htmlFor="detail_description" className={labelClass}>
//           Deskripsi Detail
//         </label>
//         <textarea
//           id="detail_description"
//           name="detail_description"
//           rows={5}
//           defaultValue={proyek.detail_description ?? ""}
//           placeholder="Jelaskan fitur, tujuan, dan proses pembuatan proyek..."
//           className={inputClass}
//         />
//       </div>

//       {/* Bagian Foto Proyek dengan Preview Interaktif */}
//       <div className="space-y-2">
//         <label className="text-sm text-text-muted">Project Image</label>

//         <input
//           type="hidden"
//           name="image"
//           value={proyek.image ?? ""}
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

//       <div>
//         <label htmlFor="tags" className={labelClass}>
//           Tags
//         </label>
//         <input
//           id="tags"
//           name="tags"
//           defaultValue={toInputList(proyek.tags)}
//           placeholder="HTML, CSS, UI/UX"
//           className={inputClass}
//         />
//         <p className="mt-2 text-xs text-text-muted">
//           Pisahkan setiap tag dengan koma.
//         </p>
//       </div>

//       <div>
//         <label htmlFor="technologies" className={labelClass}>
//           Teknologi
//         </label>
//         <input
//           id="technologies"
//           name="technologies"
//           defaultValue={toInputList(proyek.technologies)}
//           placeholder="Next.js, TypeScript, Tailwind CSS"
//           className={inputClass}
//         />
//         <p className="mt-2 text-xs text-text-muted">
//           Pisahkan setiap teknologi dengan koma.
//         </p>
//       </div>

//       <div className="grid gap-5 sm:grid-cols-2">
//         <div>
//           <label htmlFor="liveURL" className={labelClass}>
//             Link Website
//           </label>
//           <input
//             id="liveURL"
//             name="liveURL"
//             type="url"
//             defaultValue={proyek.liveURL ?? ""}
//             placeholder="https://..."
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <label htmlFor="githubURL" className={labelClass}>
//             Link GitHub
//           </label>
//           <div className="relative">
//             <FiGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
//             <input
//               id="githubURL"
//               name="githubURL"
//               type="url"
//               defaultValue={proyek.githubURL ?? ""}
//               placeholder="https://github.com/..."
//               className={`${inputClass} pl-11`}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
//         <Link
//           href="/admin/proyek"
//           className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-text-muted transition hover:border-primary/50 hover:text-primary"
//         >
//           <FiArrowLeft />
//           Batal
//         </Link>

//         <button
//           type="submit"
//           className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary"
//         >
//           <FiSave />
//           Simpan Perubahan
//           <FiCheck />
//         </button>
//       </div>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiFolder, FiGithub, FiSave } from "react-icons/fi";
import { createSupabaseClient } from "@/lib/supabase-client";

function toInputList(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.join(", ");
    } catch {}
    return value;
  }
  return "";
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass = "mb-2 block text-sm font-medium text-text";

export default function EditProjectForm({
  proyek,
  action,
}: {
  proyek: any;
  action: any;
}) {
  const supabase = createSupabaseClient();

  const [fileName, setFileName] = useState<string | null>(null);
  const [isImageError, setIsImageError] = useState(false);

  // Memastikan URL gambar lama valid (menangani URL utuh atau path storage)
  const getInitialPreview = () => {
    if (!proyek?.image) return null;
    if (proyek.image.startsWith("http")) {
      return proyek.image;
    }
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(proyek.image);
    return data.publicUrl;
  };

  const [previewImage, setPreviewImage] = useState<string | null>(getInitialPreview());

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="id" value={String(proyek.id)} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className={labelClass}>
            Project Name <span className="text-primary">*</span>
          </label>
          <input
            id="title"
            name="title"
            required
            defaultValue={proyek.title ?? ""}
            placeholder="Nama proyek"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug <span className="text-primary">*</span>
          </label>
          <input
            id="slug"
            name="slug"
            required
            defaultValue={proyek.slug ?? ""}
            placeholder="nama-proyek"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className={labelClass}>
          Category <span className="text-primary">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          defaultValue={proyek.category ?? "web"}
          className={inputClass}
        >
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="iot">IoT</option>
          <option value="ui/ux">UI/UX</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Brief Description <span className="text-primary">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          defaultValue={proyek.description ?? ""}
          placeholder="Deskripsi singkat proyek..."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="detail_description" className={labelClass}>
          Detailed Description
        </label>
        <textarea
          id="detail_description"
          name="detail_description"
          rows={5}
          defaultValue={proyek.detail_description ?? ""}
          placeholder="Jelaskan fitur, tujuan, dan proses pembuatan proyek..."
          className={inputClass}
        />
      </div>

      {/* Bagian Upload & Preview Foto Proyek */}
      <div className="space-y-2">
        <label className="text-sm text-text-muted">Projects Image</label>

        <input
          type="hidden"
          name="image"
          defaultValue={proyek.image ?? ""}
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
                setPreviewImage(URL.createObjectURL(file)); // Preview instan untuk file baru
                setIsImageError(false);
              }
            }}
            className="absolute inset-0 z-10 opacity-0 cursor-pointer w-full h-full"
          />

          {previewImage && !isImageError ? (
            <img
              src={previewImage}
              alt="Preview"
              onError={() => setIsImageError(true)}
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
                : previewImage && !isImageError
                ? "Change image"
                : "Click to upload image"}
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              PNG, JPG, WEBP supported
            </p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="tags" className={labelClass}>
          Tags
        </label>
        <input
          id="tags"
          name="tags"
          defaultValue={toInputList(proyek.tags)}
          placeholder="HTML, CSS, UI/UX"
          className={inputClass}
        />
        <p className="mt-2 text-xs text-text-muted">
          Separate each tag with a comma.
        </p>
      </div>

      <div>
        <label htmlFor="technologies" className={labelClass}>
          Technology
        </label>
        <input
          id="technologies"
          name="technologies"
          defaultValue={toInputList(proyek.technologies)}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClass}
        />
        <p className="mt-2 text-xs text-text-muted">
          Separate each technology with a comma.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="liveURL" className={labelClass}>
            Link Website
          </label>
          <input
            id="liveURL"
            name="liveURL"
            type="url"
            defaultValue={proyek.liveURL ?? ""}
            placeholder="https://..."
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="githubURL" className={labelClass}>
            Link GitHub
          </label>
          <div className="relative">
            <FiGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              id="githubURL"
              name="githubURL"
              type="url"
              defaultValue={proyek.githubURL ?? ""}
              placeholder="https://github.com/..."
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <Link
          href="/admin/proyek"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-text-muted transition hover:border-primary/50 hover:text-primary"
        >
          <FiArrowLeft />
          Cancel
        </Link>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary"
        >
          <FiSave />
          Save Changes
          <FiCheck />
        </button>
      </div>
    </form>
  );
}