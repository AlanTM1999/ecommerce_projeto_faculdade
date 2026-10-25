import Container from "../Container";
import ClientBadgeFooter from "./Client.Badge.Footer";


export default function ClientFooter() {
    return (
        <footer className="border-t border-vertice-400 py-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
                    <ClientBadgeFooter title="vértice">
                        <p>Projeto acadêmico</p>
                    </ClientBadgeFooter>
                    <ClientBadgeFooter title="ajuda">
                        <ul>
                            <li>Trocas</li>
                            <li>Entregas</li>
                            <li>Contato</li>
                        </ul>
                    </ClientBadgeFooter>
                    <ClientBadgeFooter title="institucional">
                        <ul>
                            <li>Sobre nós</li>
                            <li>Lojas</li>
                            <li>Privacidades</li>
                        </ul>
                    </ClientBadgeFooter>
                    <ClientBadgeFooter title="pagamento">
                        <p>Pix &bull; Cartão &bull; Boleto</p>
                    </ClientBadgeFooter>
                </div>
            </Container>
        </footer>
    );
}
