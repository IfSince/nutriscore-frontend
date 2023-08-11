import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';
import { RadioField } from '../../../../common/form/components/radio-field/radio-field.tsx';

export const ActivityPerWeekStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validateActivityLevelStep = () => {
            form.setFieldTouched('nutritionalData.activityLevelId', true, true)
        }
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.NUTRITION_TYPE
        validateCurrentStep.current = validateActivityLevelStep
    }, [backRef, form, nextRef, validateCurrentStep])

    const options = [
        { value: 1, displayName: 'No sports' },
        { value: 2, displayName: '1-3x sports/week' },
        { value: 3, displayName: '3-5x sports/week' },
        { value: 4, displayName: '6-7x sports/week' },
        { value: 5, displayName: 'Daily sports and physically demanding work' },
    ]

    return (
        <>
            <RegisterHeader title="How active are you?"/>
            <div className="mt-4 flex w-full flex-col items-center gap-2 text-lg font-medium text-gray-500 md:gap-3">
                <RadioField name="nutritionalData.activityLevelId" options={ options }>
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
        </>
    )
}