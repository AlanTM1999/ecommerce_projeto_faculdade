import { ClientTabContent, ClientTabProvider } from "~/components/client-component/Client.Tab";
import type { Route } from "./+types/auth";
import { Form } from "react-router";
import Button from "~/components/Button";

export function meta({}:Route.MetaArgs){
    return [
        { title: "Auth" }
    ]
}

export default function auth() {
    return (
        <div className="mx-auto w-full max-w-100">
            <div className="mb-7 uppercase font-semibold text-[20px] tracking-[.32em]">Vértice</div>
            <ClientTabProvider tabs={[
                ["entrar", 1],
                ["criar conta", 2]
            ]}>
                <ClientTabContent tab={1}>
                    <Form className="space-y-4">
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
                </ClientTabContent>
                <ClientTabContent tab={2}>
                    <Form className="space-y-4">
                        <label className="block">
                            <span className="uppercase block text-xs mb-1">nome completo</span>
                            <input
                                className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                type="text"
                                name="full_name"
                            />
                        </label>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">cpf</span>
                                <input
                                    className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                    type="type"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                />
                            </label>
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">telefone</span>
                                <input
                                    className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                    type="tel"
                                    name="phone"
                                    placeholder="(00) 00000-0000"
                                />
                            </label>
                        </div>
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
                        <Button type="submit" className="w-full cursor-pointer">criar conta</Button>
                    </Form>
                </ClientTabContent>
            </ClientTabProvider>
        </div>
    );
}