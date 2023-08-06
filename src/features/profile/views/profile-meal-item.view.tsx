import { useAppDispatch } from '../../../redux/hooks.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditMealItemMutation, useGetMealItemByIdQuery } from '../../meal/meal-items-api-slice.ts';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../../views/root.view.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { MealItemForm } from '../../meal/components/meal-item-form.tsx';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { PROFILE_MEAL_SEARCH_ROUTE } from '../../../routes.ts';

export const ProfileMealItemView = () => {
    const userId = useContext(UserIdContext)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        data: mealItem,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetMealItemByIdQuery(Number(id))

    const [
        editMealItem,
        editRequest,
    ] = useEditMealItemMutation()


    useEffect(() => {
        if (editRequest.isSuccess) {
            dispatch(addSuccessMessage('Meal updated successfully!'))
            navigate(PROFILE_MEAL_SEARCH_ROUTE)
        }
    }, [dispatch, editRequest.isSuccess, navigate])

    if (isLoading) {
        return <CenteredSpinner/>
    } else if (isError) {
        return <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        return <MealItemForm form={ mealItem }
                             onSubmit={ editMealItem }
                             isLoading={ isLoading || editRequest.isLoading }
                             editable={ mealItem.userId === userId }/>
    }
}