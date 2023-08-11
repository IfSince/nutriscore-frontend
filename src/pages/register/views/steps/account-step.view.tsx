import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';
import { InputField } from '../../../../common/form/components/input-field/input-field.tsx';

export const AccountStepView = () => {
    const [backRef, nextRef, validateCurrentStep, apiError]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validateUserFields = () => {
            form.setFieldTouched('user.email', true, true)
            form.setFieldTouched('user.password', true, true)
            form.setFieldTouched('user.confirmPassword', true, true)
        }

        backRef.current = REGISTER_STEP.ALLERGENIC
        nextRef.current = null
        validateCurrentStep.current = validateUserFields
    }, [backRef, form, nextRef, validateCurrentStep])

    return (
        <>
            <RegisterHeader title="Create your account now"/>
            <div className="mt-4 w-full">
                <InputField name="user.email"
                            displayName="E-Mail"
                            apiError={apiError}
                            type="text"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="user.password"
                            displayName="Password"
                            apiError={apiError}
                            type="text"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="user.confirmPassword"
                            displayName="Confirm Password"
                            apiError={apiError}
                            type="text"/>
            </div>
        </>
    )
}
