import { useGetAllMealItemsQuery } from '../../meal/meal-items-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { useState } from 'react';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { MEAL_SEARCH_CATEGORIES, SEARCH_ALL_MEALS } from '../meal-search-categories.ts';
import { MealSearchList } from './meal-search-list.tsx';
import { SearchInput } from '../../../common/form/components/search-input/search-input.tsx';
import { SearchCategoryFilter } from '../../../common/form/components/search-input/search-category-filter.tsx';
import { useNavigate } from 'react-router-dom';
import { PROFILE_NEW_MEAL_DETAIL_ROUTE } from '../../../routes.ts';

export const MealSearch = () => {
    const navigate = useNavigate()
    const [filterText, onFilterTextChange] = useState('')
    const [filterCategory, setFilterCategory] = useState(SEARCH_ALL_MEALS)

    const {
        data: mealItems,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllMealItemsQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner className=""
                                   backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content =
            <MealSearchList items={ mealItems } filterText={ filterText } filterCategory={ filterCategory }/>
    }

    return (
        <>
            <div className="flex w-full items-center">
                <SearchInput filterText={ filterText } onFilterTextChange={ onFilterTextChange }/>

                <PrimaryButton className="ml-2 aspect-square text-gray-50 md:ml-4 md:aspect-auto md:px-4"
                               action={ () => navigate(PROFILE_NEW_MEAL_DETAIL_ROUTE) }>
                    <span className="text-2xl material-icons-round">add</span>
                    <span className="hidden whitespace-nowrap px-2 text-base font-medium tracking-wide md:inline">New meal</span>
                </PrimaryButton>
            </div>
            <SearchCategoryFilter className="mb-8"
                                  selected={ filterCategory }
                                  onSelectedChange={ setFilterCategory }
                                  categories={ MEAL_SEARCH_CATEGORIES }/>
            { content }
        </>
    )
}