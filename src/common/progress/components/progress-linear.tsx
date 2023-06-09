import { useEffect, useState } from 'react';
import { ProgressProps } from '../models/progress-props.ts';

export const ProgressLinear = ({
    valueObject,
    width = 10,
    trackStyles,
    indicatorStyles = 'stroke-gray-600',
}: ProgressProps) => {
    const [fillWidth, setFillWidth] = useState(0)
    useEffect(() => setFillWidth(Math.round((valueObject.value / valueObject.total) * 100)), [valueObject.value, valueObject.total])

    return <>
        <div className="relative mt-2 mb-3 w-full" style={ { height: `${ width }px` } }>
            <div className={ `absolute h-full w-full rounded-full opacity-30 ${ trackStyles || indicatorStyles }` }></div>
            <div className={ `absolute h-full rounded-full transition-width ease-fill-expo duration-700 delay-100 ${ indicatorStyles }` }
                 style={ { width: `${ fillWidth }%` } }></div>
        </div>
        <span className="text-xl font-medium">{ valueObject.value }/{ valueObject.total } <span className="text-base font-normal">{ valueObject.unit }</span></span>
    </>
}