import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin";
import GeneralBox from "~/components/GeneralBox";
import coin from "~/functions/coin";
import Box from "~/components/Box";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - visão geral' }
    ]
}

export default function admin() {
    return (
        <AdminPage page="Visão geral" description="Resumo da loja nos últimos 7 dias">
            <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4">
                    <GeneralBox title="vendas">
                        <div className="text-3xl font-bold">{coin(18400)}</div>
                    </GeneralBox>
                    <GeneralBox title="pedidos">
                        <div className="text-3xl font-bold">132</div>
                    </GeneralBox>
                    <GeneralBox title="produtos">
                        <div className="text-3xl font-bold">8</div>
                    </GeneralBox>
                    <GeneralBox title="ticket médio">
                        <div className="text-3xl font-bold">{coin(139)}</div>
                    </GeneralBox>
                </div>
                <Box>
                    <h3 className="uppercase text-[12px] tracking-[.14em] mb-3.5 font-bold">Estoque baixo</h3>
                    <ul>
                        <li className="text-base flex items-center justify-between not-last:border-b border-vertice-400 py-3">
                            <span className="block">Camiseta Oversized Cinza</span>
                            <span className="block font-bold">{3} un.</span>
                        </li>
                        <li className="text-base flex items-center justify-between not-last:border-b border-vertice-400 py-3">
                            <span className="block">Camiseta Oversized Cinza</span>
                            <span className="block font-bold">{2} un.</span>
                        </li>
                    </ul>
                </Box>
            </div>
        </AdminPage>
    );
}