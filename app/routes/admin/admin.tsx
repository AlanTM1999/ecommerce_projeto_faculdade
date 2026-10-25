import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - visão geral' }
    ]
}

export default function admin() {
    return (
        <AdminPage page="Visão geral" description="Resumo da loja nos últimos 7 dias">

        </AdminPage>
    );
}