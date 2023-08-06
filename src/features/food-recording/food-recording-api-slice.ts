import { apiSlice, FOOD_RECORDING_TAG, NUTRITIONAL_RECORDINGS_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { FoodRecording } from './models/food-recording.ts';

export const foodRecordingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getFoodRecordingById: builder.query<FoodRecording, number>({
                query: id => `food-recordings/${ id }`,
                providesTags: (_result, _error, args) => [{ type: FOOD_RECORDING_TAG, id: args }],
            }),
            updateFoodRecording: builder.mutation<FoodRecording, FoodRecording>({
                query: (foodRecording: FoodRecording) => (
                    {
                        url: `food-recordings/${ foodRecording.id }`,
                        method: 'PUT',
                        body: foodRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) =>
                    [
                        { type: FOOD_RECORDING_TAG, id },
                        { type: USER_METADATA_TAG, userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, userId },
                    ],
            }),
            addNewFoodRecording: builder.mutation<void, FoodRecording>({
                query: foodRecording => (
                    {
                        url: `users/${ foodRecording.userId }/food-recordings`,
                        method: 'POST',
                        body: foodRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { userId }) =>
                    [
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
            deleteFoodRecording: builder.mutation<void, { userId: number, foodRecordingId: number }>({
                query: ({ foodRecordingId }) => (
                    {
                        url: `food-recordings/${ foodRecordingId }`,
                        method: 'DELETE',
                    }
                ),
                invalidatesTags: (_result, _error, { userId, foodRecordingId }) =>
                    [
                        { type: FOOD_RECORDING_TAG, id: foodRecordingId },
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
        }
    ),
})

export const {
    useGetFoodRecordingByIdQuery,
    useUpdateFoodRecordingMutation,
    useAddNewFoodRecordingMutation,
    useDeleteFoodRecordingMutation,
} = foodRecordingApiSlice