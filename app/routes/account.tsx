import { Form } from "react-router";
import Box from "~/components/Box";
import ClientMain from "~/components/client-component/Client.Main";
import ClientOrder from "~/components/client-component/Client.Order";
import ClientPage from "~/components/client-component/Client.Page";
import ClientSection from "~/components/client-component/Client.Section";

export function meta(){
    return [
        { title: "Vértice - conta" }
    ]
}

export default function Account() {
    

    return (
        <ClientMain>
            <div className="max-w-244 mx-auto">
                <ClientPage
                    title="meus pedidos"
                    description="Acompanhe o status de cada compra"
                />
                <ClientSection title="pedidos">
                    <div className="space-y-4">
                        <ClientOrder
                            order={"#1045"}
                            date="17/10/2026 &bull; 3 itens &bull; R$ 279,60 &bull; Pix"
                            step={100}
                        />
                        <ClientOrder
                            order={"#1045"}
                            date="17/10/2026 &bull; 3 itens &bull; R$ 279,60 &bull; Pix"
                            step={0}
                        />
                    </div>
                </ClientSection>
                <ClientSection title="dados">
                    <Box>
                        <Form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5">
                                <label className="block col-span-1">
                                    <span className="uppercase block text-xs mb-1">nome</span>
                                    <input
                                        className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                        type="text"
                                        name="name"
                                    />
                                </label>
                                <label className="block col-span-1">
                                    <span className="uppercase block text-xs mb-1">e-mail</span>
                                    <input
                                        className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                        type="email"
                                        name="email"
                                    />
                                </label>
                                <label className="block col-span-1 md:col-span-2">
                                    <span className="uppercase block text-xs mb-1">endereço</span>
                                    <input
                                        className="w-full block h-11.25 border border-vertice-400 px-3 focus:border-vertice-50"
                                        type="text"
                                        name="address"
                                    />
                                </label>
                            </div>
                        </Form>
                    </Box>
                </ClientSection>
            </div>
        </ClientMain>
    );
}
