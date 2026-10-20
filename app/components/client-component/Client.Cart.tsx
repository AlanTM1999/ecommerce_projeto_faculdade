import { createContext, useContext, type ReactNode } from "react";
import ClientGroup from "./Client.Group";
import coin from "~/functions/coin";
import Button, { type ButtonProps } from "../Button";
import { Link } from "react-router";

interface ClientCartContextType {

}
const ClientCartContext = createContext<ClientCartContextType | undefined>(undefined);

const useClientCart = ():ClientCartContextType => {
    const ctx = useContext(ClientCartContext);

    if(ctx === undefined){
        throw new Error("\"useClientCart\" deve ser usado apenas dentro de \"ClientCartProvider\"");
    }

    return ctx;
}

interface ClientCartProviderProps {
    children?:ReactNode;
}
function ClientCartProvider({ children }:ClientCartProviderProps){
    return (
        <ClientCartContext.Provider value={{}}>
            {children}
        </ClientCartContext.Provider>
    )
}

function ClientCartQT(){

    const ButtonQT = (props:Omit<ButtonProps, "className">) => <Button className="w-full max-w-8 h-8 p-0!" {...props}/>

    return (
        <div className="flex items-center">
            <ButtonQT>-</ButtonQT>
            <input type="number" className="w-full max-w-18 h-8 px-1.5 border-y border-vertice-100 text-center" value={0}/>
            <ButtonQT>+</ButtonQT>
        </div>
    )
}

function ClientCartItems(){
    return (
        <div>
            <ClientCartItem/>
            <ClientCartItem/>
        </div>
    )
}

function ClientCartItem(){
    return (
        <div className="py-3.5 grid grid-cols-[1fr_auto] not-last:border-b gap-1.5">
            <div className="grid grid-cols-[auto_1fr] gap-3.5 items-center">
                <img
                    width={82}
                    height={112}
                    src="https://placehold.co/82x112/1A1A1A/FFFFFF/png"
                    alt=""
                    className="max-w-20.5 h-auto"
                />
                <div className="space-y-2.5">
                    <b className="uppercase block">camiseta essential preta</b>
                    <div className="text-vertice-200 text-base">Tamanho M</div>
                    <ClientCartQT/>
                </div>
            </div>
            <div className="flex flex-col justify-center text-right">
                <div className="font-bold mb-3">{coin(79.90)}</div>
                <button type="button" className="text-sm block hover:underline text-vertice-100 text-right px-0 cursor-pointer">Remover</button>
            </div>
        </div>
    )
}

function ClientCartPrices(){
    return (
        <div className="border border-vertice-100 p-3.5">
            <ClientGroup label="resumo">
                <li className="border-t uppercase flex items-center justify-between pt-3.5">
                    <span>Total</span>
                    <span>{coin(0)}</span>
                </li>
            </ClientGroup>
        </div>
    );
}

export {
    ClientCartProvider,
    ClientCartItems,
    ClientCartPrices
}