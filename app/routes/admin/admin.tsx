import type { Route } from "./+types/admin";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - visão geral' }
    ]
}

export default function admin() {
    return (
        <div>
            h
        </div>
    );
}