import type { ReactNode } from "react";
import { Link } from "react-router";
import coin from "~/functions/coin";
import Container from "../Container";

type ClientProductCardProps = {
    slug:string;
    cover:string;
    categorie:string;
    product_name:string;
    price:[number, number?];
}
function ClientProductCard({ cover, categorie, product_name, price }:ClientProductCardProps){
    return (
        <div>
            <img src={cover} height={405} width={304} alt=""/>
            <div>{categorie}</div>
            <Link to="/">{product_name}</Link>
            <div>
                <span>{coin(!price[1] ? price[0]: price[1])}</span>
                {price[1] && <span className="line-through">{coin(price[0])}</span>}
            </div>
        </div>
    )
}

type ClientProductsProps = {
    children?:ReactNode
}
function ClientProducts({ children }:ClientProductsProps) {
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {children}
            </div>
        </Container>
    );
}

export {
    ClientProducts,
    ClientProductCard
}
