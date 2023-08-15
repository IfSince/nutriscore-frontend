import { CustomArrayField } from '../../../common/form/components/array-field/custom-array-field.tsx';
import { FoodItem } from '../../food/models/food-item.ts';
import { MealItemIngredientsListItem } from './meal-item-ingredients-list-item.tsx';
import { FoodItemSelectorModal } from './food-item-selector-modal.tsx';
import { useField } from 'formik';

export const MealItemIngredientsList = ({ foodItems, disabled }: { foodItems: FoodItem[], disabled: boolean }) => {
    const [field, , helpers] = useField<FoodItem[]>('foodItems')

    const addItem = (item?: FoodItem) => {
        if (item && !field.value.some(it => it.id === item.id)) {
            const foodItemToAdd: FoodItem = { ...item, selectedAmount: item.amount }
            helpers.setValue([...field.value, foodItemToAdd])
        }
    }

    return (
        <>
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
                {
                    disabled && foodItems.length === 0 && <span className="mt-4 w-full text-center text-sm font-medium">No ingredients selected</span>
                }
                {
                    !disabled &&
                    <FoodItemSelectorModal onAdd={ addItem }/>
                }
            </ul>
        </>
    )
}