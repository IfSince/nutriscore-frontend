import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';
import { InputField } from '../../../../common/form/components/input-field/input-field.tsx';

export const CalorieRestrictionStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validateCalorieRestriction = () => {
            form.setFieldTouched('nutritionalData.calorieRestriction', true, true)
        }

        backRef.current = REGISTER_STEP.CALCULATION_TYPE
        nextRef.current = REGISTER_STEP.ALLERGENIC
        validateCurrentStep.current = validateCalorieRestriction
    }, [backRef, form, nextRef, validateCurrentStep])

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