import { CustomArrayField } from '../../../common/form/components/array-field/custom-array-field.tsx';
import { FoodItem } from '../../food/models/food-item.ts';
import { MealItemIngredientsListItem } from './meal-item-ingredients-list-item.tsx';

export const MealItemIngredientsList = ({ foodItems, disabled }: { foodItems: FoodItem[], disabled: boolean }) => {
    return (
        <ul className="flex flex-col gap-2">
            {
                <CustomArrayField name="foodItems" values={ foodItems }>
                    {
                        ({ value, index, onRemove }) => (
                            <MealItemIngredientsListItem key={ value.id }
                                                         name={ `foodItems[${ index }].selectedAmount` }
                                                         foodItem={ value }
                                                         onRemove={ onRemove }
                                                         disabled={ disabled }/>
                        )
                    }
                </CustomArrayField>
            }
        </ul>
    );
}