import { createClient } from "@supabase/supabase-js";

// HANYA dipakai di server. Jangan import file ini dari komponen React.
export const supabaseAdmin = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
