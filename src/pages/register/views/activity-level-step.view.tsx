import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { ChangeEvent, useCallback, useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useFormikContext } from 'formik';
import { REGISTER_STEP } from '../register-steps.ts';
import { RegisterForm } from '../../../features/register/models/register-form.ts';
import { RadioField } from '../../../common/form/components/radio-field/radio-field.tsx';

export const ActivityLevelStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()
    const { values: registerForm } = useFormikContext<RegisterForm>()

    const updateRoutes = useCallback((activityLevelId: number) => {
        if (activityLevelId == 0) {
            nextRef.current = REGISTER_STEP.ACTIVITY_PER_WEEK
        } else if (activityLevelId == 6) {
            nextRef.current = REGISTER_STEP.PAL
        } else {
            nextRef.current = REGISTER_STEP.NUTRITION_TYPE
        }
    }, [nextRef])

    useEffect(() => {
        backRef.current = REGISTER_STEP.NUTRITION_INTRO
        updateRoutes(+registerForm.nutritionalData.activityLevelId)
    }, [backRef, updateRoutes, registerForm.nutritionalData.activityLevelId])

    const options = [
        { value: 0, displayName: 'Activity per week', icon: 'image' },
        { value: 6, displayName: 'PA Level', icon: 'image' },
        { value: 7, displayName: 'MET', icon: 'image' },
        { value: 8, displayName: 'MET Factor', icon: 'image' },
        { value: 9, displayName: 'PA Factor', icon: 'image' },
    ]

    const onChange = (e: ChangeEvent<HTMLInputElement>, handleChange: (e: ChangeEvent<HTMLInputElement>) => void) => {
        handleChange(e)
        updateRoutes(Number(e.target.value))
    }

    return (
        <>
            <RegisterHeader title="How do you want to track your activity?"/>
            <div className="flex flex-col items-center gap-2 md:gap-3 w-full mt-4 text-lg font-medium text-gray-500">
                <RadioField name="nutritionalData.activityLevelId" options={ options }>
                    {
                        (option, field) => (
                            <div className="w-full items-center">
                                <input className="peer hidden"
                                       type="radio"
                                       id={ `${ option.value }` }
                                       { ...field }
                                       onChange={ (e) => onChange(e, field.onChange) }/>
                                <label className="cursor-pointer flex border rounded-md px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              w-full items-center"
                                       htmlFor={ `${ option.value }` }>
                                    { option.icon && <span className="material-icons-round text-3xl lg:text-4xl">{ option.icon }</span> }
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