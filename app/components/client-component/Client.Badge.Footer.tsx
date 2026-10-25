import type { ReactNode } from "react";

export interface ClientBadgeFooterProps {
    title:string;
    children?:ReactNode;
}

export default function ClientBadgeFooter({ title, children }: ClientBadgeFooterProps) {
    

    return (
        <div>
            <b className="block uppercase tracking-[.14em] mb-2.5">{title}</b>
            <div className="text-vertice-100 text-base">{children}</div>
        </div>
    );
}
