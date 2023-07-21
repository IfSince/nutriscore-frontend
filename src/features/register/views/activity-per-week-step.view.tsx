import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';

export const ActivityPerWeekStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.CALCULATION_TYPE
    }, [backRef, nextRef])

    const options = [
        { value: 1, displayName: 'No sports', icon: 'image' },
        { value: 2, displayName: '1-3x sports/week', icon: 'image' },
        { value: 3, displayName: '3-5x sports/week', icon: 'image' },
        { value: 4, displayName: '6-7x sports/week', icon: 'image' },
        { value: 5, displayName: 'Daily sports and physically demanding work', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="How do you want to track your activity?"/>
            <SelectListField name="activityLevel"
                             options={ options }
                             onChange={ activityPerWeekId => updateState({ activityPerWeekId }) }
                             value={ registerState.activityPerWeekId || 1 }/>
        </>
    )
}