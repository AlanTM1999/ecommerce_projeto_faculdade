import { Children, createContext, isValidElement, useContext, useState, type ReactNode } from "react";

interface ClientTabContextProps {
    currentTab:number|string|undefined;
    setCurrentTab:React.Dispatch<React.SetStateAction<number|string|undefined>>;
    tabs:Array<[string, number|string]>;
}
const ClientTabContext = createContext<ClientTabContextProps | undefined>(undefined);

const useTab = ():ClientTabContextProps => {
    const ctx = useContext(ClientTabContext);

    if(ctx===undefined){
        throw new Error("\"useTab\" deve ser usando dentro de um \"ClientTabProvider\"");
    }

    return ctx;
}

interface ClientTabProviderProps {
    children?:ReactNode;
    tabs:Array<[string, number|string]>;
    initialTab?:number|string;
}
function ClientTabProvider({ children, tabs, initialTab }:ClientTabProviderProps){
    const [currentTab, setCurrentTab] = useState<number|string|undefined>(() => {

        if(initialTab!==undefined){
            Children.forEach(children, (child) => {

                if(!isValidElement(child) || child.type !== ClientTab){

                }

            });
        }

        const [_, value] = tabs[0]

        return value;

    });
    return (
        <ClientTabContext.Provider value={{ currentTab, setCurrentTab, tabs }}>
            <div className="space-y-3">
                <ClientTabs/>
                <div>{children}</div>
            </div>
        </ClientTabContext.Provider>
    )
}

function ClientTabs(){
    const { tabs } = useTab();

    return (
        <ul className="flex items-center border-x border-vertice-400">
            {tabs.map(([label, value]) => (
                <ClientTab label={label} value={value}/>
            ))}
        </ul>
    )
}

interface ClientTabProps {
    label:string;
    value:string|number
}
function ClientTab({ label, value }:ClientTabProps){
    const { currentTab, setCurrentTab } = useTab()
    const isActive = currentTab===value;
    const style:string = isActive ? "bg-vertice-50 text-vertice-300": "";

    const onSelectTab = () => {
        if(currentTab===value) return;
        setCurrentTab(value);
    }

    return (
        <li className="flex-1 bg-vertice-400">
            <button
                className={`p-2.5 w-full text-base uppercase cursor-pointer ${style}`}
                type="button"
                data-value={value}
                onClick={onSelectTab}
            >{label}</button>
        </li>
    )
}

interface ClientTabContentProps {
    children?:ReactNode;
    tab:string|number;
}
function ClientTabContent({ children, tab }:ClientTabContentProps){
    const { currentTab } = useTab();

    if(currentTab!==tab) return null;

    return (
        <div data-tab={tab}>
            {children}
        </div>
    )
}

export {
    useTab,
    ClientTabProvider,
    ClientTabContent
}