import { RegisterHeader } from '../components/register-header.tsx';
import { InputField } from '../../form/components/input-field.tsx';
import { useOutletContext } from 'react-router-dom';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const CalorieRestrictionStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.CALCULATION_TYPE
        nextRef.current = REGISTER_STEP.PERSONAL
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Do you want to manually restrict your calories?"/>
            <InputField name="calorieRestriction"
                        value={ registerState.calorieRestriction }
                        onChange={ calorieRestriction => updateState({ calorieRestriction }) }/>
        </>

    )
}