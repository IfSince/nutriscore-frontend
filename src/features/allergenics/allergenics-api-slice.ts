import { ALLERGENICS_TAG, apiSlice, USER_ALLERGENICS_TAG } from '../../api/api-slice.ts';
import { Allergenic } from './models/allergenic.ts';

export const allergenicsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllAllergenics: builder.query<Allergenic[], void>({
                query: () => 'allergenics',
                providesTags: () => [{ type: ALLERGENICS_TAG, id: 'LIST' }],
            }),
            getAllergenicsByUserId: builder.query<Allergenic[], number>({
                query: userId => `users/${ userId }/allergenics`,
                providesTags: () => [{ type: USER_ALLERGENICS_TAG, id: 'LIST' }],
            }),
            updateUserAllergenics: builder.mutation<number[], [number, { allergenics: Allergenic[] }]>({
                query: ([userId, data]) => (
                    {
                        url: `users/${ userId }/allergenics`,
                        method: 'PUT',
                        body: data,
                    }
                ),
                transformResponse: (result: Allergenic[]) => result.map(allergenic => allergenic.id),
                invalidatesTags: () => [{ type: USER_ALLERGENICS_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const {
    useGetAllAllergenicsQuery,
    useGetAllergenicsByUserIdQuery,
    useUpdateUserAllergenicsMutation,
} = allergenicsApiSlice