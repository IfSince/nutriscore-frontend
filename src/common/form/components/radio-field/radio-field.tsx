import { ReactNode } from 'react';
import { Field, FieldInputProps, FieldProps } from 'formik';
import { RadioFieldOption } from './radio-field-option.ts';
import { FieldError } from '../field-error.tsx';

interface RadioFieldProps {
    name: string
    options: RadioFieldOption[]
    children: (option: RadioFieldOption, field: FieldInputProps<any>) => ReactNode
}

export const RadioField = ({ name, options, children }: RadioFieldProps) =>
    (
        <>
            {
                options.map(option => (
                    <Field key={ option.value } type="radio" name={ name } value={ `${ option.value }` }>
                        {
                            ({ field }: FieldProps) => children(option, field)
                        }
                    </Field>
                ))
            }
            <FieldError name={ name }/>
        </>
    )