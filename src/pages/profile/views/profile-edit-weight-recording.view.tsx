import { useAppDispatch } from '../../../hooks.ts';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    useDeleteWeightRecordingMutation,
    useEditWeightRecordingMutation,
    useGetWeightRecordingByIdQuery,
} from '../../../features/weight-recording/weight-recording-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { WeightRecordingForm } from '../../../features/weight-recording/components/weight-recording-form.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { Header } from '../../../common/header.tsx';
import { DeleteButton } from '../../../common/button/components/delete-button.tsx';
import { PROFILE_ROUTE } from '../../../routes.ts';

export const ProfileEditWeightRecordingView = () => {
    const navigate = useNavigate()
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

    const [
        deleteWeightRecording, {
            isLoading: deleteIsLoading,
            isSuccess: deleteIsSuccess,
            error: deleteError,
        },
    ] = useDeleteWeightRecordingMutation()

    useEffect(() => {
        if (updateIsSuccess) {
            dispatch(addSuccessMessage('Weight Recording updated successfully!'))
        }
        if (deleteIsSuccess) {
            dispatch(addSuccessMessage('Weight recording deleted successfully!'))
            navigate(PROFILE_ROUTE)
        }
    }, [dispatch, weightRecording, isSuccess, updateIsSuccess, deleteIsSuccess])

    let content
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content =
            <WeightRecordingForm form={ weightRecording }
                                 onSubmit={ updateWeightRecording }
                                 isLoading={ updateIsLoading || deleteIsLoading }
                                 apiError={ updateError || deleteError }>
                <DeleteButton className="aspect-square sm:aspect-auto sm:px-6"
                              action={ () => deleteWeightRecording({ userId: weightRecording.userId, weightRecordingId: weightRecording.id }) }
                              isSubmitting={ deleteIsLoading }
                              disabled={ updateIsLoading }>
                    <span className="material-icons-round ">delete</span>
                    <span className="hidden sm:inline ml-2 font-medium whitespace-nowrap text-base">Delete</span>
                </DeleteButton>
                <SubmitButton text="Update" isSubmitting={ updateIsLoading } disabled={ deleteIsLoading }/>
            </WeightRecordingForm>
    }

    return (
        <>
            <Header title="New Weight Recording"/>
            { content }
        </>
    )
}
