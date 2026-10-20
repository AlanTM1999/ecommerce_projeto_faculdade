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
        <section className="mt-15" {...props}>
            <Container>
                <div className="mb-6">
                    <h2 className="tracking-[.08em] uppercase font-bold">{title}</h2>
                    {to && (<Link to={to}>Ver tudo</Link>)}
                </div>
                {children}
            </Container>
        </section>
    );
}
