
import { redirect } from "react-router";
import { supabaseContext } from "~/context";

export type UserRole = "admin" | "client";

export async function requireRole(
  context: {
    get: typeof supabaseContext.get;
  },
  requiredRole: UserRole
) {
  const supabase = context.get(supabaseContext);

  const { data, error } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  if (error || !userId) {
    throw redirect("/login");
  }

  const { data: profile, error: profileError } =
    await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

  if (
    profileError ||
    profile?.role !== requiredRole
  ) {
    throw redirect("/acesso-negado");
  }

  return { userId, role: profile.role };
}
