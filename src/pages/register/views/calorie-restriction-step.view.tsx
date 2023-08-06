import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';

export const CalorieRestrictionStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.CALCULATION_TYPE
        nextRef.current = REGISTER_STEP.PERSONAL
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Do you want to manually restrict your calories?"/>
            <div className="mt-4 w-full">
                <InputField name="nutritionalData.calorieRestriction"
                            type="number"
                            disabled={ false }/>
            </div>
        </>

    )
}