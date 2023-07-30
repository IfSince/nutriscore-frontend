import { apiSlice, CATEGORIES_TAG } from '../../api/api-slice.ts';
import { Category } from './models/category.ts';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllCategories: builder.query<Category[], void>({
                query: () => 'categories',
                providesTags: () => [{ type: CATEGORIES_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllCategoriesQuery } = categoriesApiSlice