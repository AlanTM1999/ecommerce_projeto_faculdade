import { useCallback, useRef, useState, type ChangeEvent, type ComponentProps, type Ref } from 'react';
import Button from './Button';

export interface InputImageProps extends Omit<ComponentProps<"input">, "className" | "type" | "accept" | "onChange"> {}

export default function InputImage({ ...props }: InputImageProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string|null>(null);

    const renderImage = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const clearImage = () => {
        if(inputRef.current){
            console.log("entrou")
            inputRef.current.files = null;
            inputRef.current.value = "";
            setImage(null);
        }
    }

    return (
        <div>
            <label className="flex items-center justify-center border border-vertice-100 cursor-pointer h-30 border-dashed relative">
                {image && (
                    <img src={image} className='w-full h-full border-none object-cover'/>
                )}
                <span className="uppercase flex items-center justify-center bg-black/40 text-xs absolute top-0 left-0 bottom-0 right-0 text-center">
                    Imagem
                </span>
                <input
                    ref={inputRef}
                    className="hidden"
                    type="file"
                    onChange={renderImage}
                    accept="image/png, image/jpeg, image/webp"
                    {...props}
                />
            </label>
            {image && <Button type="button" className='w-full cursor-pointer' onClick={clearImage}>Remover foto</Button>}
        </div>
    );
}
