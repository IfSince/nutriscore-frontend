import { FormField } from './form-field.tsx';
import { FormFieldData, FormFieldValueTypes } from '../models/form-field-data.tsx';
import { ISelectListOption } from '../models/select-list-option.ts';
import { SelectListOption } from './select-list-option.tsx';


interface SelectListFieldProps<T extends FormFieldValueTypes> extends FormFieldData<T> {
    options: ISelectListOption<T>[]
    onChange: (value: T) => void
    optionsClassName?: string
    className?: string
    iconClassName?: string
}

export const SelectListField = <T extends FormFieldValueTypes, >({
    name,
    value,
    onChange,
    options,
    optionsClassName,
    className,
    iconClassName,
}: SelectListFieldProps<T>) =>
    <FormField name={ name }
               value={ value }>
        <div className={ className || 'flex flex-col gap-2 lg:gap-3' }>
            {
                options.map(option =>
                    <SelectListOption key={ `${ option.value }` }
                                      name={ name }
                                      option={ option }
                                      onChange={ onChange }
                                      value={ value }
                                      className={ optionsClassName }
                                      iconClassName={ iconClassName }/>,
                )
            }
        </div>
    </FormField>