import Container from "../Container";

interface ClientPageProps {
    title:string;
    description?:string;
}
export default function ClientPage({ title, description }:ClientPageProps) {
    return (
        <div>
            <Container>
                <h1 className="uppercase tracking-[.08em] mb-1.5 text-[24px] font-bold">{title}</h1>
                {description && <p className="text-vertice-100 mb-6 text-base">{description}</p>}
            </Container>
        </div>
    );
}
