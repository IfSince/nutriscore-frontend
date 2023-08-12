import { Link } from 'react-router-dom';
import { MealItem } from '../../meal/models/meal-item.ts';
import { PROFILE_MEAL_DETAIL_ROUTE } from '../../../routes.ts';

export const MealSearchListItem = ({ mealItem }: { mealItem: MealItem }) =>
    <li className="h-28 rounded-md border border-gray-300 transition-colors hover:bg-gray-50 md:h-32">
        <Link className="flex h-full flex-row items-center gap-6 p-4 md:p-5 relative"
              to={ PROFILE_MEAL_DETAIL_ROUTE.replace(':id', mealItem.id.toString()) }>
            <div className="hidden sm:flex aspect-square h-full items-center justify-center rounded-md bg-gray-200 text-gray-400">
                <span className="material-icons-round">image</span>
            </div>

            <div className="mb-1 flex h-full flex-col justify-between">
                <span className="text-lg font-bold md:text-xl">{ mealItem.description }</span>
                <span className="flex flex-col">
                    <span className="text-sm leading-6">Categories</span>
                    <span className="font-bold leading-4">
                        { mealItem.categories.length > 0 ? mealItem.categories.map(it => it.description).join(', ') : '-' }
                    </span>
                </span>
            </div>

            <div className="ml-0 flex h-full max-w-md grow gap-6 sm:justify-between sm:gap-0 md:ml-10">
                <span className="hidden flex-col xs:flex">
                    <span className="text-sm">Ingredients</span>
                    <span className="font-bold">{ mealItem.foodItems.length }</span>
                </span>

                <span className="hidden flex-col xl:flex">
                    <span className="text-sm">Calories</span>
                    <span className="font-bold">{ mealItem.calories }</span>
                </span>

                <span className="hidden flex-col xl:flex">
                    <span className="text-sm">Protein</span>
                    <span className="font-bold">{ mealItem.protein }</span>
                </span>

                <span className="hidden flex-col xl:flex">
                    <span className="text-sm">Carbs</span>
                    <span className="font-bold">{ mealItem.carbohydrates }</span>
                </span>

                <span className="hidden flex-col xl:flex">
                    <span className="text-sm">Fats</span>
                    <span className="font-bold">{ mealItem.fats }</span>
                </span>
            </div>

            <div className="absolute top-0 right-0 m-2.5 md:m-4 flex justify-center items-center flex-col sm:flex-row gap-y-1 gap-x-4">
                <div data-tooltip-target="tooltip-dark"
                     className="h-8 md:h-10 aspect-square bg-gray-200 rounded-full flex justify-center items-center flex-col">
                    <span className="material-icons-round text-lg md:text-xl">person</span>
                </div>
                <span className="text-sm font-medium">{ mealItem.userName }</span>
            </div>
        </Link>
    </li>