import { FormField } from './form-field.tsx';
import { useState } from 'react';
import { validate } from '../subfeatures/validation/utils/validate.ts';
import { FormFieldData } from '../models/form-field-data.tsx';

export const InputField = ({ displayName, name, validations, value }: FormFieldData) => {
    const [currentValue, setCurrentValue] = useState(value)
    const [errors, setErrors] = useState(validate(value, validations))

    return (
        <FormField name={ name }
                   displayName={ displayName }
                   value={ value }
                   errors={ errors }>
            {/*<label className="flex cursor-pointer h-11 lg:h-12 items-center justify-center rounded-md transition-colors aspect-square*/ }
            {/*                  group w-fit text-gray-50 bg-cyan-200 hover:bg-cyan-300" htmlFor={ data.name }>*/ }
            {/*    <span className="text-xl material-icons-round">{ 'add' }</span>*/ }
            {/*</label>*/ }
            <input className="h-11 rounded-md border border-gray-300 transition-selection px-4 w-full peer text-base
                              hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200
                              focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                              lg:h-12"
                   type="text"
                   id={ name }
                   value={ currentValue }
                   onChange={ (event) => setCurrentValue(event.target.value) }
                   onBlur={ (event) => setErrors(validate(event.target.value, validations)) }/>
        </FormField>
    );
}