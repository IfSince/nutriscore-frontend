import { FoodItem } from '../../../redux/models/food-item.ts';
import { DeleteIconButton } from '../../../common/button/components/icon/delete-icon-button.tsx';
import { AmountSelector } from '../../form/components/amount-selector/amount-selector.tsx';

interface MealItemIngredientsListItemProps {
    name: string
    foodItem: FoodItem
    disabled: boolean
    onRemove: () => void
}

export const MealItemIngredientsListItem = ({ name, foodItem, disabled, onRemove }: MealItemIngredientsListItemProps) => {
    return (
        <li className="flex items-center rounded-md border px-3 py-2 justify-between">
            <div className="flex items-center gap-4 md:gap-6">
                <div className="flex aspect-square h-11 lg:h-12 items-center justify-center rounded-md bg-gray-200 text-gray-400">
                    <span className="material-icons-round">image</span>
                </div>
                <span className="font-medium">{ foodItem.description }</span>
            </div>

            <div className="flex items-center gap-4">
                <AmountSelector name={ name } unit={ foodItem.unit } disabled={ disabled } factor={ 1 }/>
                <DeleteIconButton icon="delete" action={ onRemove } disabled={ disabled }/>
            </div>
        </li>
    );
}