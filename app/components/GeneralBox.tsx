import type { ReactNode, Ref } from 'react';
import Box from './Box';

export interface GeneralBoxProps {
    title:string;
    children?:ReactNode;
}

export default function GeneralBox({ title, children }: GeneralBoxProps) {
    

    return (
        <Box>
            <h4 className="uppercase text-base text-vertice-100 mb-2">{title}</h4>
            <div>{children}</div>
        </Box>
    );
}
