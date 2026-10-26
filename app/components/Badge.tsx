import type { Ref } from 'react';

export type VariantBadgeKey = "pending" | "wait" | "separation" | 'payd' | "delivered" | "sent"
export interface BadgeProps {
    ref?: Ref<HTMLDivElement>;
    variant?:VariantBadgeKey;
}

const variants:Record<VariantBadgeKey, string> = {
    pending: "text-vertice-100 border-vertice-100",
    wait: "text-vertice-500 border-vertice-500",
    separation: "text-vertice-500 border-vertice-500",
    payd: "text-vertice-700 border-vertice-700",
    delivered:"text-vertice-600 border-vertice-600",
    sent:"text-vertice-600 border-vertice-600"
}

export default function Badge({ ref, variant="pending" }: BadgeProps) {
    const classNameBase:string = "inline-block px-2 py-px rounded-full border text-base"
    return (
        <div className={classNameBase + " " + variants[variant]} ref={ref}>
            {
                variant === 'pending' ?
                    'Aguardando' :
                    variant === 'separation' ?
                        'Em separação' :
                        variant === "payd" ?
                            'Pago' :
                            variant === "sent" ?
                                'Enviado' :
                                'Entregue'
            }
        </div>
    );
}
