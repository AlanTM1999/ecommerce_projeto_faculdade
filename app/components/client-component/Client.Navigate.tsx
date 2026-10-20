import type { ComponentProps } from "react";
import { Link, type LinkProps } from "react-router";

interface ClientNavigateProps extends ComponentProps<"ul"> {}

function ClientNavigate({ className, ...props }: ClientNavigateProps) {
    return (
        <ul className={`flex items-center gap-x-5 ${className}`} {...props}/>
    );
}

interface ClientNavLinkProps extends LinkProps {
    isActive?:boolean;
}
function ClientNavLink({ isActive=false, className, ...props }:ClientNavLinkProps){
    const style:string = "hover:underline uppercase text-base" + (isActive ? " underline " : " " + (className ?? ""));
    return (
        <li>
            <Link className={style} {...props}/>
        </li>
    )
}

export {
    ClientNavigate,
    ClientNavLink
}
