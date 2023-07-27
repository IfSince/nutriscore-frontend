import { apiSlice, NUTRITIONAL_RECORDINGS_TAG } from '../../api/api-slice.ts';
import { NutritionalRecordingsByDate } from './models/nutritional-recordings-by-date.ts';

export const nutritionalRecordingsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalRecordingsByUserId: builder.query<NutritionalRecordingsByDate, number>({
                query: userId => `users/${ userId }/nutritional-recordings`,
                providesTags: (_result, _error, arg) => [{ type: NUTRITIONAL_RECORDINGS_TAG, id: arg }],
            }),
        }
    ),
})

export const {
    useGetNutritionalRecordingsByUserIdQuery,
} = nutritionalRecordingsApiSlice