import { useGetAllCategoriesQuery } from '../categories-api-slice.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { CustomFieldArray } from '../../form/components/field-array/custom-field-array.tsx';

export const CategorySelector = ({ disabled }: { disabled?: boolean }) => {
    const {
        data: categories,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllCategoriesQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content =
            <div className="mb-5 flex h-fit gap-2 flex-wrap">
                <CustomFieldArray name="categories" values={ categories }>
                    {
                        (value, isSelected, onSelect) => (
                            <button
                                className={ `rounded-md px-4 text-xs font-medium leading-4 tracking-wide py-1.5 transition-colors
                                             md:tracking-normal md:py-2 md:text-sm md:leading-4 md:px-5
                                             ${ isSelected
                                    ? 'bg-cyan-200 text-gray-50 hover:bg-cyan-300 disabled:bg-cyan-200/70 disabled:text-gray-50'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:bg-gray-100/60 disabled:text-gray-400/60'
                                }`
                                }
                                key={ value.id }
                                type="button"
                                onClick={ onSelect }
                                disabled={ disabled }>
                                { value.description }
                            </button>
                        )
                    }
                </CustomFieldArray>
            </div>
    }

    return content
}