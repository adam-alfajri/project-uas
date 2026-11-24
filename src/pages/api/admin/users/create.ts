import type { APIRoute } from "astro";
import { createSupabaseServer } from "../../../../lib/supabase/server";
import { supabaseAdmin } from "../../../../lib/supabase/admin";

export const POST: APIRoute = async ({
  request,
  cookies,
  redirect,
  locals,
}) => {
  // Cek role di server, jangan hanya di frontend
  const supabase = createSupabaseServer(request, cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return redirect("/login");

  const { data: me } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  if (me?.role !== "admin") return redirect("/?error=forbidden");

  const form = await request.formData();
  const username = String(form.get("username") ?? "");
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");
  const role = String(form.get("role") ?? "user");

  // Buat user di auth. Trigger akan membuat profil otomatis.
  const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { username },
  });
  if (error)
    return redirect("/admin/users?error=" + encodeURIComponent(error.message));

  // Set role. Trigger hanya mengisi username dan role default 'user'.
  await supabaseAdmin
    .from("profiles")
    .update({ role })
    .eq("id", created.user.id);

  return redirect("/admin/users?success=1");
};
