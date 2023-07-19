import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';
import { ScalePickerField } from '../../form/components/scale-picker/scale-picker-field.tsx';
import { useState } from 'react';

export const HeightStepView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const [heightUnit, setHeightUnit] = useState(registerStateRef.heightUnit)
    const [height, setHeight] = useState(registerStateRef.height)

    const updateHeightUnit = (heightUnit: string) => {
        setHeightUnit(heightUnit)
        updateStateRef({ heightUnit })
    }

    const updateHeight = (height: number) => {
        setHeight(height)
        updateStateRef({ height })
    }

    const options = [
        { value: 'cm', displayName: 'cm' },
        { value: 'in', displayName: 'in' },
    ]

    return (
        <>
            <RegisterHeader title="How tall are you?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ updateHeightUnit }
                             value={ heightUnit }
                             className="mb-6 flex flex-row justify-center md:mb-10"
                             optionsClassName="max-w-xs grow w-full items-center justify-center !rounded-lg flex flex-col !py-3 !px-5"/>
            <ScalePickerField minValue={ 0 }
                              maxValue={ 200 }
                              value={ height }
                              unit={ heightUnit }
                              onChange={ updateHeight }/>
        </>
    )
}