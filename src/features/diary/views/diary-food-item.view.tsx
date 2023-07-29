import { useNavigate, useParams } from 'react-router-dom';
import { FoodItemComponent } from '../../food/components/food-item-component.tsx';
import { ReactElement, useContext, useEffect } from 'react';
import { useGetFoodItemByIdQuery } from '../../food/food-items-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { NEW_ENTITY_ID } from '../../../redux/constants.ts';
import { FoodRecording } from '../../food-recording/models/food-recording.ts';
import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { AmountSelector } from '../../form/components/amount-selector/amount-selector.tsx';
import { useAddNewFoodRecordingMutation } from '../../food-recording/food-recording-api-slice.ts';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { DIARY_ROUTE } from '../../../routes.ts';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { UserIdContext } from '../../../views/root.view.tsx';

export const DiaryFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const userId = useContext(UserIdContext)

    const {
        data: foodItem,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetFoodItemByIdQuery(Number(id))

    const [
        addNewFoodRecording,
        {
            isLoading: foodRecordingIsLoading,
            isSuccess: foodRecordingIsSuccess,
            error: foodRecordingError,
        },
    ] = useAddNewFoodRecordingMutation()
    
    useEffect(() => {
        if (foodRecordingIsSuccess) {
            dispatch(addSuccessMessage('Recording created successfully!'))
            navigate(DIARY_ROUTE)
        }
    }, [dispatch, foodRecordingIsSuccess, navigate])

    const onSubmit = (foodRecording: FoodRecording) => addNewFoodRecording(foodRecording)

    let content: ReactElement = <></>
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {

        const initialFoodRecording: FoodRecording = {
            id: NEW_ENTITY_ID,
            userId,
            foodId: foodItem.id,
            dateOfRecording: getFormattedDate(new Date()),
            timeOfDay: TimeOfDay.BREAKFAST,
            amount: foodItem.amount,
        }

        content =
            <FoodItemComponent item={ foodItem }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ initialFoodRecording } onSubmit={ onSubmit }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ foodRecordingError }/>
                        <div className="flex flex-row justify-between">
                            <AmountSelector name="amount" unit={ foodItem.unit }/>
                            <SubmitButton text="Add to diary" disabled={ foodRecordingIsLoading } isSubmitting={ foodRecordingIsLoading }/>
                        </div>
                    </Form>
                </Formik>
            </FoodItemComponent>
    }

    return content
}