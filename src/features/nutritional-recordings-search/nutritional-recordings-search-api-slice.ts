import { NutritionalRecordingSearchEntry } from './models/nutritional-recordings-search-entry.ts';
import { apiSlice, NUTRITIONAL_RECORDINGS_SEARCH_TAG } from '../../api/api-slice.ts';

export const nutritionalRecordingsSearchApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalRecordingSearchEntries: builder.query<NutritionalRecordingSearchEntry[], void>({
                query: () => 'nutritional-recordings/search',
                providesTags: () => [{ type: NUTRITIONAL_RECORDINGS_SEARCH_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetNutritionalRecordingSearchEntriesQuery } = nutritionalRecordingsSearchApiSlice