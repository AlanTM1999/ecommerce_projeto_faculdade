import type { Ref } from 'react';

export interface ItemProductProps {
    src?:string;
    title?:string;
}

export default function ItemProduct({ src, title }: ItemProductProps) {
    

    return (
        <div className='flex items-center gap-3'>
            <img src={src} width={45} height={45}/>
            <div className='flex-1 min-w-0'>
                <h4 className="truncate max-w-75">{title}</h4>
            </div>
        </div>
    );
}
