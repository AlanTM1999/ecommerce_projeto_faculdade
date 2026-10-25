import { createBrowserClient } from "@supabase/ssr";

let browserClient:
    | ReturnType<typeof createBrowserClient>
    | undefined;

export function getSupabaseBrowserClient(){
    if(typeof document === "undefined"){
        throw new Error(
            "O cliente Supabase do navegador não pode ser usado no servidor."
        );
    }

    browserClient ??=createBrowserClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
    );

    return browserClient;
}
