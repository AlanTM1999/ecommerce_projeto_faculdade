import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin.clients";
import Box from "~/components/Box";
import Table from "~/components/Table";
import { Link } from "react-router";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - clientes' }
    ]
}

export default function admin_clients() {
    return (
        <AdminPage page="clientes" description="Consulta de clientes cadastrados na loja.">
            <Box>
                <Table
                    head={[
                        [
                            [<>nome</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>cpf</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>e-mail</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>telefone</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<>pedidos</>, 1, "th", "text-vertice-100 text-base uppercase"],
                            [<></>]
                        ]
                    ]}
                    body={[
                        [
                            [<>Marina Souza</>],
                            [<>123.456.789‑00</>],
                            [<>marina@email.com</>],
                            [<>(11) 98888‑7777</>],
                            [<>2</>],
                            [<Link className="text-vertice-100 hover:underline" to="/admin/order/11">Ver</Link>]
                        ],
                        [
                            [<>Carlos Lima</>],
                            [<>987.654.321‑00</>],
                            [<>carlos@email.com</>],
                            [<>(21) 97777‑6666</>],
                            [<>1</>],
                            [<Link className="text-vertice-100 hover:underline" to="/admin/order/11">Ver</Link>]
                        ],
                        [
                            [<>Ana Paula R.</>],
                            [<>456.123.789‑00</>],
                            [<>ana@email.com</>],
                            [<>(31) 96666‑5555</>],
                            [<>1</>],
                            [<Link className="text-vertice-100 hover:underline" to="/admin/order/11">Ver</Link>]
                        ]
                    ]}
                />
            </Box>
        </AdminPage>
    );
}