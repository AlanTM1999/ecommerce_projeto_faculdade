import type { ReactNode } from "react"

interface ClientGroupProps {
    label:ReactNode;
    children?:ReactNode
}
export default function ClientGroup({ label, children }:ClientGroupProps){
    return (
        <div className="space-y-3.5">
            <h3 className="uppercase font-semibold tracking-[.14em]">{label}</h3>
            <ul>{children}</ul>
        </div>
    )
}