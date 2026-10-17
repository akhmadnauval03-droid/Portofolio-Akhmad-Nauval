
// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase-server";

// // Tipe hasil action tambah proyek
// export type ProjectActionState = {
//   success: boolean;
//   error: string | null;
// };

// // Memastikan pengguna sudah login
// async function getSupabase() {
//   const supabase = await createSupabaseServerClient();

//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();

//   if (error || !user) {
//     redirect("/admin/login");
//   }

//   return supabase;
// }

// // Mengambil data dari form
// function readProject(formData: FormData) {
//   const text = (key: string) =>
//     String(formData.get(key) ?? "").trim();

//   return {
//     slug: text("slug"),
//     title: text("title"),
//     category: text("category"),
//     description: text("description"),
//     detail_description: text("detail_description"),
//     image: text("image"),
//     tags: text("tags")
//       .split(",")
//       .map((value) => value.trim())
//       .filter(Boolean),
//     technologies: text("technologies")
//       .split(",")
//       .map((value) => value.trim())
//       .filter(Boolean),
//     liveURL: text("liveURL"),
//     githubURL: text("githubURL"),
//   };
// }

// // Validasi data proyek
// function validate(project: ReturnType<typeof readProject>) {
//   if (
//     !project.slug ||
//     !project.title ||
//     !project.category ||
//     !project.description
//   ) {
//     throw new Error(
//       "Slug, judul, kategori, dan deskripsi wajib diisi."
//     );
//   }
// }

// // Memperbarui cache halaman
// function refreshPortfolio() {
//   revalidatePath("/admin/proyek");
//   revalidatePath("/");
//   revalidatePath("/projects");
// }

// // ========================================
// // TAMBAH PROYEK
// // ========================================
// export async function createProject(
//   _prevState: ProjectActionState,
//   formData: FormData
// ): Promise<ProjectActionState> {
//   try {
//     const supabase = await getSupabase();
//     const project = readProject(formData);

//     validate(project);

//     const { error } = await supabase
//       .from("Projects")
//       .insert(project);

//     if (error) {
//       return {
//         success: false,
//         error: error.message,
//       };
//     }

//     refreshPortfolio();

//     return {
//       success: true,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error:
//         error instanceof Error
//           ? error.message
//           : "Gagal menambahkan proyek.",
//     };
//   }
// }

// // ========================================
// // EDIT PROYEK
// // ========================================
// export async function updateProject(formData: FormData) {
//   const supabase = await getSupabase();

//   const id = String(formData.get("id") ?? "").trim();
//   const project = readProject(formData);

//   if (!id) {
//     throw new Error("ID proyek tidak ditemukan.");
//   }

//   validate(project);

//   const { error } = await supabase
//     .from("Projects")
//     .update(project)
//     .eq("id", id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   refreshPortfolio();
// }

// // ========================================
// // HAPUS PROYEK
// // ========================================
// export async function deleteProject(formData: FormData) {
//   const supabase = await getSupabase();

//   const id = String(formData.get("id") ?? "").trim();

//   if (!id) {
//     throw new Error("ID proyek tidak ditemukan.");
//   }

//   const { error } = await supabase
//     .from("Projects")
//     .delete()
//     .eq("id", id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   refreshPortfolio();
// }

// // ========================================
// // LOGOUT ADMIN
// // ========================================
// export async function logoutAction() {
//   const supabase = await getSupabase();

//   await supabase.auth.signOut();

//   redirect("/admin/login");
// }


// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase-server";

// // Tipe hasil action tambah dan edit proyek
// export type ProjectActionState = {
//   success: boolean;
//   error: string | null;
// };

// // Memastikan pengguna sudah login
// async function getSupabase() {
//   const supabase = await createSupabaseServerClient();

//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();

//   if (error || !user) {
//     redirect("/admin/login");
//   }

//   return supabase;
// }

// // Mengambil data dari form
// function readProject(formData: FormData) {
//   const text = (key: string) =>
//     String(formData.get(key) ?? "").trim();

//   return {
//     slug: text("slug"),
//     title: text("title"),
//     category: text("category"),
//     description: text("description"),
//     detail_description: text("detail_description"),
//     image: text("image"),
//     tags: text("tags")
//       .split(",")
//       .map((value) => value.trim())
//       .filter(Boolean),
//     technologies: text("technologies")
//       .split(",")
//       .map((value) => value.trim())
//       .filter(Boolean),
//     liveURL: text("liveURL"),
//     githubURL: text("githubURL"),
//   };
// }

// // Validasi data proyek
// function validate(project: ReturnType<typeof readProject>) {
//   if (
//     !project.slug ||
//     !project.title ||
//     !project.category ||
//     !project.description
//   ) {
//     throw new Error(
//       "Slug, judul, kategori, dan deskripsi wajib diisi."
//     );
//   }
// }

// // Memperbarui cache halaman
// function refreshPortfolio() {
//   revalidatePath("/admin/proyek");
//   revalidatePath("/");
//   revalidatePath("/projects");
// }

// // ========================================
// // TAMBAH PROYEK
// // ========================================
// export async function createProject(
//   _prevState: ProjectActionState,
//   formData: FormData
// ): Promise<ProjectActionState> {
//   try {
//     const supabase = await getSupabase();
//     const project = readProject(formData);

//     validate(project);

//     const { error } = await supabase
//       .from("Projects")
//       .insert(project);

//     if (error) {
//       return {
//         success: false,
//         error: error.message,
//       };
//     }

//     refreshPortfolio();

//     return {
//       success: true,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error:
//         error instanceof Error
//           ? error.message
//           : "Gagal menambahkan proyek.",
//     };
//   }
// }

// // ========================================
// // EDIT PROYEK
// // ========================================
// export async function updateProject(
//   _prevState: ProjectActionState,
//   formData: FormData
// ): Promise<ProjectActionState> {
//   try {
//     const supabase = await getSupabase();

//     const id = String(formData.get("id") ?? "").trim();

//     if (!id) {
//       return {
//         success: false,
//         error: "ID proyek tidak ditemukan.",
//       };
//     }

//     const project = readProject(formData);

//     validate(project);

//     const { error } = await supabase
//       .from("Projects")
//       .update(project)
//       .eq("id", id);

//     if (error) {
//       return {
//         success: false,
//         error: error.message,
//       };
//     }

//     refreshPortfolio();

//     return {
//       success: true,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error:
//         error instanceof Error
//           ? error.message
//           : "Gagal memperbarui proyek.",
//     };
//   }
// }

// // ========================================
// // HAPUS PROYEK
// // ========================================
// export async function deleteProject(formData: FormData) {
//   const supabase = await getSupabase();

//   const id = String(formData.get("id") ?? "").trim();

//   if (!id) {
//     throw new Error("ID proyek tidak ditemukan.");
//   }

//   const { error } = await supabase
//     .from("Projects")
//     .delete()
//     .eq("id", id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   refreshPortfolio();
// }

// // ========================================
// // LOGOUT ADMIN
// // ========================================
// export async function logoutAction() {
//   const supabase = await getSupabase();

//   await supabase.auth.signOut();

//   redirect("/admin/login");
// }


"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

// Tipe hasil action tambah dan edit proyek
export type ProjectActionState = {
  success: boolean;
  error: string | null;
};

// Memastikan pengguna sudah login
async function getSupabase() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  return supabase;
}

// Mengambil data dari form
function readProject(formData: FormData) {
  const text = (key: string) =>
    String(formData.get(key) ?? "").trim();

  return {
    slug: text("slug"),
    title: text("title"),
    category: text("category"),
    description: text("description"),
    detail_description: text("detail_description"),
    image: text("image"),
    tags: text("tags")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    technologies: text("technologies")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    liveURL: text("liveURL"),
    githubURL: text("githubURL"),
  };
}

// Validasi data proyek
function validate(project: ReturnType<typeof readProject>) {
  if (
    !project.slug ||
    !project.title ||
    !project.category ||
    !project.description
  ) {
    throw new Error(
      "Slug, judul, kategori, dan deskripsi wajib diisi."
    );
  }
}

// Mengunggah foto proyek ke Supabase Storage
async function uploadProjectImage(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  formData: FormData,
  existingImage: string
): Promise<string> {
  const file = formData.get("imageFile");

  // Jika tidak memilih foto baru, gunakan foto yang lama
  if (!(file instanceof File) || file.size === 0) {
    return existingImage;
  }

  // Validasi format foto
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Format foto harus JPG, PNG, atau WebP."
    );
  }

  // Maksimal ukuran file 5 MB
  if (file.size > 5 * 1024 * 1024) {
    throw new Error(
      "Ukuran foto maksimal 5 MB."
    );
  }

  // Menentukan ekstensi file
  const extension =
    file.type === "image/jpeg"
      ? "jpg"
      : file.type === "image/png"
        ? "png"
        : "webp";

  // Membuat nama file unik
  const filePath = `${crypto.randomUUID()}.${extension}`;

  // Upload ke bucket Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(filePath, file, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    throw new Error(
      `Gagal mengunggah foto: ${uploadError.message}`
    );
  }

  // Mendapatkan URL publik foto
  const { data } = supabase.storage
    .from("project-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

// Memperbarui cache halaman
function refreshPortfolio() {
  revalidatePath("/admin/proyek");
  revalidatePath("/");
  revalidatePath("/projects");
}

// ========================================
// TAMBAH PROYEK
// ========================================
export async function createProject(
  _prevState: ProjectActionState,
  formData: FormData
): Promise<ProjectActionState> {
  try {
    const supabase = await getSupabase();
    const project = readProject(formData);

    validate(project);

    // Upload foto jika pengguna memilih file
    project.image = await uploadProjectImage(
      supabase,
      formData,
      project.image
    );

    const { error } = await supabase
      .from("Projects")
      .insert(project);

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    refreshPortfolio();

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Gagal menambahkan proyek.",
    };
  }
}

// ========================================
// EDIT PROYEK
// ========================================
export async function updateProject(
  _prevState: ProjectActionState,
  formData: FormData
): Promise<ProjectActionState> {
  try {
    const supabase = await getSupabase();

    const id = String(formData.get("id") ?? "").trim();

    if (!id) {
      return {
        success: false,
        error: "ID proyek tidak ditemukan.",
      };
    }

    const project = readProject(formData);

    validate(project);

    // Foto lama tetap digunakan jika tidak memilih foto baru
    project.image = await uploadProjectImage(
      supabase,
      formData,
      project.image
    );

    const { error } = await supabase
      .from("Projects")
      .update(project)
      .eq("id", id);

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    refreshPortfolio();

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Gagal memperbarui proyek.",
    };
  }
}

// ========================================
// HAPUS PROYEK
// ========================================
export async function deleteProject(formData: FormData) {
  const supabase = await getSupabase();

  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    throw new Error("ID proyek tidak ditemukan.");
  }

  const { error } = await supabase
    .from("Projects")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  refreshPortfolio();
}

// ========================================
// LOGOUT ADMIN
// ========================================
// export async function logoutAction() {
//   const supabase = await getSupabase();

//   await supabase.auth.signOut();

//   redirect("/admin/login?door=nauval");
// }


export async function logoutAction() {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(`Logout gagal: ${error.message}`);
  }

  redirect("/admin/login?door=nauval");
}
