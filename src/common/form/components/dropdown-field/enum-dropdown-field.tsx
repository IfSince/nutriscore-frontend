import { SelectableEnum } from './selectable-enum.ts';
import { useGetAllNutritionTypesQuery } from '../../../../features/nutrition-type/nutrition-type-api-slice.ts';
import { useGetAllCalculationTypesQuery } from '../../../../features/calculation-type/calculation-type-api-slice.ts';
import { DescriptiveProps } from '../../../../features/descriptive-entity.ts';
import { CustomSpinner } from '../../../spinner/components/custom-spinner.tsx';
import { useGetAllActivityLevelsQuery } from '../../../../features/activity-level/activity-level-api-slice.ts';
import { useGetAllGendersQuery } from '../../../../features/gender/gender-api-slice.ts';
import { CustomField } from '../custom-field.tsx';
import { CustomFieldProps } from '../../models/custom-field-props.ts';

interface RequestResult {
    data: DescriptiveProps[] | undefined
    isLoading: boolean
    isError: boolean
}

export const EnumDropdownField = ({ ...props }: CustomFieldProps & { enum: SelectableEnum }) => {
    const requests: Record<SelectableEnum, any> = {
        [SelectableEnum.NUTRITION_TYPE]: useGetAllNutritionTypesQuery,
        [SelectableEnum.CALCULATION_TYPE]: useGetAllCalculationTypesQuery,
        [SelectableEnum.ACTIVITY_LEVEL]: useGetAllActivityLevelsQuery,
        [SelectableEnum.GENDER]: useGetAllGendersQuery,
    }
    const { data, isLoading, isError }: RequestResult = requests[props.enum]()

    return (
        <CustomField { ...props } disabled={ props.disabled || isLoading || isError }>
            {
                ({ field, fieldProps }) => (
                    <div className="w-full relative">
                        <select { ...field } { ...fieldProps }>
                            {
                                data?.map(it => <option value={ it.id } key={ it.id }>{ it.description }</option>)
                            }
                        </select>
                        {
                            isLoading &&
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
                                <CustomSpinner size="sm"/>
                            </div>
                        }
                    </div>
                )
            }
        </CustomField>
    )
}
