import { apiSlice, GENDER_TAG } from '../../api/api-slice.ts';
import { Gender } from './models/gender.ts';

export const genderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllGenders: builder.query<Gender[], void>({
                query: () => 'genders',
                providesTags: () => [{ type: GENDER_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllGendersQuery } = genderApiSlice