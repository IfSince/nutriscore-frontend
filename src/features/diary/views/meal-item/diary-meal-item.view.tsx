import { useAppDispatch } from '../../../../redux/hooks.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMealRecordingByIdQuery, useUpdateMealRecordingMutation } from '../../../meal-recording/meal-recording-api-slice.ts';
import { useEffect } from 'react';
import { addSuccessMessage } from '../../../messages/global-message-slice.ts';
import { DIARY_ROUTE } from '../../../../routes.ts';
import { MealRecording } from '../../../meal-recording/models/meal-recording.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { AmountSelector } from '../../../form/components/amount-selector/amount-selector.tsx';
import { SubmitButton } from '../../../../common/button/components/submit-button.tsx';
import { MealItemForm } from '../../../meal/components/meal-item-form.tsx';
import { Unit } from '../../../unit.ts';

export const DiaryMealItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const { data: mealRecording, isLoading, isSuccess, isError, error } =
        useGetMealRecordingByIdQuery(Number(id))

    const [
        updateFoodRecording,
        {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            error: updateError,
        },
    ] = useUpdateMealRecordingMutation()

    useEffect(() => {
        if (updateIsSuccess) {
            dispatch(addSuccessMessage('Meal Recording updated successfully!'))
            navigate(DIARY_ROUTE)
        }
    }, [dispatch, updateIsSuccess, navigate])

    const onSubmit = (mealRecording: MealRecording) => updateFoodRecording(mealRecording)

    if (isLoading) {
        return <CenteredSpinner/>
    } else if (isError) {
        return <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const mealItem = mealRecording.mealItem

        return (
            <MealItemForm form={ mealItem } onSubmit={ () => null } apiError={ error } isLoading={ updateIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ mealRecording } onSubmit={ onSubmit }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ updateError }/>
                        <div className="flex flex-row justify-between">
                            <AmountSelector name="amount" unit={ Unit.AMOUNT } factor={ 1 }/>
                            <SubmitButton text="Update" isSubmitting={ updateIsLoading }/>
                        </div>
                    </Form>
                </Formik>
            </MealItemForm>
        )
    }
}