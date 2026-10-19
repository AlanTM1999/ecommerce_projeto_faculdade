import { Link, useLocation } from "react-router";
import Container from "../Container";
import { ClientNavigate, ClientNavLink } from "./Client.Navigate";

export default function ClientHeader(){
    const { pathname } = useLocation();
    return (
        <header className="py-6 border-b border-vertice-400">
            <Container>
                <nav className="flex items-center justify-between">
                    <ClientNavigate>
                        <ClientNavLink to={`/#novidade`}>novidades</ClientNavLink>
                        <ClientNavLink to={`/#masculino`}>masculino</ClientNavLink>
                        <ClientNavLink to={`/#feminino`}>feminino</ClientNavLink>
                        <ClientNavLink to={`/#acessorio`}>acessório</ClientNavLink>
                        <ClientNavLink to={`/#outlet`}>outlet</ClientNavLink>
                    </ClientNavigate>
                    <Link to="/">LOGO</Link>
                    <ClientNavigate>
                        <ClientNavLink to="/search">buscar</ClientNavLink>
                        <ClientNavLink to="/auth">conta</ClientNavLink>
                        <ClientNavLink to="/cart">carrinho</ClientNavLink>
                    </ClientNavigate>
                </nav>
            </Container>
        </header>
    )
}