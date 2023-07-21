import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const CalculationTypeStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.CALORIE_RESTRICTION
    }, [backRef, nextRef])

    const options = [
        { value: 1, displayName: 'Easy', icon: 'image' },
        { value: 2, displayName: 'Complicated', icon: 'image' },
        { value: 3, displayName: 'Harris Benedict Method', icon: 'image' },
        { value: 4, displayName: 'Mifflin-St. Jeor Method', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="How should we calculate your RMR?"/>
            <SelectListField name="rmr"
                             options={ options }
                             onChange={ calculationTypeId => updateState({ calculationTypeId }) }
                             value={ registerState.calculationTypeId }/>
        </>
    )
}