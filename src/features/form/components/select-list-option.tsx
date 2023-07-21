import { useId } from 'react';
import { ISelectListOption } from '../models/select-list-option.ts';
import { FormFieldValueTypes } from '../models/form-field-data.tsx';
import { convertToFormFieldType } from '../../../utils/convert-to-form-field-type.ts';

interface SelectListOptionProps<T extends FormFieldValueTypes> {
    name: string
    value: T
    option: ISelectListOption<T>
    onChange: (value: T) => void
    className?: string
    iconClassName?: string
}

export const SelectListOption = <T extends FormFieldValueTypes, >({
    name,
    value,
    option,
    onChange,
    className = '',
    iconClassName = '',
}: SelectListOptionProps<T>) => {
    const defaultStyles = 'cursor-pointer flex w-full border rounded-md px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6 ' +
        'peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50'
    const id = useId()

    return (
        <div className={ className }>
            <input onChange={ (event) => onChange(convertToFormFieldType(event.target.value, value)) }
                   className="hidden peer"
                   type="radio"
                   value={ option.value }
                   name={ name }
                   id={ id }
                   defaultChecked={ value == option.value }/>
            <label className={ `${ defaultStyles } ${ className }` }
                   htmlFor={ id }>
                { option.icon && <span className={ `material-icons-round ${ iconClassName }` }>{ option.icon }</span> }
                <span>{ option.displayName }</span>
            </label>
        </div>
    );
}