import { useGetFoodItemsQuery } from '../../food/food-items-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { FoodItemsSearchList } from './food-items-search-list.tsx';
import { SearchInput } from '../../../common/form/components/search-input/search-input.tsx';
import { useState } from 'react';
import { FoodItem } from '../../food/models/food-item.ts';

export const FoodItemSearch = ({ onFoodItemSelected }: { onFoodItemSelected: (item?: FoodItem) => void }) => {
    const [filterText, setFilterText] = useState('')

    const {
        data: foodItems,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetFoodItemsQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner className=""
                                   backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="md"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content = <FoodItemsSearchList foodItems={ foodItems } filterText={ filterText } onFoodItemSelected={ onFoodItemSelected }/>
    }

    return (
        <div className="flex w-full items-center flex-col pb-8">
            <SearchInput filterText={ filterText } onFilterTextChange={ setFilterText }/>
            { content }
        </div>
    )
}
