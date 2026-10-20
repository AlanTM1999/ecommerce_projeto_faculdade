import { ClientCartItems, ClientCartPrices, ClientCartProvider } from "~/components/client-component/Client.Cart";
import ClientMain from "~/components/client-component/Client.Main";
import Container from "~/components/Container";
import type { Route } from "./+types/cart";

export function meta({}:Route.MetaArgs){
    return [
        { title: "Carrinho" }
    ]
}

export default function cart() {
    return (
        <ClientMain>
            <Container>
                <ClientCartProvider>
                    <div className="mx-auto w-full max-w-260">
                        <div>
                            <h1 className="tracking-[.08em] uppercase text-[24px] font-semibold mb-0.5">carrinho</h1>
                            <div className="text-vertice-100">0 itens</div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-4">
                            <ClientCartItems/>
                            <div>
                                <div className="sticky top-17.5">
                                    <ClientCartPrices/>
                                </div>
                            </div>
                        </div>
                    </div>
                </ClientCartProvider>
            </Container>
        </ClientMain>
    );
}