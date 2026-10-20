import Button from "../Button";
import Container from "../Container";

export default function ClientHero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_600px] min-h-130">
            <div className="flex flex-col justify-center">
                <Container>
                    <div className="uppercase space-y-5">
                        <div className="text-vertice-100">eyebrow</div>
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
                            Básicos<br/>
                            sem<br/>
                            ruído.
                        </h1>
                        <Button type="button" className="cursor-pointer">comprar agora</Button>
                    </div>
                </Container>
            </div>
            <div className="bg-vertice-400">a</div>
        </section>
    );
}
