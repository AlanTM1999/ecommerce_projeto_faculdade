import type { ComponentProps, ReactNode } from "react";
import { Link, type To } from "react-router";
import Container from "../Container";

interface ClientProductsProps extends Omit<ComponentProps<"section">, "className"> {
    title:string
    to?:To,
    children?:ReactNode
}

export default function ClientSection({ title, to, children, ...props }: ClientProductsProps) {
    return (
        <section {...props}>
            <Container>
                <div>
                    <h2>{title}</h2>
                    {to && (<Link to={to}>Ver tudo</Link>)}
                </div>
                {children}
            </Container>
        </section>
    );
}
