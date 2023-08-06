import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { DIARY_ROUTE } from '../../../../routes.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../../common/button/components/submit-button.tsx';
import {
    useGetMealRecordingByIdQuery,
    useUpdateMealRecordingMutation,
} from '../../../../features/meal-recording/meal-recording-api-slice.ts';
import { MealItemForm } from '../../../../features/meal/components/meal-item-form.tsx';
import { Unit } from '../../../../features/unit.ts';
import { addSuccessMessage } from '../../../../common/messages/global-message-slice.ts';
import { useAppDispatch } from '../../../../hooks.ts';
import { AmountSelector } from '../../../../common/form/components/amount-selector/amount-selector.tsx';

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

    if (isLoading) {
        return <CenteredSpinner/>
    } else if (isError) {
        return <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const mealItem = mealRecording.mealItem

        return (
            <MealItemForm form={ mealItem } onSubmit={ () => null } apiError={ error } isLoading={ updateIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ mealRecording } onSubmit={ updateFoodRecording }>
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