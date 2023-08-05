import { apiSlice, NUTRITIONAL_DATA_TAG } from '../../api/api-slice.ts';
import { NutritionalData } from './models/nutritional-data.ts';

export const nutritionalDataApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalDataByUserId: builder.query<NutritionalData, number>({
                query: userId => `users/${ userId }/nutrition`,
                providesTags: (_result, _error, arg) => [{ type: NUTRITIONAL_DATA_TAG, id: arg }],
            }),
            updateNutritionalData: builder.mutation<NutritionalData, NutritionalData>({
                query: nutritionalData => (
                    {
                        url: `nutrition/${ nutritionalData.id }`,
                        method: 'PUT',
                        body: nutritionalData,
                    }
                ),
                invalidatesTags: (_result, _error, { userId }) => [{ type: NUTRITIONAL_DATA_TAG, id: userId }],
            }),
        }
    ),
})

export const {
    useGetNutritionalDataByUserIdQuery,
    useUpdateNutritionalDataMutation,
} = nutritionalDataApiSlice