import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { useOutletContext } from 'react-router-dom';
import { ScalePickerField } from '../../form/components/scale-picker/scale-picker-field.tsx';
import { useEffect, useRef, useState } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const HeightStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    const [heightUnit, setHeightUnit] = useState(registerState.heightUnit)
    const [height, setHeight] = useState(registerState.height)

    const heightRef = useRef(registerState.height)
    const heightUnitRef = useRef(registerState.heightUnit)

    useEffect(() => {
        backRef.current = REGISTER_STEP.DATE_OF_BIRTH
        nextRef.current = REGISTER_STEP.WEIGHT
        return () => updateState({ height: heightRef.current, heightUnit: heightUnitRef.current })
    }, [backRef, nextRef])

    const updateHeightUnit = (heightUnit: string) => {
        setHeightUnit(heightUnit)
        heightUnitRef.current = heightUnit
    }

    const updateHeight = (height: number) => {
        setHeight(height)
        heightRef.current = height
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