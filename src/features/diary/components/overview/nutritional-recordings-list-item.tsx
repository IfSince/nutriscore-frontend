import { DeleteIconButton } from '../../../../common/button/components/icon/delete-icon-button.tsx';
import { NutritionalRecording } from '../../../nutritional-recordings/models/nutritional-recordings-by-date.ts';
import { Link } from 'react-router-dom';
import { DIARY_FOOD_ITEM_ROUTE, DIARY_MEAL_ITEM_ROUTE } from '../../../../routes.ts';
import { useDeleteFoodRecordingMutation } from '../../../food-recording/food-recording-api-slice.ts';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../../../views/root.view.tsx';
import { useAppDispatch } from '../../../../redux/hooks.ts';
import { addSuccessMessage } from '../../../messages/global-message-slice.ts';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';

export const NutritionalRecordingsListItem = ({ id, itemId, description, amount, type, calories, unit }: NutritionalRecording) => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const [
        deleteFoodRecording,
        {
            isLoading,
            isSuccess,
            error,
        },
    ] = useDeleteFoodRecordingMutation()

    useEffect(() => {
        if (isSuccess) {
            dispatch(addSuccessMessage('Recording deleted successfully!'))
        }
    })

    const routes = {
        ['FOOD']: DIARY_FOOD_ITEM_ROUTE.replace(':id', itemId.toString()),
        ['MEAL']: DIARY_MEAL_ITEM_ROUTE.replace(':id', itemId.toString()),
    }
    const actions = {
        ['FOOD']: () => deleteFoodRecording({ userId, foodRecordingId: id }),
        ['MEAL']: () => console.log({ userId, mealRecordingId: id }),
    }

    return (
        <>
            <ApiErrorMessage apiErrorResponse={ error }/>
            <Link className="flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 lg:px-4 lg:text-lg"
                  to={ routes[type] }>
                <span className="ml-2 font-bold md:ml-6 lg:ml-8">{ description }</span>

                <div className="ml-4 flex max-w-xl grow gap-2 font-medium text-gray-400 sm:mx-5 sm:justify-evenly xl:mx-20">
                    <span>{ amount }</span>
                    <span className="hidden sm:block">{ calories }{ unit }</span>
                </div>

                <div className="flex gap-2">
                    <DeleteIconButton icon="clear" action={ actions[type] } isSubmitting={ isLoading }/>
                </div>
            </Link>
        </>

    );
}