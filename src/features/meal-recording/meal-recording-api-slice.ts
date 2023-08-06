import { apiSlice, MEAL_RECORDING_TAG, NUTRITIONAL_RECORDINGS_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { MealRecording } from './models/meal-recording.ts';

export const mealRecordingApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getMealRecordingById: builder.query<MealRecording, number>({
                query: id => `meal-recordings/${ id }`,
                providesTags: (_result, _error, args) => [{ type: MEAL_RECORDING_TAG, id: args }],
            }),
            updateMealRecording: builder.mutation<MealRecording, MealRecording>({
                query: mealRecording => (
                    {
                        url: `meal-recordings/${ mealRecording.id }`,
                        method: 'PUT',
                        body: mealRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) =>
                    [
                        { type: MEAL_RECORDING_TAG, id },
                        { type: USER_METADATA_TAG, userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, userId },
                    ],
            }),
            addNewMealRecording: builder.mutation<void, MealRecording>({
                query: mealRecording => (
                    {
                        url: `users/${ mealRecording.userId }/meal-recordings`,
                        method: 'POST',
                        body: mealRecording,
                    }
                ),
                invalidatesTags: (_result, _error, { userId }) =>
                    [
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
            deleteMealRecording: builder.mutation<void, { userId: number, mealRecordingId: number }>({
                query: ({ mealRecordingId }) => (
                    {
                        url: `meal-recordings/${ mealRecordingId }`,
                        method: 'DELETE',
                    }
                ),
                invalidatesTags: (_result, _error, { userId, mealRecordingId }) =>
                    [
                        { type: MEAL_RECORDING_TAG, id: mealRecordingId },
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
        }
    ),
})

export const {
    useGetMealRecordingByIdQuery,
    useUpdateMealRecordingMutation,
    useAddNewMealRecordingMutation,
    useDeleteMealRecordingMutation,
} = mealRecordingApiSlice