import { cloneElement, type ReactElement, type ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router";
import Container from "~/components/Container";

type AsideItemProps = {
    render?:ReactElement<{ children:ReactNode, className:string }>;
    children?:ReactNode;
    isActive?:boolean;
}
const AsideItem = ({ render, children, isActive=false }:AsideItemProps) => {
    const className = "px-5 py-2 block text-base border-l-3 w-full outline-none " + (isActive ? "border-vertice-50 bg-vertice-300" : "border-transparent hover:bg-vertice-300");
    const element = render ? cloneElement(render, { children, className }) : null;
    return (
        <li>
            {element ? <>{element}</> : <span className={className}>{children}</span>}
        </li>
    )
}

export default function AdminLayout() {
    const { pathname } = useLocation();
    return (
        <div className="grid grid-cols-[210px_1fr] h-dvh">
            <div>
                <aside className="max-h-dvh sticky top-0 bg-vertice-400 border-vertice-100 border-r-[0.5px] pt-5 h-full">
                    <div className="uppercase font-semibold text-lg tracking-[.32em] px-6 mb-3">
                        Vértice
                    </div>
                    <ul>
                        <AsideItem isActive={pathname==="/admin"} render={<Link to={"/admin"}/>}>
                            Visão geral
                        </AsideItem>
                        <AsideItem isActive={pathname==="/admin/products"} render={<Link to={"/admin/products"}/>}>
                            Produtos
                        </AsideItem>
                        <AsideItem isActive={pathname==="/admin/categories"} render={<Link to={"/admin/categories"}/>}>
                            Categorias
                        </AsideItem>
                        <AsideItem isActive={pathname==="/admin/orders"} render={<Link to={"/admin/orders"}/>}>
                            Pedidos
                        </AsideItem>
                        <AsideItem isActive={pathname==="/admin/clients"} render={<Link to={"/admin/clients"}/>}>
                            Clientes
                        </AsideItem>
                    </ul>
                </aside>
            </div>
            <div className="py-15">
                <Container>
                    <Outlet/>
                </Container>
            </div>
        </div>
    );
}
