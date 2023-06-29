import { ProgressProps } from '../progress-props.ts';
import { useEffect, useState } from 'react';

export const ProgressLinear = ({
    value,
    total,
    unit,
    width = 10,
    trackStyles,
    indicatorStyles = 'stroke-gray-600',
}: ProgressProps) => {
    const [fillWidth, setFillWidth] = useState(0)
    useEffect(() => setFillWidth(Math.round((value / total) * 100)), [value, total])

    return <>
        <div className="relative mt-2 mb-3 w-full" style={ { height: `${ width }px` } }>
            <div className={ `absolute h-full w-full rounded-full opacity-30 ${ trackStyles || indicatorStyles }` }></div>
            <div className={ `absolute h-full rounded-full transition-width ease-fill-expo duration-700 delay-100 ${ indicatorStyles }` }
                 style={ { width: `${ fillWidth }%` } }></div>
        </div>
        <span className="text-xl font-medium">{ value }/{ total } <span className="text-base font-normal">{ unit }</span></span>
    </>
}