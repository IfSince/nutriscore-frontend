import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { ScalePickerField } from '../../form/components/scale-picker/scale-picker-field.tsx';

export const RegisterWeightStepView = () => {
    const [registerData, updateState]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const [weightUnit, setWeightUnit] = useState(registerData.weightUnit)
    const [weight, setWeight] = useState(registerData.weight)

    const updateWeightUnit = (weightUnit: string) => {
        setWeightUnit(weightUnit)
        updateState({ weightUnit })
    }

    const updateWeight = (weight: number) => {
        setWeight(weight)
        updateState({ weight })
    }

    const options = [
        { value: 'kg', displayName: 'kg' },
        { value: 'lbs', displayName: 'lbs' },
    ]

    return (
        <>
            <RegisterHeader title="What is your current height?"/>
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