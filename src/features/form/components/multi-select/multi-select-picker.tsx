import { ISelectListOption } from '../../models/select-list-option.ts';
import { useState } from 'react';
import { MultiSelectOption } from './multi-select-option.tsx';

interface MultiSelectPickerProps {
    name: string
    selected: number[]
    options: ISelectListOption<number>[]
    onChange: (value: number[]) => void
}

export const MultiSelectPicker = ({
    selected,
    onChange,
    options,
}: MultiSelectPickerProps) => {
    const [selectedValueList, setSelectedValueList] = useState<number[]>(selected)

    const toggleValueInValueList = (value: number) => {
        selectedValueList.includes(value) ?
            setSelectedValueList((prevState) => {
                const newList = prevState.filter(it => it !== value)
                onChange(newList)
                return newList
            }) :
            setSelectedValueList((prevState) => {
                const newList = [...prevState, value]
                onChange(newList)
                return [...prevState, value];
            })
    }

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                options.map(option =>
                    <MultiSelectOption key={ option.value }
                                       value={ option.value }
                                       displayName={ option.displayName }
                                       icon={ option.icon }
                                       toggle={ toggleValueInValueList }
                                       selected={ selectedValueList.includes(option.value) }/>,
                )
            }
        </div>
    )
}