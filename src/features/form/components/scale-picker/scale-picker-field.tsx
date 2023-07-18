import { ScalePickerLine } from './scale-picker-line.tsx';
import { useEffect, useRef } from 'react';

interface ScalePickerFieldProps {
    minValue: number
    maxValue: number
    value: number
    unit: string
    onChange: (value: number) => void
}

export const ScalePickerField = ({ minValue, maxValue, value, unit, onChange }: ScalePickerFieldProps) => {
    const scaleContainerRef = useRef<HTMLDivElement>(null)
    const centerCollisionDivRef = useRef<HTMLDivElement>(null)

    const getOverlappingElement = () => {
        return [...scaleContainerRef.current?.children || []]
            .filter(element => element instanceof HTMLDivElement && element.dataset.value !== null)
            .find(element => {
                const clientRect = element.getBoundingClientRect()
                const collisionDivRect = centerCollisionDivRef.current?.getBoundingClientRect()

                return collisionDivRect &&
                    !(
                        clientRect.right < collisionDivRect.left || clientRect.left > collisionDivRect.right
                    )
            })
    }

    useEffect(() => {
        const initialValueElement = [...scaleContainerRef.current?.children || []]
            .find(it => it instanceof HTMLDivElement && it.dataset.value === `${ value }`)
        initialValueElement?.scrollIntoView({ inline: 'center', block: 'center', behavior: 'instant' })

        scaleContainerRef.current?.addEventListener('scroll', () => {
            const overlappingChild = getOverlappingElement()

            if (overlappingChild) {
                const newValue = Number((
                    overlappingChild as HTMLDivElement
                )?.dataset.value) ?? 0
                onChange(newValue)
            }
        })
    }, [onChange, scaleContainerRef, value])

    const valuesToRender = [...Array(maxValue + 1).keys()].slice(minValue)

    const onChangeValue = (value: string) => {
        if (!isNaN(Number(value))) {
            const valueAsNumber = +value
            valueAsNumber <= maxValue && valueAsNumber >= minValue && onChange(+value)
        }
    }


    return (
        <>
            <span className="relative mb-2 text-gray-600">
                <input className="w-24 text-center text-5xl font-bold"
                       id="scale-input"
                       onChange={ (event) => onChangeValue(event.target.value) }
                       value={ value }/>
                
                <label htmlFor="scale-input" className="absolute right-0 bottom-1 translate-x-full pl-0.5">{ unit }</label>
            </span>
            <div className="relative h-fit w-full">
                <div className="absolute left-1/2 z-20 mt-2 w-1 -translate-x-1/2 bg-cyan-300 h-18" ref={ centerCollisionDivRef }>
                </div>
                <span
                    className="absolute bottom-0 left-1/2 z-20 flex w-6 -translate-x-1/2 items-center justify-center overflow-hidden bg-white">
                    <span className="text-5xl text-cyan-300 material-icons-round">arrow_drop_up</span>
                </span>
                <div className="relative flex w-full items-center overflow-x-scroll pb-8 no-scrollbar" ref={ scaleContainerRef }>
                    <span className="w-[calc(50%-0.375rem)] shrink-0"></span>
                    {
                        valuesToRender.map(valueToRender =>
                            <ScalePickerLine key={ valueToRender } value={ valueToRender }/>,
                        )
                    }
                    <span className="w-[calc(50%-0.375rem)] shrink-0"></span>
                </div>
            </div>
        </>

    )
}