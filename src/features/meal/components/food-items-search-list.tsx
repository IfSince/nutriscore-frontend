import { FoodItem } from '../../food/models/food-item.ts';
import { FoodItemSearchListItem } from './food-item-search-list-item.tsx';

interface FoodItemsSearchListProps {
    foodItems: FoodItem[],
    filterText: string,
    onFoodItemSelected: (item?: FoodItem) => void
}

export const FoodItemsSearchList = ({ foodItems, filterText, onFoodItemSelected }: FoodItemsSearchListProps) => {
    const filteredItems = foodItems
        .filter(item => item.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)

    return (
        <ul className="flex flex-col gap-2 w-full mt-6 md:mt-10">
            {
                filteredItems.length
                    ? filteredItems.map(item =>
                        <button type="button" key={ item.id } onClick={ () => onFoodItemSelected(item) }>
                            <FoodItemSearchListItem { ...item }/>
                        </button>)
                    : <span className="mt-4 md:mt-10 w-full text-center text-sm font-medium">No food items found</span>
            }
        </ul>
    )
}
