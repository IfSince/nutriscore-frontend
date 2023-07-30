import { FoodItem } from '../../../redux/models/food-item.ts';
import { NEW_ENTITY_ID } from '../../../redux/constants.ts';
import { Unit } from '../../unit.ts';
import { FoodItemForm } from '../../food/components/food-item-form.tsx';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../../views/root.view.tsx';
import { useAddNewFoodItemMutation } from '../../food/food-items-api-slice.ts';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { useNavigate } from 'react-router-dom';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { DIARY_ROUTE } from '../../../routes.ts';

export const DiaryNewFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const userId = useContext(UserIdContext)

    const [addNewFoodItem, { isLoading, isSuccess, error }] = useAddNewFoodItemMutation()

    useEffect(() => {
        if (isSuccess) {
            dispatch(addSuccessMessage('Food item created successfully!'))
            navigate(DIARY_ROUTE)
        }
    }, [dispatch, isSuccess, navigate])

    const initialFoodItem: FoodItem = {
        id: NEW_ENTITY_ID,
        userId,
        description: 'Title',
        amount: 1,
        unit: Unit.AMOUNT,
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fats: 0,
        categories: [],
        allergenics: [],
    }

    return (
        <FoodItemForm form={ initialFoodItem }
                      onSubmit={ addNewFoodItem }
                      isLoading={ isLoading }
                      apiError={ error }
                      editable={ true }/>
    )
}