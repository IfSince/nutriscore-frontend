import { CustomField } from '../custom-field.tsx';
import { CustomFieldProps } from '../../models/custom-field-props.ts';
import { recordObjectKeys } from '../../../../utils/object.ts';
import { TimeOfDay } from '../../../../features/type-of-day.enum.ts';

export const TimeOfDaySelector = ({ ...props }: CustomFieldProps) => {
    const data = recordObjectKeys(TimeOfDay)

    const displayNames: Record<TimeOfDay, string> = {
        [TimeOfDay.BREAKFAST]: 'Breakfast',
        [TimeOfDay.DINNER]: 'Dinner',
        [TimeOfDay.LUNCH]: 'Lunch',
        [TimeOfDay.SNACKS]: 'Snacks',
    }

    return (
        <CustomField { ...props } disabled={ props.disabled }>
            {
                ({ field, fieldProps }) => (
                    <div className="w-full relative">
                        <select { ...field } { ...fieldProps }>
                            {
                                data?.map(it => <option value={ it } key={ it }>{ displayNames[it] }</option>)
                            }
                        </select>
                    </div>
                )
            }
        </CustomField>
    )
}
