import { FoodItem } from '../../food/models/food-item.ts';

export const FoodItemSearchListItem = (foodItem: FoodItem) =>
    <li className="rounded-md border border-gray-300 transition-colors hover:bg-gray-50">
        <div className="grid grid-cols-2 h-full gap-6 py-2 px-4 align-middle">
            <span className="flex items-center text-lg font-medium">{ foodItem.description }</span>
        </div>
    </li>
