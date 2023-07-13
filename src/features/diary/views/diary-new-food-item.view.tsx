import { FoodItem } from '../../../redux/models/food-item.ts';
import { FoodItemComponent } from '../../food/components/food-item-component.tsx';
import { FoodItemAmountSelector } from '../../food/components/food-item-amount-selector.tsx';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectUser } from '../../../redux/slices/user-slice.ts';
import { NEW_ENTITY_ID } from '../../../redux/constants.ts';

export const DiaryNewFoodItemView = () => {
    const userId = useAppSelector(selectUser).id

    const newFoodItem: FoodItem = {
        id: NEW_ENTITY_ID,
        userId,
        description: 'New food item',
        amount: 0,
        unit: 'g',
        calories: 0,
        protein: '0',
        carbohydrates: '0',
        fats: '0',
        categories: [],
        allergenics: [],
    }

    const [amount, setAmount] = useState(0)

    const onRemove = (value: number) => setAmount(currentAmount => currentAmount - value)
    const onAdd = (value: number) => setAmount(currentAmount => currentAmount + value)

    return (
        <FoodItemComponent item={ newFoodItem }>
            <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
            <div className="flex flex-row justify-between">
                <FoodItemAmountSelector amount={ amount } unit={ newFoodItem.unit } onRemove={ () => onRemove(10) } onAdd={ () => onAdd(10) }/>
                <PrimaryButton className="ml-2 px-4 text-gray-50 md:ml-4"
                               type="button"
                               action={ () => console.log(newFoodItem) }>
                    <span className="whitespace-nowrap px-2 text-base font-medium tracking-wide">Add to diary</span>
                </PrimaryButton>
            </div>
        </FoodItemComponent>
    )
}