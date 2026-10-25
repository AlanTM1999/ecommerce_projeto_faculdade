import { createContext } from "react-router";
import type { SupabaseClient } from "@supabase/supabase-js";

export const supabaseContext = createContext<SupabaseClient>();