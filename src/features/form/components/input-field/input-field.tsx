import { useField } from 'formik';
import { FormValidationList } from '../../subfeatures/validation/components/form-validation-list.tsx';
import React, { useEffect, useState } from 'react';
import { getFieldErrors } from '../../../../api/error/api-error-utils.ts';

export const InputField = ({ ...props }) => {
    const [field, meta] = useField(props.name)
    const [apiErrors, setApiErrors] = useState<string[]>(getFieldErrors(props.errors, field.name))
    const isInvalid = (!!meta.error && meta.touched) || (props.errors?.length > 0 && apiErrors.length > 0)

    useEffect(() => setApiErrors(getFieldErrors(props.errors, field.name)), [field.name, props.errors])

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onBlur(e)
        setApiErrors([])
    }

    return (
        <div className="flex flex-row-reverse gap-2.5 md:gap-3 lg:gap-4">
            <div className="w-full">
                <input className={ `h-11 rounded-md border transition-selection px-4 w-full peer lg:h-12 text-base font-medium text-gray-500 placeholder-gray-400
                    ${ isInvalid ?
                        'border-error hover:border-error hover:ring-1 hover:ring-error border-red' :
                        'border-gray-300 hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200' 
                    }
                    focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                    disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed` }
                       { ...field } { ...props }
                       id={ field.name }
                       onBlur={e => onBlur(e)}
                />
                { (!!meta.error && meta.touched) && <FormValidationList errors={ [meta.error] || [] }/> }
                { apiErrors?.length > 0 && <FormValidationList errors={ [...apiErrors] || [] }/> }
            </div>
            <label className={ `flex cursor-pointer h-11 lg:h-12 items-center justify-center rounded-md transition-colors aspect-square w-fit text-gray-50 bg-cyan-200
                                    hover:bg-cyan-300
                                    peer-focus:bg-cyan-300
                                    peer-disabled:bg-cyan-200/50` }
                   htmlFor={ field.name }>
                <span className="text-xl material-icons-round">{ props.icon }</span>
            </label>
        </div>
    )
}