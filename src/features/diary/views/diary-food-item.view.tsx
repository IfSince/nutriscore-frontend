import { useNavigate, useParams } from 'react-router-dom';
import { FoodItemComponent } from '../../food/components/food-item-component.tsx';
import { FoodItemAmountSelector } from '../../food/components/food-item-amount-selector.tsx';
import { ReactElement, useState } from 'react';
import { DIARY_ROUTE } from '../../../routes.ts';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { useGetFoodItemByIdQuery } from '../../food/food-items-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';

export const DiaryFoodItemView = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        data: foodItem,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetFoodItemByIdQuery(Number(id))

    const [amount, setAmount] = useState(foodItem?.amount ?? 0)

    const onRemove = (value: number) => setAmount(currentAmount => currentAmount - value)
    const onAdd = (value: number) => setAmount(currentAmount => currentAmount + value)
    const onSubmit = (id: number, amount: number) => {
        console.log(id, amount) // submit goes here
        navigate(DIARY_ROUTE)
    }

    let content: ReactElement = <></>
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        console.log(error)
        content = <div>{ error.toString() }</div>
    } else if (isSuccess) {
        content =
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
    }

    return content
}