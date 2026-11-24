import type { APIRoute } from "astro";
import { createSupabaseServer } from "../../../lib/supabase/server";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");

  const supabase = createSupabaseServer(request, cookies);
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return redirect("/login?error=1");
  return redirect("/");
};
