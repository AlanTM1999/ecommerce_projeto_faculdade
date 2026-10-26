import { cloneElement, createContext, useContext, useRef, useState, type MouseEvent, type ReactElement, type ReactNode } from "react";

type TypeClientProductContext = {
    toggle:boolean;
    onToggle: () => void;
}
const ClientMobileContext = createContext<TypeClientProductContext | undefined>(undefined);

const useClientMobile = ():TypeClientProductContext => {
    const ctx = useContext(ClientMobileContext);

    if(ctx === undefined){
        throw new Error(
            ""
        );
    }

    return ctx;
}

interface ClientMobileProviderProps {
    children?:ReactNode;
}
function ClientMobileProvider({ children }:ClientMobileProviderProps){
    const [toggle, setToggle] = useState<boolean>(false);

    const onToggle = () => setToggle((prev) => !prev);

    return (
        <ClientMobileContext.Provider value={{ toggle, onToggle }}>
            {children}
        </ClientMobileContext.Provider>
    )
}

function ClientMobileTrigger(){
    const { onToggle } = useClientMobile();

    return (
        <button
            type="button"
            className="flex flex-col items-center justify-center lg:hidden position w-10 h-10 border border-vertice-400 gap-y-1.5"
            onClick={onToggle}
        >
            <span className="w-full h-0.5 block bg-vertice-50 max-w-6.5"/>
            <span className="w-full h-0.5 block bg-vertice-50 max-w-6.5"/>
            <span className="w-full h-0.5 block bg-vertice-50 max-w-6.5"/>
        </button>
    );
}

interface ClientMobileMenuProps {
    children?:ReactNode;
}
function ClientMobileMenu({ children }:ClientMobileMenuProps){
    const menuRef = useRef<HTMLDivElement>(null);
    const { toggle, onToggle } = useClientMobile()

    if(!toggle) return null

    const onClose = (e:MouseEvent<HTMLDivElement>) => {
        if(menuRef.current === e.target){
            onToggle();
        }
    }

    return (
        <div ref={menuRef} onClick={onClose} className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-lg">
            <div className="ml-auto mr-0 w-full max-w-80 h-full max-h-full bg-vertice-400 px-5 py-10 space-y-8">
                {children}
            </div>
        </div>
    )
}

interface ClientMobileBadgeProps {
    title:string;
    children?:ReactNode
}
function ClientMobileBadge({ title, children }:ClientMobileBadgeProps){
    return (
        <div>
            <b className="block font-bold uppercase mb-2 tracking-[.08em]">{title}</b>
            <ul className="space-y-3">
                {children}
            </ul>
        </div>
    );
}

interface ClientMobileItemProps{
    render?:ReactElement<{ children:ReactNode, className:string, onClick:() => void }>;
    children?:ReactNode;
}
function ClientMobileButton({ render, children }:ClientMobileItemProps){
    const { onToggle:onClick } = useClientMobile();
    const className:string = "block w-full hover:underline text-left uppercase text-base";
    const element = render ?
        cloneElement(render, { children, className, onClick }) :
        <button type="button" className={className} onClick={onClick}>{children}</button>;

    return (
        <li>
            {element}
        </li>
    )
}

export {
    ClientMobileProvider,
    ClientMobileTrigger,
    ClientMobileMenu,
    ClientMobileBadge,
    ClientMobileButton
}