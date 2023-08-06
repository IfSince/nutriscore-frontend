import { useAppDispatch } from '../../../../redux/hooks.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../../../views/root.view.tsx';
import { useGetMealItemByIdQuery } from '../../../meal/meal-items-api-slice.ts';
import { useAddNewMealRecordingMutation } from '../../../meal-recording/meal-recording-api-slice.ts';
import { addSuccessMessage } from '../../../messages/global-message-slice.ts';
import { DIARY_ROUTE } from '../../../../routes.ts';
import { MealRecording } from '../../../meal-recording/models/meal-recording.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { NEW_ENTITY_ID } from '../../../../redux/constants.ts';
import { getFormattedDate } from '../../../../utils/format-date.ts';
import { TimeOfDay } from '../../../recordings/models/type-of-day.enum.ts';
import { MealItemForm } from '../../../meal/components/meal-item-form.tsx';
import { Form, Formik } from 'formik';
import { AmountSelector } from '../../../form/components/amount-selector/amount-selector.tsx';
import { SubmitButton } from '../../../../common/button/components/submit-button.tsx';
import { Unit } from '../../../unit.ts';

export const DiaryAddMealItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const userId = useContext(UserIdContext)

    const {
        data: mealItem,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetMealItemByIdQuery(Number(id))

    const [
        addNewMealRecording,
        {
            isLoading: mealRecordingIsLoading,
            isSuccess: mealRecordingIsSuccess,
            error: mealRecordingError,
        },
    ] = useAddNewMealRecordingMutation()

    useEffect(() => {
        if (mealRecordingIsSuccess) {
            dispatch(addSuccessMessage('Meal Recording created successfully!'))
            navigate(DIARY_ROUTE)
        }
    }, [dispatch, mealRecordingIsSuccess, navigate])

    const onSubmit = (mealRecording: MealRecording) => addNewMealRecording(mealRecording)

    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const initialMealRecording: MealRecording = {
            id: NEW_ENTITY_ID,
            userId,
            dateOfRecording: getFormattedDate(new Date()),
            timeOfDay: TimeOfDay.BREAKFAST,
            amount: 1,
            mealItem: mealItem,
        }

        content =
            <MealItemForm form={ mealItem } onSubmit={ () => null } apiError={ error } isLoading={ mealRecordingIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ initialMealRecording } onSubmit={ onSubmit }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ mealRecordingError }/>
                        <div className="flex flex-row justify-between">
                            <AmountSelector name="amount" unit={ Unit.AMOUNT } factor={ 1 }/>
                            <SubmitButton text="Add recording" isSubmitting={ mealRecordingIsLoading }/>
                        </div>
                    </Form>
                </Formik>
            </MealItemForm>
    }

    return content
}