import { apiSlice, NUTRITION_TYPE_TAG } from '../../api/api-slice.ts';
import { NutritionType } from './models/nutrition-type.ts';

export const nutritionTypeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllNutritionTypes: builder.query<NutritionType[], void>({
                query: () => 'nutrition-types',
                providesTags: () => [{ type: NUTRITION_TYPE_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllNutritionTypesQuery } = nutritionTypeApiSlice