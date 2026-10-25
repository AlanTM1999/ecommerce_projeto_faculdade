import { createContext, useContext, type ReactNode } from "react";
import Container from "../Container";
import coin from "~/functions/coin";
import Button from "../Button";

type TypeClientProductContext = {}
const ClientProducContext = createContext<TypeClientProductContext | undefined>(undefined);

const useClientProduct = () => {
    const ctx = useContext(ClientProducContext);

    if(ctx===undefined){
        throw new Error(
            "\"useClientProduct\" deve ser usado dentro de \"ClientProductProvider\""
        );
    }

    return ctx;
}

interface ClientProductProviderProps {
    children?:ReactNode;
}
function ClientProductProvider({children}:ClientProductProviderProps){
    return (
        <ClientProducContext.Provider value={{}}>
            {children}
        </ClientProducContext.Provider>
    )
}

function ClientProductImage(){
    return (
        <div>
            <img
                src={"https://placehold.co/800x650/1A1A1A/FFFFFF/png"}
                loading="lazy"
                className="w-full h-auto"
                width={800}
                height={650}
                alt=""
            />
        </div>
    )
}

interface ClientProductVariantProps{
    size:string;
    value:string;
}
function ClientProductVariant({ size, value }:ClientProductVariantProps){
    return (
        <label className="w-11.5 h-11.5 border flex items-center justify-center text-base uppercase hover:bg-vertice-50 hover:text-vertice-300 cursor-pointer">
            {size}
            <input type="radio" name="size" className="hidden" value={value}/>
        </label>
    )
}

function ClientProductInfo(){
    return (
        <form className="space-y-3">
            <div>
                <div className="uppercase text-base tracking-[.08em] text-vertice-100">Categoria</div>
                <h1 className="uppercase text-[28px] font-bold tracking-[.04em] mt-1.5 mb-2.5">Moletom Canguru Off‑White</h1>
                <span className="block text-[22px] font-bold">{coin(30)}</span>
                <p className="text-vertice-100 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, porro quo. Assumenda fugiat sunt dolor ducimus modi at, quidem neque soluta numquam ipsam vitae labore, deleniti, pariatur nemo iste nostrum.</p>
                <div>
                    <label className="block uppercase text-vertice-100 tracking-[.12em] text-base mt-3 mb-4">tamanho</label>
                    <div className="overflow-x-auto flex items-center gap-2">
                        <ClientProductVariant size={'p'} value={'1'}/>
                        <ClientProductVariant size={'m'} value={'2'}/>
                        <ClientProductVariant size={'g'} value={'g'}/>
                        <ClientProductVariant size={'gg'} value={'gg'}/>
                    </div>
                </div>
            </div>
            <Button type="button" className="w-full cursor-pointer">Adicionar à sacola</Button>
            <Button type="button" variant={"outline"} className="w-full cursor-pointer">Continuar comprando</Button>
        </form>
    );
}


export {
    ClientProductProvider,
    ClientProductImage,
    ClientProductInfo
}