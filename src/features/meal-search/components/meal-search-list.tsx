import { MealItem } from '../../meal/models/meal-item.ts';
import { SEARCH_ALL_MEALS, SEARCH_FAVORITES, SEARCH_POPULAR, SEARCH_YOUR_MEALS } from '../meal-search-categories.ts';
import { useContext } from 'react';
import { MealSearchListItem } from './meal-search-list-item.tsx';
import { UserIdContext } from '../../../pages/root.view.tsx';
import { SearchCategory } from '../../../common/form/components/search-input/models/search-category.ts';
import { PROFILE_NEW_MEAL_DETAIL_ROUTE } from '../../../routes.ts';
import { CustomLink } from '../../../common/link/CustomLink.tsx';

export const MealSearchList = ({ items, filterText, filterCategory }: { items: MealItem[], filterText: string, filterCategory: SearchCategory }) => {
    const userId = useContext(UserIdContext)

    const categoryFilterFunctions = {
        [SEARCH_ALL_MEALS.description]: (item: MealItem) => item,
        [SEARCH_YOUR_MEALS.description]: (item: MealItem) => item.userId === userId,
        [SEARCH_FAVORITES.description]: (item: MealItem) => item,
        [SEARCH_POPULAR.description]: (item: MealItem) => item,
    }

    const filteredItems = items
        .filter(categoryFilterFunctions[filterCategory.description])
        .filter(item => item.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)

    return (
        <ul className="flex flex-col gap-2">
            {
                filteredItems.length
                    ? filteredItems
                        .map(mealItem => <MealSearchListItem key={ mealItem.id } mealItem={ mealItem }/>)
                    : <span className="w-full text-center text-sm font-medium">
                        Not found what you're looking for? Create a new meal
                        <CustomLink to={ PROFILE_NEW_MEAL_DETAIL_ROUTE } text="here."></CustomLink>
                      </span>
            }
        </ul>
    )
}