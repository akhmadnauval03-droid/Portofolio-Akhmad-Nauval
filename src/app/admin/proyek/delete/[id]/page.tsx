import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiTrash2,
} from "react-icons/fi";
import { createSupabaseServerClient } from "@/lib/supabase-server";

async function hapusProyekAction(formData: FormData) {
  "use server";

  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    redirect("/admin/proyek");
  }

  const supabase = await createSupabaseServerClient();

  // Pastikan hanya admin yang sudah login dapat menghapus proyek.
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const { error } = await supabase
    .from("Projects")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to delete projects: ${error.message}`);
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/");
  revalidatePath("/projects");

  redirect("/admin/proyek");
}

export default async function HapusProyekPage({
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
    .select("id, title")
    .eq("id", id)
    .single();

  if (error || !proyek) {
    redirect("/admin/proyek");
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-text sm:px-6">
      <div className="mx-auto max-w-xl">
        {/* Tombol kembali */}
        <Link
          href="/admin/proyek"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>

        {/* Konfirmasi hapus */}
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
          <div className="border-b border-border p-6 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10">
              <FiAlertTriangle className="text-2xl text-red-400" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Delete Projects
            </h1>

            <p className="mt-3 leading-relaxed text-text-muted">
              Are you sure you want to delete this project? Deleted projects
              cannot be recovered.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 rounded-xl border border-border bg-background p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
               Projects to be deleted
              </p>

              <p className="break-words text-lg font-semibold text-text">
                {proyek.title}
              </p>

              <p className="mt-1 text-sm text-text-muted">
                ID Proyek: {proyek.id}
              </p>
            </div>

            <form action={hapusProyekAction} className="flex flex-col gap-3 sm:flex-row">
              <input type="hidden" name="id" value={proyek.id} />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-surface"
              >
                <FiTrash2 />
                Yes, Delete Projects
              </button>

              <Link
                href="/admin/proyek"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}