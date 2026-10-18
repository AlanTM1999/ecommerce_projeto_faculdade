import Button from "../Button";

export default function ClientHero() {
    return (
        <div>
            <div>
                <div>eyebrow</div>
                <h1>
                    Básicos<br/>
                    sem<br/>
                    ruído.
                </h1>
                <Button type="button" className="cursor-pointer">comprar agora</Button><br/><br/>
                <Button type="button" className="cursor-pointer" variant="outline">Teste</Button>
            </div>
            <div></div>
        </div>
    );
}
