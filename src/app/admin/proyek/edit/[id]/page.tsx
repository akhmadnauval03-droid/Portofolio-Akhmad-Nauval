

import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiLayers } from "react-icons/fi";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import EditProjectForm from "./edit";

async function editProyekAction(formData: FormData) {
  "use server";

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const id = String(formData.get("id") ?? "").trim();
  if (!id) {
    throw new Error("ID proyek tidak ditemukan.");
  }

  const text = (key: string) => String(formData.get(key) ?? "").trim();

  const title = text("title");
  const slug = text("slug");
  const category = text("category");
  const description = text("description");

  if (!title || !slug || !category || !description) {
    throw new Error("Lengkapi semua kolom yang wajib diisi.");
  }

  // 1. Ambil URL gambar lama dari hidden input
  let imageUrl = text("image");

  // 2. Cek apakah ada file foto baru yang di-upload
  const imageFile = formData.get("imageFile") as File | null;

  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `projects/${fileName}`;

    // Upload ke bucket 'project-images' Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(filePath, imageFile, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
    }

    // Dapatkan URL Publik dari gambar baru
    const { data: publicUrlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(filePath);

    imageUrl = publicUrlData.publicUrl;
  }

  const parseList = (value: string) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const projectData = {
    title,
    slug,
    category,
    description,
    detail_description: text("detail_description"),
    image: imageUrl, // Menyimpan URL gambar baru atau gambar lama
    tags: parseList(text("tags")),
    technologies: parseList(text("technologies")),
    liveURL: text("liveURL") || null,
    githubURL: text("githubURL") || null,
  };

  const { error } = await supabase
    .from("Projects")
    .update(projectData)
    .eq("id", id);

  if (error) {
    throw new Error(`Gagal mengedit proyek: ${error.message}`);
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath(`/projects/${slug}`);

  redirect("/admin/proyek");
}

export default async function EditProyekPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const { data: proyek, error } = await supabase
    .from("Projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !proyek) {
    return (
      <main className="min-h-screen bg-background px-5 py-12 text-text">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center">
          <FiLayers className="mx-auto mb-4 text-4xl text-text-muted" />
          <h1 className="text-xl font-bold">Project not found</h1>
          <p className="mt-3 text-sm text-text-muted">
           Data not found, or your account does not have permission to read it.
          </p>
          <Link
            href="/admin/proyek"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-primary"
          >
            <FiArrowLeft />
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-text">
      <div className="mx-auto w-[90%] max-w-4xl space-y-8 py-10 sm:py-14">
        {/* Heading */}
        <section>
          <p className="mb-3 text-sm font-medium text-primary">
            Admin / Projects / Edit
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Edit <span className="text-primary">Projects.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
           Update the project information and save the changes to the portfolio database.
          </p>
        </section>

        {/* Form Section */}
        <section className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
          <div className="mb-6 flex items-start gap-4 border-b border-border pb-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <FiLayers className="text-xl" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold">Project Information</h2>
              <p className="mt-1 break-all text-xs text-text-muted">
                ID: {String(proyek.id)} · /projects/{proyek.slug}
              </p>
            </div>
            {proyek.liveURL && (
              <a
                href={proyek.liveURL}
                target="_blank"
                rel="noreferrer"
                aria-label="Lihat website proyek"
                className="rounded-xl border border-border p-3 text-text-muted transition hover:border-primary/50 hover:text-primary"
              >
                <FiExternalLink />
              </a>
            )}
          </div>

          <EditProjectForm proyek={proyek} action={editProyekAction} />
        </section>

        <p className="text-center text-xs text-text-muted">
          Portfolio Admin · Next.js & Supabase
        </p>
      </div>
    </main>
  );
}