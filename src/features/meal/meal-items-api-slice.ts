import {
    apiSlice,
    FOOD_TAG,
    MEAL_TAG,
    NUTRITIONAL_RECORDINGS_SEARCH_TAG,
    NUTRITIONAL_RECORDINGS_TAG,
    USER_METADATA_TAG,
} from '../../api/api-slice.ts';
import { MealItem } from './models/meal-item.ts';

export const mealItemsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getMealItemById: builder.query<MealItem, number>({
                query: id => `meals/${ id }`,
                providesTags: (_result, _error, arg) => [{ type: FOOD_TAG, id: arg }],
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
                        { type: NUTRITIONAL_RECORDINGS_SEARCH_TAG, id: 'LIST' },
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
        }
    ),
})

export const {
    useGetMealItemByIdQuery,
    useAddNewMealItemMutation,
    useEditMealItemMutation,
} = mealItemsApiSlice