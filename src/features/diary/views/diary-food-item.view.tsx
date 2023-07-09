import { useNavigate, useParams } from 'react-router-dom';
import { FoodItemComponent } from '../../food/components/food-item-component.tsx';
import { FoodItemAmountSelector } from '../../food/components/food-item-amount-selector.tsx';
import { useState } from 'react';
import { DIARY_ROUTE } from '../../../routes.ts';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectFoodItems } from '../../../redux/slices/food-items-slice.ts';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';

export const DiaryFoodItemView = () => {
    const navigate = useNavigate()
    const foodId = useParams()['id'] ?? 0
    const foodItem = useAppSelector(selectFoodItems).find(item => item.id === foodId)!
    const [amount, setAmount] = useState(foodItem.amount)

    const onRemove = (value: number) => setAmount(currentAmount => currentAmount - value)
    const onAdd = (value: number) => setAmount(currentAmount => currentAmount + value)
    const onSubmit = (id: string, amount: number) => {
        console.log(id, amount) // submit goes here
        navigate(DIARY_ROUTE)
    }

    return (
        <FoodItemComponent item={ foodItem }>
            <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
            <div className="flex flex-row justify-between">
                <FoodItemAmountSelector amount={ amount } unit={ foodItem.unit } onRemove={ () => onRemove(10) } onAdd={ () => onAdd(10) }/>
                <PrimaryButton className="ml-2 px-4 text-gray-50 md:ml-4"
                               type="button"
                               action={ () => onSubmit(foodItem.id, amount) }>
                    <span className="whitespace-nowrap px-2 text-base font-medium tracking-wide">Add to diary</span>
                </PrimaryButton>
            </div>
        </FoodItemComponent>
    )
}