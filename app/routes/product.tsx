import ClientMain from "~/components/client-component/Client.Main";
import { ClientProductImage, ClientProductInfo, ClientProductProvider } from "~/components/client-component/Client.Product";
import Container from "~/components/Container";
import type { Route } from "./+types/product";

export function meta({}:Route.MetaArgs){
    return [
        { title: 'Vértice - produto' }
    ]
}

export default function Product() {
    

    return (
        <ClientProductProvider>
            <ClientMain>
                <Container>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px]">
                        <div>
                            <ClientProductImage/>
                        </div>
                        <div>
                            <ClientProductInfo/>
                        </div>
                    </div>
                </Container>
            </ClientMain>
        </ClientProductProvider>
    );
}
