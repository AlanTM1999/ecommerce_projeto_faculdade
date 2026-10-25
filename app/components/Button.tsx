import type { ComponentProps, Ref } from 'react';


type VariantKeys = "default" | "outline";
const base:string = "py-1.75 px-4.25 lg:py-3.5 lg:px-8.5 border uppercase text-base tracking-[.16rem]";
const variants:Record<VariantKeys, string> = {
    "default": "text-vertice-300 bg-vertice-50 border-transparent",
    "outline": "text-vertice-50 bg-vertice-300 border-vertice-50"
}

export interface ButtonProps extends ComponentProps<"button"> {
    ref?: Ref<HTMLButtonElement>;
    variant?: VariantKeys;
}

export default function Button({ ref, className, variant="default", ...props }: ButtonProps) {
    return <button className={`${base} ${variants[variant]} ${className}`} ref={ref} {...props}/>;
}
