import { FormFieldData } from '../models/form-field-data.tsx';
import { ReactNode } from 'react';
import { FormValidationList } from '../subfeatures/validation/components/form-validation-list.tsx';

interface FormFieldProps extends FormFieldData {
    displayName?: string
    children: ReactNode
    errors?: string[]
}

export const FormField = ({ displayName, name, children, errors }: FormFieldProps) => {
    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-medium text-gray-500 focus-within:text-cyan-300 hover:text-cyan-300">
                {
                    displayName &&
                    <label htmlFor={ name }
                           className="block cursor-pointer pl-1 transition-colors mb-1.5">
                        { displayName }
                    </label>
                }
                { children }
            </div>
            { errors && errors.length > 0 && <FormValidationList errors={ errors || [] }/> }
        </div>
    );
}