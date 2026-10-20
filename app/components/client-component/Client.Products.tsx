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
            <img src={cover} height={405} width={304} alt="" className="w-full h-auto"/>
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
    children?:ReactNode;
    cols?:4 | 3;
}
function ClientProducts({ children, cols=4 }:ClientProductsProps) {
    return (
        <div className={`w-full grid grid-cols-1 gap-3 sm:grid-cols-2 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
            {children}
        </div>
    );
}

export {
    ClientProducts,
    ClientProductCard
}
