import type { ReactNode } from 'react';

export interface ClientMainProps {
    children?: ReactNode;
    
}
export default function ClientMain(props: ClientMainProps) {
    

    return (
        <main className="py-15" {...props}/>
    );
}
