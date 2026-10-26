import Badge from "~/components/Badge";
import Box from "~/components/Box";
import Button from "~/components/Button";
import ClientMain from "~/components/client-component/Client.Main";
import Container from "~/components/Container";
import coin from "~/functions/coin";

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
                    <div>
                        <div className="border-2 w-15 h-15 rounded-full flex items-center justify-center text-2xl mb-4.5">&#10004;</div>
                        <h1 className="uppercase font-bold text-[24px] tracking-[0.08em] mb-1.5">pedido confirmado</h1>
                        <p className="text-vertice-100 mb-6">Enviamos os detalhes para email@exemplo.com</p>
                    </div>
                    <div className="space-y-5">
                        <Box>
                            <ul className="text-base">
                                <li className="py-3 flex items-center justify-between">
                                    <span className="block">Pedido</span>
                                    <span className="block font-bold">#1045</span>
                                </li>
                                <li className="py-3 flex items-center justify-between">
                                    <span className="block">Data</span>
                                    <span className="block">17/10/2026</span>
                                </li>
                                <li className="py-3 flex items-center justify-between">
                                    <span className="block">Data</span>
                                    <span className="block">Pix &bull; <Badge variant={"wait"}/></span>
                                </li>
                                <li className="py-3 border-t border-vertice-50 font-bold flex items-center justify-between text-lg">
                                    <span className="block">Total</span>
                                    <span className="block">{coin(200)}</span>
                                </li>
                            </ul>
                        </Box>
                        <Box>
                            <h3 className="uppercase tracking-[.14em] mb-3.5 text-[12px] text-center font-bold">Pague com Pix</h3>
                            <div className="mx-auto w-40 h-40 bg-vertice-400"></div>
                            <p className="text-base text-vertice-100 mt-2.5 text-center">Código copia e cola ou QR Code</p>
                        </Box>
                        <Button type="button" className="w-full">Acompanhar pedido</Button>
                        <Button type="button" variant="outline" className="w-full">continuar comprando</Button>
                    </div>
                </div>
            </Container>
        </ClientMain>
    );
}