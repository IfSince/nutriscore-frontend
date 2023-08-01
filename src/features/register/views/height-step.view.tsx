import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { ScalePickerField } from '../../form/components/scale-picker/scale-picker-field.tsx';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { RadioField } from '../../form/components/radio-field/radio-field.tsx';
import { Field, FieldProps } from 'formik';
import { Unit } from '../../unit.ts';
import { FieldError } from '../../form/components/field-error.tsx';

export const HeightStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.DATE_OF_BIRTH
        nextRef.current = REGISTER_STEP.WEIGHT
    }, [backRef, nextRef])

    const options = [
        { value: Unit.CENTIMETER, displayName: 'cm' },
        { value: Unit.INCH, displayName: 'in' },
    ]

    return (
        <>
            <RegisterHeader title="How tall are you?"/>
            <div className="mt-4 mb-14 flex w-full max-w-sm flex-row justify-center gap-4 text-lg font-medium text-gray-500">
                <RadioField name="user.selectedHeightUnit" options={ options }>
                    {
                        (option, field) => (
                            <div className="w-full items-center">
                                <input className="hidden peer" type="radio" id={ `${ option.value }` } { ...field }/>
                                <label className="cursor-pointer w-full border text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              grow items-center justify-center rounded-lg flex flex-col py-3 px-5"
                                       htmlFor={ `${ option.value }` }>
                                    { option.icon && <span className="text-7xl material-icons-round lg:text-8xl">{ option.icon }</span> }
                                    <span>{ option.displayName }</span>
                                </label>
                            </div>
                        )
                    }
                </RadioField>
            </div>

            <Field name="user.height">
                {
                    ({ field, form }: FieldProps) => (
                        <ScalePickerField minValue={ 0 }
                                          maxValue={ 250 }
                                          value={ field.value }
                                          unit={ form.values.user.selectedHeightUnit }
                                          onChange={ (value) => form.setFieldValue('user.height', value) }/>
                    )
                }
            </Field>
            <FieldError name="user.height"/>
        </>
    )
}