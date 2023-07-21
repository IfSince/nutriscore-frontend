import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { useCallback, useEffect, useState } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';

export const ActivityLevelStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()
    const [activityLevelId, setActivityLevelId] = useState(registerState.activityLevelId)
    
    const updateRoutes = useCallback((activityLevelId: number) => {
        if (activityLevelId == 1) nextRef.current = REGISTER_STEP.ACTIVITY_PER_WEEK
        else if (activityLevelId == 2) nextRef.current = REGISTER_STEP.PAL
        else nextRef.current = REGISTER_STEP.CALCULATION_TYPE
    }, [nextRef])
    
    useEffect(() => {
        backRef.current = REGISTER_STEP.NUTRITION_INTRO
        updateRoutes(registerState.activityLevelId)
    }, [backRef, registerState.activityLevelId, updateRoutes])

    const updateStateAndRoutes = (activityLevelId: number) => {
        setActivityLevelId(activityLevelId)
        updateState({ activityLevelId })

        updateRoutes(activityLevelId)
    }

    const options = [
        { value: 1, displayName: 'Activity per week', icon: 'image' },
        { value: 2, displayName: 'PA Level', icon: 'image' },
        { value: 3, displayName: 'PA Factor', icon: 'image' },
        { value: 4, displayName: 'MET', icon: 'image' },
        { value: 5, displayName: 'MET Factor', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="How do you want to track your activity?"/>
            <SelectListField name="activityLevel"
                             options={ options }
                             onChange={ activityLevelId => updateStateAndRoutes(activityLevelId) }
                             value={ activityLevelId }/>
        </>
    )
}