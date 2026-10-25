import type { ComponentProps, ReactNode, Ref } from 'react';

export type TypeCell = "th" | "td"
export type Cell = [ReactNode, number?, TypeCell?, string?];
export type Rows = Array<Array<Cell>>;

interface AdminClientsProps {
    head?: Rows;
    body?: Rows;
    foot?: Rows;
}

const TCell = ({ type, className, ...props }:{ type:TypeCell } & ComponentProps<"td"|"th">) => {
    const classNameBase = "text-left p-3 text-base"
    return (
        type==="td" ?
        <td className={`${classNameBase} ${className}`} {...props}/> :
        <th className={`${classNameBase} ${className}`} {...props}/>
    )
}

export default function Table({ head, body, foot }: AdminClientsProps) {
    
    

    return (
        <div className="overflow-x-auto">
            <table className='w-full min-w-150'>
                {(head && head.length > 0 && head[0].length > 0) && (
                    <thead className='border-b'>
                        {head.map((headRow, row) => (
                            <tr data-head={row} key={`head-${row}`}>
                                {headRow.map(([content, cols=1, type="th", className=""], cell) => (
                                    <TCell type={type} colSpan={cols} data-row={row} data-cell={cell} className={className} key={`thead-${row}-${cell}`}>
                                        {content}
                                    </TCell>
                                ))}
                            </tr>
                        ))}
                    </thead>
                )}

                <tbody>
                    {(body && body.length > 0) && (
                        <>
                            {body.map((bodyRow, row) => (
                                <tr data-body={row} key={`body-${row}`} className="not-last:border-b border-vertice-400">
                                    {bodyRow.map(([content, cols=1, type="td", className=""], cell) => (
                                        <TCell type={type} colSpan={cols} data-row={row} data-cell={cell} className={className} key={`tbody-${row}-${cell}`}>
                                            {content}
                                        </TCell>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>

                {(foot && foot.length > 0 && foot[0].length > 0) && (
                    <tfoot>
                        {foot.map((footRow, row) => (
                            <tr data-foot={row} key={`foot-${row}`}>
                                {footRow.map(([content, cols=1, type="th", className=""], cell) => (
                                    <TCell type={type} colSpan={cols} data-row={row} data-cell={cell} className={className} key={`tfoot-${row}-${cell}`}>
                                        {content}
                                    </TCell>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                )}
            </table>
        </div>
    );
}