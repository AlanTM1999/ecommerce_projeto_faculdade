import { Form } from "react-router";
import type { Route } from "./+types/admin.auth";
import { ClientTabContent, ClientTabProvider } from "~/components/client-component/Client.Tab";
import Button from "~/components/Button";

export function meta({}:Route.MetaArgs){
    return [
        { title: "Admin Auth" }
    ]
}

export default function admin_auth() {
    return (
        <div className="mx-auto w-full max-w-100">
            <div className="mb-2 uppercase font-semibold text-[20px] tracking-[.32em]">Vértice</div>
            <div className="uppercase text-base mb-7 text-vertice-100 tracking-[.2em]">Painel administrativo</div>
            <Form className="space-y-4" action="/api/auth" method="POST">
                <label className="block">
                    <span className="uppercase block text-xs mb-1">e-mail</span>
                    <input
                        className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                        type="email"
                        name="email"
                        placeholder="voce@email.com"
                    />
                </label>
                <label className="block">
                    <span className="uppercase block text-xs mb-1">senha</span>
                    <input
                        className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </label>
                <Button type="submit" className="w-full cursor-pointer">entrar</Button>
            </Form>
        </div>
    );
}