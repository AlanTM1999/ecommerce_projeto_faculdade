import {
    createServerClient,
    parseCookieHeader,
    serializeCookieHeader
} from "@supabase/ssr";

import type { CookieOptions } from "@supabase/ssr";
import type { MiddlewareFunction } from "react-router";

import { supabaseContext } from "~/context";

type PendingCookie = {
    name: string;
    value: string;
    options: CookieOptions
}

export const supabaseMiddleware: MiddlewareFunction<Response> = async ({ request, context }, next) => {
    const headers = new Headers();

    const supabase = createServerClient(
        process.env.VITE_SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies:{
                getAll(){
                    return parseCookieHeader(
                        request.headers.get("Cookie") ?? ""
                    );
                },

                setAll(cookieToSet, responseHeaders){
                    for(const cookie of cookieToSet){
                        headers.append(
                            "Set-Cookie",
                            serializeCookieHeader(
                                cookie.name,
                                cookie.value,
                                cookie.options
                            )
                        )
                    }

                    for(const [name, value] of Object.entries(responseHeaders ?? {})){
                        headers.set(name, value);
                    }
                }
            }
        }
    );

    const { error } = await supabase.auth.getClaims();

    if (error) {

    }

    context.set(supabaseContext, supabase);

    const response = await next();

    headers.forEach((value, name) => {
      if (name.toLowerCase() === "set-cookie") {
        response.headers.append(name, value);
      } else {
        response.headers.set(name, value);
      }
    });

    return response;
}