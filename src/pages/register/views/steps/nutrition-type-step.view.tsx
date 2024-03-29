import { useOutletContext } from 'react-router-dom';
import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useCallback, useEffect } from 'react';
import { ACTIVITY_PER_WEEK_IDS, PA_LEVEL_ID } from '../../../../features/activity-level/models/activity-level.ts';
import { REGISTER_STEP } from '../../register-steps.ts';
import { useGetAllNutritionTypesQuery } from '../../../../features/nutrition-type/nutrition-type-api-slice.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { RadioField } from '../../../../common/form/components/radio-field/radio-field.tsx';
import { RegisterHeader } from '../../components/register-header.tsx';

export const NutritionTypeStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const { values: registerForm, setFieldTouched } = useFormikContext<RegisterForm>()

    const updateRoutes = useCallback((activityLevelId: number) => {
        if (ACTIVITY_PER_WEEK_IDS.includes(activityLevelId)) backRef.current = REGISTER_STEP.ACTIVITY_PER_WEEK
        else if (activityLevelId == PA_LEVEL_ID) backRef.current = REGISTER_STEP.PAL
        else backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
    }, [backRef])

    useEffect(() => {
        const validateNutritionTypeStep = () => {
            setFieldTouched('nutritionalData.nutritionTypeId', true, true)
        }

        nextRef.current = REGISTER_STEP.CALCULATION_TYPE
        updateRoutes(+registerForm.nutritionalData.activityLevelId)
        validateCurrentStep.current = validateNutritionTypeStep
    }, [nextRef, updateRoutes, registerForm.nutritionalData.activityLevelId])

    const {
        data: nutritionTypes,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllNutritionTypesQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const options = nutritionTypes.map(type => (
            { value: type.id, displayName: type.description }
        ))

        content = <div className="flex flex-col items-center gap-2 md:gap-3 w-full mt-4 text-lg font-medium text-gray-500">
            <RadioField name="nutritionalData.nutritionTypeId" options={ options }>
                {
                    (option, field) => (
                        <div className="w-full items-center">
                            <input className="hidden peer" type="radio" id={ `${ option.value }` } { ...field }/>
                            <label className="cursor-pointer flex border rounded-md px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              w-full items-center"
                                   htmlFor={ `${ option.value }` }>
                                <span className="text-3xl material-icons-round lg:text-4xl">image</span>
                                <span>{ option.displayName }</span>
                            </label>
                        </div>
                    )
                }
            </RadioField>
        </div>
    }

    return (
        <>
            <RegisterHeader title="How should we distribute you macros?"/>
            { content }
        </>
    )
}