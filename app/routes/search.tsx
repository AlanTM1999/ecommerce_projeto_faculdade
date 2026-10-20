import { Form, useSearchParams } from "react-router";
import Button from "~/components/Button";
import ClientGroup from "~/components/client-component/Client.Group";
import ClientMain from "~/components/client-component/Client.Main";
import { ClientProductCard, ClientProducts } from "~/components/client-component/Client.Products";
import Container from "~/components/Container";
import coin from "~/functions/coin";

export function meta(){
    return [
        { title: "Search" }
    ]
}

export default function search() {
    const [queryParams] = useSearchParams();
    const params = queryParams.getAll("filter");
    console.log(params);
    return (
        <ClientMain>
            <Container>
                <Form method="GET" action="/search" className="w-full max-w-300 mx-auto space-y-4">
                    <input
                        type="text"
                        name="s"
                        placeholder="Busca"
                        className="block w-full border-b border-vertice-50 h-15 px-3"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-3">
                        <aside className="space-y-7">
                            <ClientGroup label="filtros">
                                {Array.from({ length: 6 }).map((_,index) => (
                                    <li key={index}>
                                        <label className="border-b-2 flex items-center justify-between border-vertice-400 py-2 px-1">
                                            <span className="inline-flex gap-2">
                                                <input type="checkbox" name="filter" value={index}/>
                                                Camisetas
                                            </span>
                                            <span>50</span>
                                        </label>
                                    </li>
                                ))}
                            </ClientGroup>

                            <ClientGroup label="filtros">
                                <li>
                                    <ul>
                                        <li>
                                            <input type="range" name="price" className="w-full" min={0} max={100}/>
                                        </li>
                                        <li className="text-base flex items-center justify-between border-vertice-400 py-2 px-1">
                                            <span>{coin(0)}</span>
                                            <span>{coin(400)}</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>

                                </li>
                            </ClientGroup>
                            <Button type="submit" className="w-full">filtrar</Button>
                        </aside>
                        <div className="flex justify-center">
                            <ClientProducts cols={3}>
                                {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
                                    <ClientProductCard
                                        key={n}
                                        cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
                                        categorie={`categorie ${n}`}
                                        product_name="ProductName"
                                        price={[89.95, 45]}
                                        slug={"product-name"}
                                    />
                                ))}
                            </ClientProducts>
                        </div>
                    </div>
                </Form>
            </Container>
        </ClientMain>
    );
}