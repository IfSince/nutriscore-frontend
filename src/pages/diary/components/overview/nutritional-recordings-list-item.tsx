import { Link } from 'react-router-dom';
import { DIARY_FOOD_ITEM_ROUTE, DIARY_MEAL_ITEM_ROUTE } from '../../../../routes.ts';
import { useContext, useEffect } from 'react';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { NutritionalRecording } from '../../../../features/nutritional-recordings/models/nutritional-recordings-by-date.ts';
import { useAppDispatch } from '../../../../hooks.ts';
import { UserIdContext } from '../../../root.view.tsx';
import { useDeleteFoodRecordingMutation } from '../../../../features/food-recording/food-recording-api-slice.ts';
import { useDeleteMealRecordingMutation } from '../../../../features/meal-recording/meal-recording-api-slice.ts';
import { addSuccessMessage } from '../../../../common/messages/global-message-slice.ts';
import { Unit, UNIT_ABBREVIATIONS } from '../../../../features/unit.ts';
import { DeleteIconButton } from '../../../../common/button/components/icon/delete-icon-button.tsx';

export const NutritionalRecordingsListItem = ({
    id,
    type,
    description,
    amount,
    unit = Unit.AMOUNT,
    calories,
    protein,
    carbohydrates,
    fats,
}: NutritionalRecording) => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const [
        deleteFoodRecording,
        foodRecordingRequest,
    ] = useDeleteFoodRecordingMutation()

    const [
        deleteMealRecording,
        mealRecordingRequest,
    ] = useDeleteMealRecordingMutation()

    useEffect(() => {
        if (foodRecordingRequest.isSuccess || mealRecordingRequest.isSuccess) {
            dispatch(addSuccessMessage('Recording deleted successfully!'))
        }
    })

    const routes = {
        ['FOOD']: DIARY_FOOD_ITEM_ROUTE.replace(':id', id.toString()),
        ['MEAL']: DIARY_MEAL_ITEM_ROUTE.replace(':id', id.toString()),
    }
    const deleteActions = {
        ['FOOD']: () => deleteFoodRecording({ userId, foodRecordingId: id }),
        ['MEAL']: () => deleteMealRecording({ userId, mealRecordingId: id }),
    }

    return (
        <>
            <ApiErrorMessage apiErrorResponse={ foodRecordingRequest.error || mealRecordingRequest.error }/>
            <Link
                className="py-2 transition-colors w-full grid grid-cols-[auto_min-content] xs:grid-cols-4 md:grid-cols-7 bg-white items-center font-medium hover:text-gray-600 group"
                to={ routes[type] }>

                <div className="flex xs:col-span-2">
                    <div
                        className="flex aspect-square h-12 items-center justify-center rounded-xl bg-gray-200 text-gray-400 mr-6 lg:mr-8 transition-colors
                                   group-hover:bg-gray-300 group-hover:text-gray-500">
                        <span className="material-icons-round text-xl">image</span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-gray-600 tracking-tight lg:text-xl">{ description }</span>
                        <span
                            className="text-sm lg:text-base text-gray-400 group-hover:text-gray-500 transition-colors">{ amount } { UNIT_ABBREVIATIONS[unit] }</span>
                    </div>
                </div>

                <span className="hidden flex-col xs:flex">
                    <span className="font-bold lg:text-lg text-gray-500 group-hover:text-gray-600 transition-colors">{ calories } kcal</span>
                </span>

                <span className="hidden flex-col md:flex">
                    <span className="font-bold lg:text-lg text-gray-500">{ protein } g</span>
                </span>

                <span className="hidden flex-col md:flex">
                    <span className="font-bold lg:text-lg text-gray-500">{ carbohydrates } g</span>
                </span>

                <span className="hidden flex-col md:flex">
                    <span className="font-bold lg:text-lg text-gray-500">{ fats } g</span>
                </span>


                <DeleteIconButton className="h-8 lg:h-10 text-xs justify-self-end"
                                  icon="close"
                                  iconStyles="text-xs lg:text-base"
                                  action={ deleteActions[type] }/>
            </Link>
        </>

    );
}