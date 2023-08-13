import { apiSlice, USER_METADATA_TAG, WEIGHT_RECORDING_TAG } from '../../api/api-slice.ts';
import { WeightRecording } from './models/weight-recording.ts';

export const weightRecordingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getWeightRecordingById: builder.query<WeightRecording, number>({
                query: (id) => `weight-recordings/${ id }`,
                providesTags: (_result, _error, arg) => [{ type: WEIGHT_RECORDING_TAG, id: arg }],
            }),
            addNewWeightRecording: builder.mutation<WeightRecording, WeightRecording>({
                query: (weightRecording) => (
                    {
                        url: `users/${ weightRecording.userId }/weight-recordings`,
                        method: 'POST',
                        body: weightRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) => [
                    { type: WEIGHT_RECORDING_TAG, id },
                    { type: USER_METADATA_TAG, id: userId },
                ],
            }),
            editWeightRecording: builder.mutation<WeightRecording, WeightRecording>({
                query: weightRecording => (
                    {
                        url: `weight-recordings/${ weightRecording.id }`,
                        method: 'PUT',
                        body: weightRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) => [
                    { type: WEIGHT_RECORDING_TAG, id },
                    { type: USER_METADATA_TAG, id: userId },
                ],
            }),
        }
    ),
})

export const {
    useGetWeightRecordingByIdQuery,
    useAddNewWeightRecordingMutation,
    useEditWeightRecordingMutation,
} = weightRecordingApiSlice