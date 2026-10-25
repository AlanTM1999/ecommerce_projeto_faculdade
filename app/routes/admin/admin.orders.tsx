import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin.orders";
import Box from "~/components/Box";
import Table from "~/components/Table";
import coin from "~/functions/coin";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - pedidos' }
    ]
}

export default function admin_orders() {
    return (
        <AdminPage page="pedidos" description="Acompanhe status e pagamento.">
            <Box>
                <Table
                    head={[
                        [
                            [<>N°</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>cliente</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>data</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>total</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>pagamento</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>status</>, 1, "th", "text-vertice-100 text-base uppercase"]
                        ]
                    ]}
                    body={[
                        [[<>#1042</>],[<>Marina Souza</>],[<>15/10/2026</>],[<>{coin(259.80)}</>],[<>Pix</>],[<>entrege</>]],
                        [[<>#1043</>],[<>Carlos Lima</>],[<>16/10/2026</>],[<>{coin(129.90)}</>],[<>Cartão</>],[<>em separação</>]],
                        [[<>#1044</>],[<>Ana Paula R.</>],[<>17/10/2026</>],[<>{coin(389.70)}</>],[<>Boleto</>],[<>Aguardando</>]]
                    ]}
                />
            </Box>
        </AdminPage>
    );
}