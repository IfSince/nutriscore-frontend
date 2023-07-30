import { useAppDispatch } from '../../../redux/hooks.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFoodRecordingAndItemByFoodRecordingIdQuery, useUpdateFoodRecordingMutation } from '../../food-recording/food-recording-api-slice.ts';
import { useEffect } from 'react';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { DIARY_ROUTE } from '../../../routes.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { AmountSelector } from '../../form/components/amount-selector/amount-selector.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { FoodRecording } from '../../food-recording/models/food-recording.ts';
import { FoodItemForm } from '../../food/components/food-item-form.tsx';

export const DiaryFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const { data: foodRecording, isLoading, isSuccess, isError, error } =
        useGetFoodRecordingAndItemByFoodRecordingIdQuery(Number(id))

    const [
        updateFoodRecording,
        {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            error: updateError,
        },
    ] = useUpdateFoodRecordingMutation()

    useEffect(() => {
        if (updateIsSuccess) {
            dispatch(addSuccessMessage('Recording updated successfully!'))
            navigate(DIARY_ROUTE)
        }
    }, [dispatch, updateIsSuccess, navigate])

    const onSubmit = (foodRecording: FoodRecording) => updateFoodRecording(foodRecording)

    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const foodItem = foodRecording.foodItem

        content =
            <FoodItemForm form={ foodItem } onSubmit={ () => null } apiError={ error } isLoading={ updateIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ foodRecording } onSubmit={ onSubmit }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ updateError }/>
                        <div className="flex flex-row justify-between">
                            <AmountSelector name="amount" unit={ foodItem.unit }/>
                            <SubmitButton text="Update" isSubmitting={ updateIsLoading }/>
                        </div>
                    </Form>
                </Formik>
            </FoodItemForm>
    }

    return content
}