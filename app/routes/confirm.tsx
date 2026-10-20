import ClientMain from "~/components/client-component/Client.Main";
import Container from "~/components/Container";

export function meta(){
    return [
        { title: "Pagamento confirmado" }
    ]
}

export default function confirm() {
    return (
        <ClientMain>
            <Container>
                <div className="mx-auto w-full max-w-xl">
                    <div className="border-2 w-15 h-15 rounded-full flex items-center justify-center text-2xl mb-4.5">&#10004;</div>
                    <h1 className="uppercase font-bold text-[24px] tracking-[0.08em] mb-1.5">pedido confirmado</h1>
                    <p className="text-vertice-100 mb-6">Enviamos os detalhes para email@exemplo.com</p>
                </div>
            </Container>
        </ClientMain>
    );
}