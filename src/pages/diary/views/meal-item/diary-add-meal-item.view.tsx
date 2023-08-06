import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DIARY_ROUTE } from '../../../../routes.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { getFormattedDate } from '../../../../utils/format-date.ts';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../../common/button/components/submit-button.tsx';
import { useGetMealItemByIdQuery } from '../../../../features/meal/meal-items-api-slice.ts';
import { useAddNewMealRecordingMutation } from '../../../../features/meal-recording/meal-recording-api-slice.ts';
import { MealRecording } from '../../../../features/meal-recording/models/meal-recording.ts';
import { MealItemForm } from '../../../../features/meal/components/meal-item-form.tsx';
import { Unit } from '../../../../features/unit.ts';
import { useAppDispatch } from '../../../../hooks.ts';
import { UserIdContext } from '../../../root.view.tsx';
import { addSuccessMessage } from '../../../../common/messages/global-message-slice.ts';
import { NEW_ENTITY_ID } from '../../../../common/constants.ts';
import { TimeOfDay } from '../../../../features/type-of-day.enum.ts';
import { AmountSelector } from '../../../../common/form/components/amount-selector/amount-selector.tsx';

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
            <MealItemForm form={ mealItem } onSubmit={ () => null } apiError={ error }
                          isLoading={ mealRecordingIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ initialMealRecording } onSubmit={ addNewMealRecording }>
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