import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { RegisterHeader } from '../components/register-header.tsx';
import { RadioField } from '../../form/components/radio-field/radio-field.tsx';
import { REGISTER_STEP } from '../register-steps.ts';

export const ActivityPerWeekStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.NUTRITION_TYPE
    }, [backRef, nextRef])

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