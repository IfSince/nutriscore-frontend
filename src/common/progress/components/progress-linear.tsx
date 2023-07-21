import { useEffect, useState } from 'react';
import { ProgressProps } from '../models/progress-props.ts';

export const ProgressLinear = ({
    valueObject,
    width = 10,
    trackStyles,
    indicatorStyles = 'bg-cyan-200',
    animationStyle = 'ease-fill-expo duration-700 delay-100',
}: ProgressProps) => {
    const [fillWidth, setFillWidth] = useState(0)
    useEffect(() => setFillWidth(Math.round((
        valueObject.value / valueObject.total
    ) * 100)), [valueObject.value, valueObject.total])

    return (
        <>
            <div className="relative w-full" style={ { height: `${ width }px` } }>
                <div className={ `absolute h-full w-full rounded-full opacity-30 ${ trackStyles || indicatorStyles }` }></div>
                <div className={ `absolute h-full rounded-full transition-width ${ animationStyle } ${ indicatorStyles }` }
                     style={ { width: `${ fillWidth }%` } }></div>
            </div>
        </>
    )
}