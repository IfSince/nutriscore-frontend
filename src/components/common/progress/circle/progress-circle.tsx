import { ReactNode, useEffect, useState } from 'react';
import { ProgressProps } from '../progress-props.ts';

interface CircleProgressProps extends ProgressProps {
    children?: ReactNode
}

export const ProgressCircle = ({
    name,
    size = 100,
    value,
    total,
    width = 10,
    trackStyles,
    indicatorStyles = 'stroke-gray-600',
    children,
}: CircleProgressProps) => {
    const percentage = Math.round((value / total) * 100)
    const center = size / 2
    const radius = center - width
    const strokeDasharray = 2 * Math.PI * radius

    const [strokeDashoffset, setStrokeDashoffset] = useState(strokeDasharray)
    useEffect(() => setStrokeDashoffset(strokeDasharray * ((100 - percentage) / 100)), [strokeDasharray, percentage])

    return (
        <div className="flex flex-col items-center">
            <div className="relative flex">
                <svg className="relative align-middle fill-none" style={ { strokeLinecap: 'round', width: size, height: size } }>
                    <circle className={ `-rotate-90 translate-y-full opacity-30 ${ trackStyles || indicatorStyles }` }
                            r={ radius }
                            cx={ center }
                            cy={ center }
                            strokeWidth={ width }/>
                    <circle
                        className={ `-rotate-90 translate-y-full transition-stroke-dashoffset ease-fill-expo duration-700 delay-100 ${ indicatorStyles }` }
                        r={ radius }
                        cx={ center }
                        cy={ center }
                        strokeWidth={ width }
                        strokeDasharray={ strokeDasharray }
                        strokeDashoffset={ strokeDashoffset }/>
                </svg>

                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-wrap items-end justify-center gap-x-1">
                    { children }
                </div>
            </div>
            { name && <h3 className="pt-2 text-lg font-medium text-gray-600">{ name }</h3> }
        </div>
    )
}