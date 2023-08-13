import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DIARY_ADD_FOOD_ITEM_ROUTE } from '../../../routes.ts';
import { useAppDispatch } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import { useAddNewFoodItemMutation } from '../../../features/food/food-items-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { FoodItem } from '../../../features/food/models/food-item.ts';
import { NEW_ENTITY_ID } from '../../../common/constants.ts';
import { Unit } from '../../../features/unit.ts';
import { FoodItemForm } from '../../../features/food/components/food-item-form.tsx';
import { Header } from '../../../common/header.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';

export const DiaryNewFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const userId = useContext(UserIdContext)

    const [addNewFoodItem, { data: foodItem, isLoading, isSuccess, error }] = useAddNewFoodItemMutation()

    useEffect(() => {
        if (isSuccess && foodItem) {
            dispatch(addSuccessMessage('Food item created successfully!'))
            navigate(DIARY_ADD_FOOD_ITEM_ROUTE.replace(':id', foodItem.id.toString()))
        }
    }, [dispatch, foodItem, isSuccess, navigate])

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
        <>
            <Header backButton={ <PrimaryIconButton className="lg:hidden z-9999"
                                                    icon={ 'arrow_back' }
                                                    action={ () => navigate(-1) }/> }/>
            <FoodItemForm form={ initialFoodItem }
                          onSubmit={ addNewFoodItem }
                          isLoading={ isLoading }
                          apiError={ error }
                          editable={ true }/>
        </>
    )
}