import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { Field, FieldProps } from 'formik';
import { Unit, UNIT_ABBREVIATIONS } from '../../../features/unit.ts';
import { RadioField } from '../../../common/form/components/radio-field/radio-field.tsx';
import { ScalePickerField } from '../../../common/form/components/scale-picker/scale-picker-field.tsx';
import { FieldError } from '../../../common/form/components/field-error.tsx';

export const WeightStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.HEIGHT
        nextRef.current = REGISTER_STEP.ALLERGENIC
    }, [backRef, nextRef])

    const options = [
        { value: Unit.KILOGRAM, displayName: UNIT_ABBREVIATIONS[Unit.KILOGRAM] },
        { value: Unit.POUND, displayName: UNIT_ABBREVIATIONS[Unit.POUND] },
    ]

    return (
        <>
            <RegisterHeader title="What is your current weight?"/>
            <div className="w-full max-w-sm flex flex-row justify-center gap-4 mt-4 text-lg font-medium text-gray-500 mb-14">
                <RadioField name="user.selectedWeightUnit" options={ options }>
                    {
                        (option, field) => (
                            <div className="w-full items-center">
                                <input className="peer hidden" type="radio" id={ `${ option.value }` } { ...field }/>
                                <label className="cursor-pointer w-full border text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              grow items-center justify-center rounded-lg flex flex-col py-3 px-5"
                                       htmlFor={ `${ option.value }` }>
                                    { option.icon && <span className="material-icons-round text-7xl lg:text-8xl">{ option.icon }</span> }
                                    <span>{ option.displayName }</span>
                                </label>
                            </div>
                        )
                    }
                </RadioField>
            </div>

            <Field name="weightRecording.weight">
                {
                    ({ field, form }: FieldProps) => (
                        <ScalePickerField minValue={ 0 }
                                          maxValue={ 300 }
                                          value={ field.value }
                                          unit={ form.values.user.selectedWeightUnit }
                                          onChange={ (value) => form.setFieldValue('weightRecording.weight', value) }/>
                    )
                }
            </Field>
            <FieldError name="weightRecording.weight"/>
        </>
    )
}