import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';
import { InputField } from '../../../../common/form/components/input-field/input-field.tsx';
import { FieldError } from '../../../../common/form/components/field-error.tsx';

export const PalStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validatePalStep = () => {
            form.setFieldTouched('nutritionalData.activityLevelId', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.sleeping', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.onlySitting', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.occasionalActivities', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.mostlySittingOrStanding', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.mostlyWalkingOrStanding', true, true)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.physicallyDemanding', true, true)
        }
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.NUTRITION_TYPE
        validateCurrentStep.current = validatePalStep
    }, [backRef, form, nextRef, validateCurrentStep])

    return (
        <>
            <RegisterHeader title="Lets determine your physical activity level"/>
            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.sleeping"
                            displayName="Sleeping"
                            type="number"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.onlySitting"
                            displayName="Only sitting"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.occasionalActivities"
                            displayName="Mostly sitting with occasional activities"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.mostlySittingOrStanding"
                            displayName="Mostly sitting or standing"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.mostlyWalkingOrStanding"
                            displayName="Mostly walking or standing"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.physicallyDemanding"
                            displayName="Physically demanding activities"
                            type="number"/>
            </div>
            <div className="w-full">
                <FieldError name="nutritionalData.physicalActivityLevelActivities"/>
            </div>
        </>
    )
}