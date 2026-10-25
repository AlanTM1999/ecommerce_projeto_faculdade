import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin.categories";
import Box from "~/components/Box";
import Table from "~/components/Table";
import { Form } from "react-router";
import Button from "~/components/Button";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - categorias' }
    ]
}

export default function admin_categories() {
    return (
        <AdminPage page="categorias" description="Organizam o menu e a home da loja.">
            <div className="grid grid-cols-[1fr_400px] gap-5">
                <div>
                    <Box>
                        <h2 className="uppercase font-bold tracking-[.08em] mb-1">Lista</h2>
                        <Table
                            head={[
                                [
                                    [<>cód.</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<>Nome</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<>produtos</>, 1, "th", "text-vertice-100 text-base uppercase"]
                                ]
                            ]}
                            body={[
                                [
                                    [<>C1</>],
                                    [<>Camisetas</>],
                                    [<>2</>]
                                ],
                                [
                                    [<>C2</>],
                                    [<>Moletons</>],
                                    [<>2</>]
                                ],
                                [
                                    [<>C3</>],
                                    [<>Calças</>],
                                    [<>2</>]
                                ],
                                [
                                    [<>C4</>],
                                    [<>Acessórios</>],
                                    [<>2</>]
                                ]
                            ]}
                        />
                    </Box>
                </div>
                <div>
                    <Box>
                        <Form className="space-y-4">
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">categoria</span>
                                <input
                                    className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                    type="text"
                                    name="categorie"
                                    required
                                />
                            </label>
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">Descrição</span>
                                <textarea
                                    className="w-full block h-11.25 border border-vertice-400 min-h-25 p-3 focus:border-vertice-50"
                                    name="description"
                                />
                            </label>
                            <Button type="submit" className="w-full cursor-pointer">salvar</Button>
                        </Form>
                    </Box>
                </div>
            </div>
        </AdminPage>
    );
}