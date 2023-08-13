import { useAppDispatch } from '../../../hooks.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEditWeightRecordingMutation, useGetWeightRecordingByIdQuery } from '../../../features/weight-recording/weight-recording-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { WeightRecordingForm } from '../../../features/weight-recording/components/weight-recording-form.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { Header } from '../../../common/header.tsx';

export const ProfileEditWeightRecordingView = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    const {
        data: weightRecording,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetWeightRecordingByIdQuery(Number(id))

    const [
        updateWeightRecording, {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            error: updateError,
        },
    ] = useEditWeightRecordingMutation()

    useEffect(() => {
        if (updateIsSuccess) {
            dispatch(addSuccessMessage('Weight Recording updated successfully!'))
        }
    }, [dispatch, weightRecording, isSuccess, updateIsSuccess])

    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content =
            <WeightRecordingForm form={ weightRecording } onSubmit={ updateWeightRecording } isLoading={ updateIsLoading } apiError={ updateError }>
                <SubmitButton text="Update" isSubmitting={ updateIsLoading }/>
            </WeightRecordingForm>
    }

    return (
        <>
            <Header title="New Weight Recording"/>
            { content }
        </>
    )
}
