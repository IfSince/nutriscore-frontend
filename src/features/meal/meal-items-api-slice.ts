import { apiSlice, MEAL_TAG, NUTRITIONAL_RECORDINGS_SEARCH_TAG, NUTRITIONAL_RECORDINGS_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { MealItem } from './models/meal-item.ts';

export const mealItemsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllMealItems: builder.query<MealItem[], void>({
                query: () => 'meals',
                providesTags: () => [{ type: MEAL_TAG, id: 'LIST' }],
            }),
            getMealItemById: builder.query<MealItem, number>({
                query: id => `meals/${ id }`,
                providesTags: (_result, _error, arg) => [{ type: MEAL_TAG, id: arg }],
            }),
            addNewMealItem: builder.mutation<MealItem, MealItem>({
                query: mealItem => (
                    {
                        url: 'meals',
                        method: 'POST',
                        body: mealItem,
                    }
                ),
                invalidatesTags: [
                    { type: MEAL_TAG, id: 'LIST' },
                    { type: NUTRITIONAL_RECORDINGS_TAG, id: 'LIST' },
                ],
            }),
            editMealItem: builder.mutation<MealItem, MealItem>({
                query: mealItem => (
                    {
                        url: `meals/${ mealItem.id }`,
                        method: 'PUT',
                        body: mealItem,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) =>
                    [
                        { type: MEAL_TAG, id },
                        { type: MEAL_TAG, id: 'LIST' },
                        { type: NUTRITIONAL_RECORDINGS_SEARCH_TAG, id: 'LIST' },
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
        }
    ),
})

export const {
    useGetAllMealItemsQuery,
    useGetMealItemByIdQuery,
    useAddNewMealItemMutation,
    useEditMealItemMutation,
} = mealItemsApiSlice