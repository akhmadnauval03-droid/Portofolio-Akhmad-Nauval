
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import ProjectDashboard from "./ProjectDashboard";

export const dynamic = "force-dynamic";

export default async function AdminProyekPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const { data, error } = await supabase
  .from("Projects")
  .select("*")
  .order("id", { ascending: false });

  return (
    <ProjectDashboard
      projects={data ?? []}
      userEmail={user.email ?? ""}
      databaseError={error?.message ?? null}
    />
  );
}
