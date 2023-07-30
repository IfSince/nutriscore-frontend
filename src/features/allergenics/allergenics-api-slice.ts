import { ALLERGENICS_TAG, apiSlice } from '../../api/api-slice.ts';
import { Allergenic } from './models/allergenic.ts';

export const allergenicsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllAllergenics: builder.query<Allergenic[], void>({
                query: () => 'allergenics',
                providesTags: () => [{ type: ALLERGENICS_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllAllergenicsQuery } = allergenicsApiSlice