import { apiSlice, NUTRITIONAL_RECORDINGS_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { FoodRecording } from './models/food-recording.ts';

export const foodRecordingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            addNewFoodRecording: builder.mutation<void, FoodRecording>({
                query: (foodRecording: FoodRecording) => (
                    {
                        url: `users/${ foodRecording.userId }/food-recordings`,
                        method: 'POST',
                        body: foodRecording,
                    }
                ),
                invalidatesTags: (_result, _error, args) =>
                    [
                        { type: USER_METADATA_TAG, id: args.userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: args.userId },
                    ],
            }),
            deleteFoodRecording: builder.mutation<void, { userId: number, foodRecordingId: number }>({
                query: ({ foodRecordingId }) => (
                    {
                        url: `food-recordings/${ foodRecordingId }`,
                        method: 'DELETE',
                    }
                ),
                invalidatesTags: (_result, _error, args) =>
                    [
                        { type: USER_METADATA_TAG, id: args.userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: args.userId },
                    ],
            }),
        }
    ),
})

export const { useAddNewFoodRecordingMutation, useDeleteFoodRecordingMutation } = foodRecordingApiSlice