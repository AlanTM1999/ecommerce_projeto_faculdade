import ClientHero from "~/components/client-component/Client.Hero";
import type { Route } from "./+types/home";
import ClientSection from "~/components/client-component/Client.Section";
import { ClientProductCard, ClientProducts } from "~/components/client-component/Client.Products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vértice" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <div className="pb-15">
      <ClientHero/>
      <ClientSection title="Mais vendidos" id="novidade">
        <ClientProducts>
          {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
            <ClientProductCard
              key={n}
              cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
              categorie={`categorie ${n}`}
              product_name="ProductName"
              price={[89.95, 45]}
              slug={"product-name"}
            />
          ))}
          <ClientProductCard
            cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
            categorie={`categorie`}
            product_name="ProductName"
            price={[89.95]}
            slug={"product-name"}
          />
        </ClientProducts>
      </ClientSection>
      <ClientSection title="masculino" id="masculino">
        <ClientProducts>
          {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
            <ClientProductCard
              key={n}
              cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
              categorie={`categorie ${n}`}
              product_name="ProductName"
              price={[89.95, 45]}
              slug={"product-name"}
            />
          ))}
          <ClientProductCard
            cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
            categorie={`categorie`}
            product_name="ProductName"
            price={[89.95]}
            slug={"product-name"}
          />
        </ClientProducts>
      </ClientSection>
      <ClientSection title="feminino" id="feminino">
        <ClientProducts>
          {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
            <ClientProductCard
              key={n}
              cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
              categorie={`categorie ${n}`}
              product_name="ProductName"
              price={[89.95, 45]}
              slug={"product-name"}
            />
          ))}
          <ClientProductCard
            cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
            categorie={`categorie`}
            product_name="ProductName"
            price={[89.95]}
            slug={"product-name"}
          />
        </ClientProducts>
      </ClientSection>
      <ClientSection title="acessórios" id="acessorio">
        <ClientProducts>
          {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
            <ClientProductCard
              key={n}
              cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
              categorie={`categorie ${n}`}
              product_name="ProductName"
              price={[89.95, 45]}
              slug={"product-name"}
            />
          ))}
          <ClientProductCard
            cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
            categorie={`categorie`}
            product_name="ProductName"
            price={[89.95]}
            slug={"product-name"}
          />
        </ClientProducts>
      </ClientSection>
      <ClientSection title="outlet" id="outlet">
        <ClientProducts>
          {Array.from({ length: 3 }, (_, i) => i+1).map((n) => (
            <ClientProductCard
              key={n}
              cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
              categorie={`categorie ${n}`}
              product_name="ProductName"
              price={[89.95, 45]}
              slug={"product-name"}
            />
          ))}
          <ClientProductCard
            cover={"https://placehold.co/304x405/1A1A1A/FFFFFF/png"}
            categorie={`categorie`}
            product_name="ProductName"
            price={[89.95]}
            slug={"product-name"}
          />
        </ClientProducts>
      </ClientSection>
    </div>
  );
}
