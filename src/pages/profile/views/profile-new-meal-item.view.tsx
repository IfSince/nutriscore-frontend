import { useAppDispatch } from '../../../hooks.ts';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../root.view.tsx';
import { useAddNewMealItemMutation } from '../../../features/meal/meal-items-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { PROFILE_MEAL_DETAIL_ROUTE } from '../../../routes.ts';
import { NEW_ENTITY_ID } from '../../../common/constants.ts';
import { MealItem } from '../../../features/meal/models/meal-item.ts';
import { MealItemForm } from '../../../features/meal/components/meal-item-form.tsx';

export const ProfileNewMealItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const userId = useContext(UserIdContext)

    const [addNewMealItem, { data: mealItem, isLoading, isSuccess, error }] = useAddNewMealItemMutation()

    useEffect(() => {
        if (isSuccess && mealItem) {
            dispatch(addSuccessMessage('Meal item created successfully!'))
            navigate(PROFILE_MEAL_DETAIL_ROUTE.replace(':id', mealItem.id.toString()), { replace: true })
        }
    }, [dispatch, mealItem, isSuccess, navigate])

    const initialMealItem: MealItem = {
        id: NEW_ENTITY_ID,
        userId,
        description: 'Title',
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fats: 0,
        categories: [],
        foodItems: []
    }

    return (
        <MealItemForm form={ initialMealItem }
                      onSubmit={ addNewMealItem }
                      isLoading={ isLoading }
                      apiError={ error }
                      editable={ true }/>
    )
}
