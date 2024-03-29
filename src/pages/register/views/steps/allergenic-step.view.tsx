import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { useGetAllAllergenicsQuery } from '../../../../features/allergenics/allergenics-api-slice.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { CustomArrayField } from '../../../../common/form/components/array-field/custom-array-field.tsx';
import { RegisterHeader } from '../../components/register-header.tsx';

export const AllergenicStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const { touched, setFieldTouched } = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validateCalculationTypeStep = () => {
            setFieldTouched('allergenics', true, true)
        }

        if (touched.nutritionalData?.activityLevelId ||
            touched.nutritionalData?.nutritionTypeId ||
            touched.nutritionalData?.calculationTypeId ||
            touched.nutritionalData?.calorieRestriction) {
            backRef.current = REGISTER_STEP.CALORIE_RESTRICTION
        } else {
            backRef.current = REGISTER_STEP.NUTRITION_INTRO
        }

        nextRef.current = REGISTER_STEP.ACCOUNT
        validateCurrentStep.current = validateCalculationTypeStep
    }, [backRef, touched, nextRef, setFieldTouched, validateCurrentStep])

    const {
        data: allergenics,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllAllergenicsQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content =
            <div className="grid grid-cols-3 gap-5">
                <CustomArrayField name="allergenics" values={ allergenics }>
                    {
                        ({ value, isSelected, onSelect }) => (
                            <button type="button"
                                    key={ value.id }
                                    className={ `flex flex-col items-center group cursor-pointer ${ isSelected ? 'text-gray-50' : 'text-gray-400' }` }
                                    onClick={ onSelect }>
                                <div className={ `flex aspect-square items-center transition-colors justify-center rounded-md p-5 border group-hover:border-cyan-200
                              ${ isSelected && 'bg-cyan-200 border-cyan-200' }` }>
                                    <span className="text-4xl material-icons-round">image</span>
                                </div>
                                <span
                                    className={ `mt-2 font-medium transition-colors ${ isSelected && 'text-cyan-300' }` }>{ value.description }</span>
                            </button>
                        )
                    }
                </CustomArrayField>
            </div>
    }

    return (
        <>
            <RegisterHeader title="Do you have any food related allergies?"/>
            { content }
        </>
    )
}