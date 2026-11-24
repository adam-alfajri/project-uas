import { defineMiddleware } from "astro:middleware";
import { createSupabaseServer } from "./lib/supabase/server";

const PUBLIC_PATHS = ["/login", "/api/auth/login"];

export const onRequest = defineMiddleware(async (ctx, next) => {
  const supabase = createSupabaseServer(ctx.request, ctx.cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !PUBLIC_PATHS.includes(ctx.url.pathname)) {
    return ctx.redirect("/login");
  }

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("username, role")
      .eq("id", user.id)
      .single();
    ctx.locals.profile = profile ?? null;
  }

  // Halaman khusus admin
  if (
    ctx.url.pathname.startsWith("/admin") &&
    ctx.locals.profile?.role !== "admin"
  ) {
    return ctx.redirect("/");
  }

  return next();
});
