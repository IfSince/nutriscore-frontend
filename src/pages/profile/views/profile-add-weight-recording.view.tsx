import { useAppDispatch } from '../../../hooks.ts';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../root.view.tsx';
import { WeightRecordingForm } from '../../../features/weight-recording/components/weight-recording-form.tsx';
import { useAddNewWeightRecordingMutation } from '../../../features/weight-recording/weight-recording-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { WeightRecording } from '../../../features/weight-recording/models/weight-recording.ts';
import { NEW_ENTITY_ID } from '../../../common/constants.ts';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { Header } from '../../../common/header.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';

export const ProfileAddWeightRecordingView = () => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const [addWeightRecording, { data: weightRecording, isLoading, isSuccess, error }] = useAddNewWeightRecordingMutation()

    useEffect(() => {
        if (isSuccess && weightRecording) {
            dispatch(addSuccessMessage('Weight Recording updated successfully!'))
        }
    }, [dispatch, weightRecording, isSuccess])

    const initialWeightRecording: WeightRecording = {
        id: NEW_ENTITY_ID,
        userId,
        dateOfRecording: getFormattedDate(new Date()),
        weight: 0,
    }

    return (
        <>
            <Header title="New Weight Recording"/>
            <WeightRecordingForm form={ initialWeightRecording } onSubmit={ addWeightRecording } isLoading={ isLoading } apiError={ error }>
                <SubmitButton text="Create" isSubmitting={ isLoading }/>
            </WeightRecordingForm>
        </>
    )
}
