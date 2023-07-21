import { RegisterHeader } from '../components/register-header.tsx';
import { MultiSelectPicker } from '../../form/components/multi-select/multi-select-picker.tsx';
import { useOutletContext } from 'react-router-dom';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const AllergenicStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.WEIGHT
        nextRef.current = REGISTER_STEP.NUTRITION_INTRO
    }, [backRef, nextRef])

    const options = [
        { value: 1, displayName: 'Milk', icon: 'image' },
        { value: 2, displayName: 'Eggs', icon: 'image' },
        { value: 3, displayName: 'Fish', icon: 'image' },
        { value: 4, displayName: 'Shellfish', icon: 'image' },
        { value: 5, displayName: 'Tree nuts', icon: 'image' },
        { value: 6, displayName: 'Peanuts', icon: 'image' },
        { value: 7, displayName: 'Wheat', icon: 'image' },
        { value: 8, displayName: 'Soybeans', icon: 'image' },
        { value: 9, displayName: 'Sesame', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="Do you have any food related allergies?"/>
            <MultiSelectPicker name="gender"
                               options={ options }
                               onChange={ allergenicIds => updateState({ allergenicIds }) }
                               selected={ registerState.allergenicIds }/>
        </>
    )
}