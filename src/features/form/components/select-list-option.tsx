import { useId } from 'react';
import { ISelectListOption } from '../models/select-list-option.ts';

interface SelectListOptionProps {
    name: string
    value?: string
    option: ISelectListOption
    onChange: (value: string) => void
    className?: string
    iconClassName?: string
}

export const SelectListOption = ({
    name,
    value,
    option,
    onChange,
    className = '',
    iconClassName = '',
}: SelectListOptionProps) => {
    const defaultStyles = 'cursor-pointer flex w-full border rounded-md px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6 ' +
        'peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50'
    const id = useId()

    return (
        <div className={ className }>
            <input onChange={ (event) => onChange(event.target.value) }
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