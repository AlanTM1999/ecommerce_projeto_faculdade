import AdminPage from "~/components/admin-component/AdminPage";
import type { Route } from "./+types/admin.products";
import Box from "~/components/Box";
import Button from "~/components/Button";
import { Form, Link } from "react-router";
import Table from "~/components/Table";
import ItemProduct from "~/components/ItemProduct";
import coin from "~/functions/coin";
import InputImage from "~/components/InputImage";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vertice - produtos' }
    ]
}

export default function admin_products() {
    return (
        <AdminPage page="Produtos" description="Cadastre e edite o que aparece na vitrine.">
            <div className="grid grid-cols-[1fr_400px] gap-5">
                <div>
                    <Box>
                        <h2 className="uppercase font-bold tracking-[.08em] mb-1">catálogo</h2>
                        <Table
                            head={[
                                [
                                    [<>produtos</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<>categoria</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<>preço</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<>estoque</>, 1, "th", "text-vertice-100 text-base uppercase"],
                                    [<></>]
                                ]
                            ]}
                            body={[
                                [
                                    [<ItemProduct
                                        src={"https://placehold.co/45x45/1A1A1A/FFFFFF/png"}
                                        title="Lorem Ipsummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"/>
                                    ],
                                    [<>Camisetas</>],
                                    [<>{coin(300)}</>],
                                    [<>300</>],
                                    [
                                        <ul className="flex items-center gap-3 justify-between">
                                            <li>
                                                <Link to="/admin/product/11" className="hover:underline text-vertice-100">Ver</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/produt/11/delete" className="hover:underline text-vertice-100">Deletar</Link>
                                            </li>
                                        </ul>
                                    ]
                                ],
                                [
                                    [<ItemProduct
                                        src={"https://placehold.co/45x45/1A1A1A/FFFFFF/png"}
                                        title="Lorem Ipsummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"/>
                                    ],
                                    [<>Moletons</>],
                                    [<>{coin(300)}</>],
                                    [<>300</>],
                                    [
                                        <ul className="flex items-center gap-3 justify-between">
                                            <li>
                                                <Link to="/admin/product/11" className="hover:underline text-vertice-100">Ver</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/produt/11/delete" className="hover:underline text-vertice-100">Deletar</Link>
                                            </li>
                                        </ul>
                                    ]
                                ],
                                [
                                    [<ItemProduct
                                        src={"https://placehold.co/45x45/1A1A1A/FFFFFF/png"}
                                        title="Lorem Ipsummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"/>
                                    ],
                                    [<>Calças</>],
                                    [<>{coin(300)}</>],
                                    [<>300</>],
                                    [
                                        <ul className="flex items-center gap-3 justify-between">
                                            <li>
                                                <Link to="/admin/product/11" className="hover:underline text-vertice-100">Ver</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/produt/11/delete" className="hover:underline text-vertice-100">Deletar</Link>
                                            </li>
                                        </ul>
                                    ]
                                ],
                                [
                                    [<ItemProduct
                                        src={"https://placehold.co/45x45/1A1A1A/FFFFFF/png"}
                                        title="Lorem Ipsummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"/>
                                    ],
                                    [<>Acessórios</>],
                                    [<>{coin(300)}</>],
                                    [<>300</>],
                                    [
                                        <ul className="flex items-center gap-3 justify-between">
                                            <li>
                                                <Link to="/admin/product/11" className="hover:underline text-vertice-100">Ver</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/produt/11/delete" className="hover:underline text-vertice-100">Deletar</Link>
                                            </li>
                                        </ul>
                                    ]
                                ]
                            ]}
                        />
                    </Box>
                </div>
                <div>
                    <Box>
                        <h2 className="uppercase font-bold tracking-[.08em] mb-1">Novo produto</h2>
                        <Form className="space-y-4">
                            <InputImage/>
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">nome</span>
                                <input
                                    className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50 outline-none"
                                    type="text"
                                    name="product"
                                    required
                                />
                            </label>
                            <label className="block">
                                <span className="uppercase block text-xs mb-1">Descrição</span>
                                <textarea
                                    className="w-full block h-11.25 border border-vertice-400 min-h-25 p-3 focus:border-vertice-50 outline-none"
                                    name="description"
                                />
                            </label>
                            <select
                                className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50 bg-vertice-300 outline-none"
                            >
                                <option value="1">Camisetas</option>
                                <option value="1">Moletons</option>
                                <option value="1">Calças</option>
                                <option value="1">Acessórios</option>
                            </select>
                            <Button
                                type="submit"
                                className="w-full cursor-pointer"
                            >Publicar produto</Button>
                        </Form>
                    </Box>
                </div>
            </div>
        </AdminPage>
    );
}