import { CustomField } from '../custom-field.tsx';
import { Unit, UNIT_DISPLAYNAMES, UNITS_FILTERED_BY_TYPE } from '../../../../features/unit.ts';
import { CustomFieldProps } from '../../models/custom-field-props.ts';
import { UnitFilter } from './unit-filter.ts';

export const UnitSelector = ({ ...props }: CustomFieldProps & { filter: UnitFilter }) => {
    const data: Unit[] = UNITS_FILTERED_BY_TYPE[props.filter]
    return (
        <CustomField { ...props } disabled={ props.disabled }>
            {
                ({ field, fieldProps }) => (
                    <div className="w-full relative">
                        <select { ...field } { ...fieldProps }>
                            {
                                data?.map(it => <option value={ it } key={ it }>{ UNIT_DISPLAYNAMES[it] }</option>)
                            }
                        </select>
                    </div>
                )
            }
        </CustomField>
    )
}
