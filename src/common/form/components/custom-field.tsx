import { ReactNode, useEffect } from 'react';
import { FieldHelperProps, FieldInputProps, FieldMetaProps, useField } from 'formik';
import { getFieldErrors } from '../../../api/error/api-error-utils.ts';
import { FieldError } from './field-error.tsx';
import { FieldProps } from '../models/field-props.ts';
import { getInputStyles } from '../get-input-styles.ts';
import { CustomFieldProps } from '../models/custom-field-props.ts';

interface CustomFieldMetadata {
    field: FieldInputProps<any>
    meta: FieldMetaProps<any>
    helpers: FieldHelperProps<any>
    fieldProps: FieldProps
}

export const CustomField = ({ name, displayName, children, apiError, ...fieldProps }: CustomFieldProps & { children: (metadata: CustomFieldMetadata) => ReactNode }) => {
    const [field, meta, helpers] = useField(name)
    const isInvalid = !!meta.error && meta.touched

    useEffect(() => {
        const errors = getFieldErrors(apiError, name) || []
        errors.length > 0 && helpers.setError(errors[0])
    }, [name, helpers, apiError]);

    return (
        <div className="w-full">
            {
                displayName &&
                <label htmlFor={ name }
                       className="block cursor-pointer pl-1 text-base font-medium text-gray-500 transition-colors mb-1.5 md:text-lg">
                    { displayName }
                </label>
            }
            {
                children({
                    field,
                    meta,
                    helpers,
                    fieldProps: { ...fieldProps, id: name, className: getInputStyles(isInvalid) },
                })
            }
            {
                <FieldError name={ name }/>
            }
        </div>
    )
}
