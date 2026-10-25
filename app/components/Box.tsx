import type { ComponentProps, Ref } from 'react';

export interface BoxProps extends Omit<ComponentProps<"div">, "className">{
    ref?: Ref<HTMLDivElement>;
}

export default function Box({ ref, ...props }: BoxProps) {
    

    return <div ref={ref} className="p-4 border border-vertice-400" {...props}/>;
}
