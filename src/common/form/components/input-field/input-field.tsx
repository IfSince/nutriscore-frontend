import { CustomField } from '../custom-field.tsx';
import { CustomFieldProps } from '../../models/custom-field-props.ts';

export const InputField = (props: CustomFieldProps) =>
    <CustomField { ...props }>
        {
            ({ field, fieldProps }) => <div className="flex flex-row-reverse gap-2.5 md:gap-3 lg:gap-4">
                <input { ...field } { ...fieldProps }/>
                {
                    props.icon &&
                    <label className="flex cursor-pointer h-11 lg:h-12 items-center justify-center rounded-md transition-colors aspect-square w-fit text-gray-50
                              bg-cyan-200 hover:bg-cyan-300 peer-focus:bg-cyan-300 peer-disabled:bg-cyan-200/50"
                           htmlFor={ field.name }>
                        <span className="text-xl material-icons-round">{ props.icon }</span>
                    </label>
                }
            </div>
        }
    </CustomField>