import Badge, { type VariantBadgeKey } from "../Badge";
import Box from "../Box";

interface StepProps {
    label:string;
    value:number;
    currentValue:number;
}
const Step = ({ label, value, currentValue }:StepProps) => {
    const isActive = value <= currentValue;
    return (
        <div className={`relative w-5 h-5 rounded-full border-3 ${isActive ? 'bg-vertice-50 border-vertice-50' : 'bg-vertice-300 border-vertice-400'}`}>
            <label className="absolute -bottom-8 left-1/2 -translate-x-1/2 block uppercase text-center text-base font-base text-vertice-100">
                {label}
            </label>
        </div>
    );
}

interface StepsProps {
    value:0 | 25 | 50 | 75 | 100;
}
const Steps = ({ value:currentValue }:StepsProps) => {
    return (
        <div className="px-6">
            <div className="w-full h-1 bg-vertice-400 mt-8 mb-15 flex items-center justify-between relative">
                <div className="absolute top-0 bottom-0 left-0 bg-vertice-50" style={{ width: `${currentValue}%` }}/>
                <Step label={'recebido'} value={0} currentValue={currentValue}/>
                <Step label={'pago'} value={25} currentValue={currentValue}/>
                <Step label={'separação'} value={50} currentValue={currentValue}/>
                <Step label={'enviado'} value={75} currentValue={currentValue}/>
                <Step label={'entregue'} value={100} currentValue={currentValue}/>
            </div>
        </div>
    );
}

interface ClientOrderProps{
    order:string;
    date:string;
    step:StepsProps["value"]
}
export default function ClientOrder({ order, date:__html, step }:ClientOrderProps) {
    const variant:VariantBadgeKey = step === 0 ?
        "pending" :
        step === 25 ?
            "payd" :
            step === 50 ?
                "separation" :
                step === 75 ?
                    "sent" :
                    "delivered"
    return (
        <Box>
            <div className="flex items-center justify-between">
                <h3 className="font-bold">Pedido {order}</h3>
                <Badge variant={variant}/>
            </div>
            <Steps value={step}/>
            <p className="text-base text-vertice-100" dangerouslySetInnerHTML={{ __html }}/>
        </Box>
    );
}
