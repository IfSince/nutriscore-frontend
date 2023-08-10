import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { DIARY_ROUTE } from '../../../routes.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../hooks.ts';
import { useGetFoodRecordingByIdQuery, useUpdateFoodRecordingMutation } from '../../../features/food-recording/food-recording-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { FoodItemForm } from '../../../features/food/components/food-item-form.tsx';
import { AmountSelector } from '../../../common/form/components/amount-selector/amount-selector.tsx';
import { TimeOfDaySelector } from '../../../common/form/components/time-of-day-selector/time-of-day-selector.tsx';

export const DiaryFoodItemView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        data: foodRecording,
        isLoading,
        isSuccess,
        isError,
        error,
    } =
        useGetFoodRecordingByIdQuery(Number(id))

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

    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const foodItem = foodRecording.foodItem

        content =
            <FoodItemForm form={ foodItem } onSubmit={ () => {} } apiError={ error } isLoading={ updateIsLoading } editable={ false }>
                <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                <Formik initialValues={ foodRecording } onSubmit={ updateFoodRecording }>
                    <Form>
                        <ApiErrorMessage apiErrorResponse={ updateError }/>
                        <div className="flex justify-between flex-col gap-x-8 gap-y-4 xs:flex-row lg:flex-col xl:flex-row">
                            <div className="flex justify-between items-center gap-6">
                                <AmountSelector name="amount" unit={ foodItem.unit }/>
                                <TimeOfDaySelector name="timeOfDay"/>
                            </div>
                            <SubmitButton text="Update" isSubmitting={ updateIsLoading }/>
                        </div>
                    </Form>
                </Formik>
            </FoodItemForm>
    }

    return content
}