import { FormField } from './form-field.tsx';
import { ReactElement, useState } from 'react';
import { validate } from '../subfeatures/validation/utils/validate.ts';
import { FormFieldData, FormFieldValueTypes } from '../models/form-field-data.tsx';
import { convertToFormFieldType } from '../../../utils/convert-to-form-field-type.ts';

interface InputFieldProps<T extends FormFieldValueTypes> extends FormFieldData<T> {
    icon?: string
    placeholder?: string
    onChange: (value: T) => void
    type?: string
}

export const InputField = <T extends FormFieldValueTypes, >({
    icon,
    placeholder,
    displayName,
    name,
    validations,
    value,
    onChange,
    type = 'text',
    disabled,
    errors = [],
}: InputFieldProps<T>) => {
    const [currentValue, setCurrentValue] = useState(value)
    const [validationErrors, setValidationErrors] = useState(errors)

    const hasErrors = !!validationErrors?.length || !!errors?.length

    const updateAndValidate = (value: T) => {
        setCurrentValue(value)
        onChange(value)
        if (value != currentValue) {
            setValidationErrors(validate(value, validations))
        }
    }

    let content: ReactElement
    if (icon) {
        content =
            <div className={ 'flex flex-row-reverse gap-2.5 md:gap-3 lg:gap-4' }>
                <input className={ `h-11 rounded-md border ${ hasErrors ? 'border-error' : 'border-gray-300' } transition-selection px-4 w-full peer text-base placeholder-gray-400 lg:h-12
                    ${ hasErrors ? 'hover:border-error hover:ring-1 hover:ring-error' : 'hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200' }
                    focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                    disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed
                    ${ validationErrors?.length && '!border-red' }` }
                       type={ type }
                       id={ name }
                       value={ currentValue }
                       placeholder={ placeholder }
                       disabled={ disabled }
                       onChange={ (event) => setCurrentValue(convertToFormFieldType(event.target.value, value)) }
                       onBlur={ (event) => updateAndValidate(convertToFormFieldType(event.target.value, value)) }/>
                <label className={ `flex cursor-pointer h-11 lg:h-12 items-center justify-center rounded-md transition-colors aspect-square w-fit text-gray-50 bg-cyan-200
                                    hover:bg-cyan-300
                                    peer-focus:bg-cyan-300
                                    peer-disabled:bg-cyan-200/50`}
                       htmlFor={ name }>
                    <span className="text-xl material-icons-round">{ icon }</span>
                </label>
            </div>
    } else {
        content =
            <input className="h-11 rounded-md border border-gray-300 transition-selection px-4 w-full peer text-base placeholder-gray-400
                              hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200
                              focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                              lg:h-12"
                   type={ type }
                   id={ name }
                   value={ currentValue }
                   placeholder={ placeholder }
                   onChange={ (event) => setCurrentValue(convertToFormFieldType(event.target.value, value)) }
                   onBlur={ (event) => updateAndValidate(convertToFormFieldType(event.target.value, value)) }/>
    }


    return (
        <FormField name={ name }
                   displayName={ displayName }
                   value={ value }
                   errors={ validationErrors?.concat(errors) }>
            { content }
        </FormField>
    );
}