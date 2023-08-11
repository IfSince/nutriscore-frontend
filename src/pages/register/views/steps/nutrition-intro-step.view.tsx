import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';

export const NutritionIntroStepView = () => {
    const [backRef, nextRef, callback]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const setDefaultProfile = () => {
            // set default values
            form.setFieldValue('nutritionalData.activityLevelId', '1', false)
            form.setFieldValue('nutritionalData.calculationTypeId', '1', false)
            form.setFieldValue('nutritionalData.nutritionTypeId', '1', false)
            form.setFieldValue('nutritionalData.physicalActivityLevelActivities', null, false)
            form.setFieldValue('individualMacroDistribution', null, false)
            form.setFieldValue('nutritionalData.calorieRestriction', 0, false)

            // reset touched
            form.setFieldTouched('nutritionalData.activityLevelId', false, false)
            form.setFieldTouched('nutritionalData.calculationTypeId', false, false)
            form.setFieldTouched('nutritionalData.nutritionTypeId', false, false)
            
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.sleeping', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.onlySitting', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.occasionalActivities', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.mostlySittingOrStanding', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.mostlyWalkingOrStanding', false, false)
            form.setFieldTouched('nutritionalData.physicalActivityLevelActivities.physicallyDemanding', false, false)
            form.setFieldTouched('nutritionalData.calorieRestriction', false, false)

            form.setFieldTouched('individualMacroDistribution', false, false)
            form.setFieldTouched('individualMacroDistribution.protein', false, false)
            form.setFieldTouched('individualMacroDistribution.carbohydrates', false, false)
            form.setFieldTouched('individualMacroDistribution.fats', false, false)
        }

        backRef.current = REGISTER_STEP.GOAL
        nextRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        callback.current = setDefaultProfile
    }, [backRef, callback, form, nextRef])

    return (
        <>
            <RegisterHeader title="Do you want to personalize your nutrition?"/>
            <p className="mt-2 max-w-md text-center text-gray-400 lg:mb-20 xl:mb-30">
                Choose your preference: Personalized nutrition for tailored recommendations or standard profile for diverse options. Adjustments can be easily made later.
            </p>
        </>
    )
}