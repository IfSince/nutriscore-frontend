import { FormField } from './form-field.tsx';
import { FormFieldData } from '../models/form-field-data.tsx';
import { ISelectListOption } from '../models/select-list-option.ts';
import { SelectListOption } from './select-list-option.tsx';


interface SelectListFieldProps extends FormFieldData {
    options: ISelectListOption[]
    onChange: (value: string) => void
    optionsClassName?: string
    className?: string
    iconClassName?: string
}

export const SelectListField = ({
    name,
    value,
    onChange,
    options,
    optionsClassName,
    className,
    iconClassName,
}: SelectListFieldProps) =>
    <FormField name={ name }
               value={ value }>
        <div className={ className || 'flex flex-col gap-2 lg:gap-3' }>
            {
                options.map(option =>
                    <SelectListOption key={ option.value }
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