import { FormField } from './form-field.tsx';
import { useState } from 'react';
import { validate } from '../subfeatures/validation/utils/validate.ts';
import { CustomDatePicker } from '../../../common/custom-date-picker.tsx';
import { FormFieldData } from '../models/form-field-data.tsx';


export const SelectDateField = <T extends string>({
    displayName,
    name,
    validations,
    value,
    onChange,
}: FormFieldData<T> & { onChange: (date: string) => void }) => {
    const [errors, setErrors] = useState(validate(value, validations))

    const changeAndValidate = (date: string) => {
        onChange(date)
        setErrors(validate(value, validations))
    }

    return (
        <FormField name={ name }
                   displayName={ displayName }
                   value={ value }
                   errors={ errors }>
            <CustomDatePicker showTodayButton={ true }
                              showClearButton={ false }
                              maxDate="2030-01-01"
                              minDate="1950-01-01"
                              defaultDate={ value }
                              onChange={ changeAndValidate }
                              inputStyles="h-11 rounded-md border border-gray-300 transition-selection px-4 w-full peer text-base bg-white text-gray-500 cursor-pointer
                                hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200 hover:text-cyan-300
                                focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 focus:text-cyan-300
                                lg:h-12"
                              datePickerStyles=""
                              showButtonStyles="ml-3"/>
        </FormField>
    )
}