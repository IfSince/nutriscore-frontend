import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { ScalePickerField } from '../../form/components/scale-picker/scale-picker-field.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const WeightStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    const [weightUnit, setWeightUnit] = useState(registerState.weightUnit)
    const [weight, setWeight] = useState(registerState.weight)

    const weightRef = useRef(registerState.weight)
    const weightUnitRef = useRef(registerState.weightUnit)

    useEffect(() => {
        backRef.current = REGISTER_STEP.HEIGHT
        nextRef.current = REGISTER_STEP.ALLERGENIC
        return () => updateState({ weight: weightRef.current, weightUnit: weightUnitRef.current })
    }, [backRef, nextRef])

    const updateWeightUnit = (weightUnit: string) => {
        setWeightUnit(weightUnit)
        weightUnitRef.current = weightUnit
    }

    const updateWeight = (weight: number) => {
        setWeight(weight)
        weightRef.current = weight
    }

    const options = [
        { value: 'kg', displayName: 'kg' },
        { value: 'lbs', displayName: 'lbs' },
    ]

    return (
        <>
            <RegisterHeader title="What is your current weight?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ updateWeightUnit }
                             value={ weightUnit }
                             className="mb-6 flex flex-row justify-center md:mb-10"
                             optionsClassName="max-w-xs grow w-full items-center justify-center !rounded-lg flex flex-col !py-3 !px-5"/>
            <ScalePickerField minValue={ 0 }
                              maxValue={ 200 }
                              value={ weight }
                              unit={ weightUnit }
                              onChange={ updateWeight }/>
        </>
    )
}