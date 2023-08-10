import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { DIARY_ROUTE } from '../../../routes.ts';
import { useGetFoodItemByIdQuery } from '../../../features/food/food-items-api-slice.ts';
import { useAddNewFoodRecordingMutation } from '../../../features/food-recording/food-recording-api-slice.ts';
import { FoodRecording } from '../../../features/food-recording/models/food-recording.ts';
import { FoodItemForm } from '../../../features/food/components/food-item-form.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { NEW_ENTITY_ID } from '../../../common/constants.ts';
import { TimeOfDay } from '../../../features/type-of-day.enum.ts';
import { AmountSelector } from '../../../common/form/components/amount-selector/amount-selector.tsx';
import { TimeOfDaySelector } from '../../../common/form/components/time-of-day-selector/time-of-day-selector.tsx';
import { selectDate } from '../../../common/date-picker/date-slice.ts';

export const DiaryAddFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const date = new Date(useAppSelector(selectDate))
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


    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const initialFoodRecording: FoodRecording = {
            id: NEW_ENTITY_ID,
            userId,
            dateOfRecording: getFormattedDate(date),
            timeOfDay: TimeOfDay.BREAKFAST,
            amount: foodItem.amount,
            foodItem: foodItem,
        }

        content =
            <FoodItemForm form={ foodItem } onSubmit={ () => null } apiError={ error }
                          isLoading={ foodRecordingIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ initialFoodRecording } onSubmit={ addNewFoodRecording }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ foodRecordingError }/>
                        <div className="flex justify-between flex-col gap-x-8 gap-y-4 xs:flex-row lg:flex-col xl:flex-row">
                            <div className="flex justify-between items-center gap-6">
                                <AmountSelector name="amount" unit={ foodItem.unit } factor={ 1 }/>
                                <TimeOfDaySelector name="timeOfDay"/>
                            </div>
                            <SubmitButton text="Add Recording" isSubmitting={ foodRecordingIsLoading } kind="grow"/>
                        </div>
                    </Form>
                </Formik>
            </FoodItemForm>
    }

    return content
}