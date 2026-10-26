import { Link, useLocation } from "react-router";
import Container from "../Container";
import { ClientNavigate, ClientNavLink } from "./Client.Navigate";
import { ClientMobileBadge, ClientMobileButton, ClientMobileMenu, ClientMobileProvider, ClientMobileTrigger } from "./Client.Mobile";

export default function ClientHeader(){
    const { pathname } = useLocation();
    return (
        <ClientMobileProvider>
            <header className="flex items-center border-b border-vertice-400 max-w-full sticky top-0 left-0 right-0 bg-vertice-300 z-10">
                <Container>
                    <nav className="flex items-center justify-between">
                        <ClientNavigate className="hidden lg:flex">
                            <ClientNavLink to={`/#novidade`}>novidades</ClientNavLink>
                            <ClientNavLink to={`/#masculino`}>masculino</ClientNavLink>
                            <ClientNavLink to={`/#feminino`}>feminino</ClientNavLink>
                            <ClientNavLink to={`/#acessorio`}>acessório</ClientNavLink>
                            <ClientNavLink to={`/#outlet`}>outlet</ClientNavLink>
                        </ClientNavigate>
                        <Link to="/" className="uppercase font-bold text-2xl tracking-widest">vértice</Link>
                        <ClientNavigate className="hidden lg:flex">
                            <ClientNavLink to="/search">buscar</ClientNavLink>
                            <ClientNavLink to="/auth">conta</ClientNavLink>
                            <ClientNavLink to="/cart">carrinho</ClientNavLink>
                        </ClientNavigate>
                        <ClientMobileTrigger/>
                        <ClientMobileMenu>
                            <ClientMobileBadge title="menu 1">
                                <ClientMobileButton render={<Link to={'/#novidade'}/>}>novidades</ClientMobileButton>
                                <ClientMobileButton render={<Link to={'/#masculino'}/>}>masculino</ClientMobileButton>
                                <ClientMobileButton render={<Link to={'/#feminino'}/>}>feminino</ClientMobileButton>
                                <ClientMobileButton render={<Link to={'/#acessorio'}/>}>acessório</ClientMobileButton>
                                <ClientMobileButton render={<Link to={'/#outlet'}/>}>outlet</ClientMobileButton>
                            </ClientMobileBadge>
                            <ClientMobileBadge title="menu 2">
                                <ClientMobileButton render={<Link to="/search"/>}>buscar</ClientMobileButton>
                                <ClientMobileButton render={<Link to="/auth"/>}>conta</ClientMobileButton>
                                <ClientMobileButton render={<Link to="/cart"/>}>carrinho</ClientMobileButton>
                            </ClientMobileBadge>
                        </ClientMobileMenu>
                    </nav>
                </Container>
            </header>
        </ClientMobileProvider>
    )
}