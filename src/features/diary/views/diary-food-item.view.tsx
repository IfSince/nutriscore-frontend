import { useNavigate, useParams } from 'react-router-dom';
import { dummyFoodItems } from '../data/dummy-food-items.ts';
import { FoodItem } from '../../food/components/food-item.tsx';
import { FoodItemAmountSelector } from '../../food/components/food-item-amount-selector.tsx';
import { useState } from 'react';
import { Button } from '../../../common/button/components/button.tsx';
import { DIARY_ROUTE } from '../../../routes.ts';

export const DiaryFoodItemView = () => {
    const navigate = useNavigate()
    const foodId = +(!!useParams()['id'])
    const foodItem = dummyFoodItems[foodId - 1]
    const [amount, setAmount] = useState(foodItem.amount)

    const onRemove = (value: number) => setAmount(currentAmount => currentAmount - value)
    const onAdd = (value: number) => setAmount(currentAmount => currentAmount + value)
    const onSubmit = (id: number, amount: number) => {
        console.log(id, amount) // submit goes here
        navigate(DIARY_ROUTE)
    }

    return (
        <FoodItem item={ foodItem }>
            <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
            <div className="flex flex-row justify-between">
                <FoodItemAmountSelector amount={ amount } unit={ foodItem.unit } onRemove={ () => onRemove(10) } onAdd={ () => onAdd(10) }/>
                <Button className="ml-2 px-4 text-gray-50 md:ml-4"
                        type="button"
                        level="primary"
                        action={ () => onSubmit(foodItem.id, amount) }>
                    <span className="whitespace-nowrap px-2 text-base font-medium tracking-wide">Add to diary</span>
                </Button>
            </div>
        </FoodItem>
    )
}