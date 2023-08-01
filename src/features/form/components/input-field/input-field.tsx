import { useField } from 'formik';
import { useEffect } from 'react';
import { getFieldErrors } from '../../../../api/error/api-error-utils.ts';
import { FieldError } from '../field-error.tsx';

export const InputField = ({ ...props }) => {
    const [field, meta, helpers] = useField(props.name)
    const isInvalid = !!meta.error && meta.touched

    useEffect(() => props.errors && helpers.setError(getFieldErrors(props.errors, field.name)[0]), [field.name, helpers, props.errors])

    return (
        <div className="flex flex-row-reverse gap-2.5 md:gap-3 lg:gap-4">
            <div className="w-full">
                {
                    props.displayname &&
                    <label htmlFor={ field.name }
                           className="block cursor-pointer pl-1 text-lg font-medium text-gray-500 transition-colors mb-1.5">
                        { props.displayname }
                    </label>
                }
                <input className={ `h-11 rounded-md border transition-selection px-4 w-full peer lg:h-12 text-base font-medium text-gray-500 placeholder-gray-400
                    ${ isInvalid ?
                    'border-error hover:border-error hover:ring-1 hover:ring-error border-red' :
                    'border-gray-300 hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200'
                }
                    focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                    disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed` }
                       { ...field } { ...props }
                       id={ field.name }/>
                <FieldError name={ field.name }/>
            </div>
            {
                props.icon &&
                <label className={ `flex cursor-pointer h-11 lg:h-12 items-center justify-center rounded-md transition-colors aspect-square w-fit text-gray-50 bg-cyan-200
                                    hover:bg-cyan-300 peer-focus:bg-cyan-300 peer-disabled:bg-cyan-200/50` }
                       htmlFor={ field.name }>
                    <span className="text-xl material-icons-round">{ props.icon }</span>
                </label>
            }
        </div>
    )
}