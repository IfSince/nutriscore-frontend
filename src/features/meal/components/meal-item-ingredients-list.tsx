import { FoodItem } from '../../../redux/models/food-item.ts';
import { MealItemIngredientsListItem } from './meal-item-ingredients-list-item.tsx';

export const MealItemIngredientsList = ({ foodItems, disabled }: { foodItems: FoodItem[], disabled: boolean }) =>
    (
        <ul className="flex flex-col gap-2">
            {
                foodItems.map((item, index) => (
                    <MealItemIngredientsListItem key={ item.id }
                                                 name={ `foodItems[${ index }].selectedAmount` }
                                                 foodItem={ item }
                                                 disabled={ disabled }/>
                ))
            }
        </ul>
    )