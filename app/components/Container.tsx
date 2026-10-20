import type { ReactNode, Ref } from 'react';

export interface ContainerProps {
    children?:ReactNode
}

export default function Container(props: ContainerProps) {
    return <div className="w-full mx-auto px-3 lg:px-6" {...props}/>;
}
