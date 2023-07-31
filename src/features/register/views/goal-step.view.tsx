import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { RadioField } from '../../form/components/radio-field/radio-field.tsx';
import { Goal } from '../../goal.ts';


export const GoalStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = null
        nextRef.current = REGISTER_STEP.GENDER
    }, [backRef, nextRef])

    const options = [
        { value: Goal.LOOSE, displayName: 'Loose weight', icon: 'trending_down' },
        { value: Goal.KEEP, displayName: 'Keep weight', icon: 'arrow_right_alt' },
        { value: Goal.GAIN, displayName: 'Gain weight', icon: 'trending_up' },
    ]

    return (
        <>
            <RegisterHeader title="What is your main goal?"/>
            <div className="flex flex-col items-center gap-2 md:gap-3 w-full mt-4 text-lg font-medium text-gray-500">
                <RadioField name="nutritionalData.goal" options={ options }>
                    {
                        (option, field) => (
                            <div className="w-full items-center">
                                <input className="peer hidden" type="radio" id={ `${ option.value }` } { ...field }/>
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