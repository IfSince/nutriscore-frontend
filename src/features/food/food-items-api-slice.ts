import { apiSlice, FOOD_TAG, NUTRITIONAL_RECORDINGS_SEARCH_TAG, NUTRITIONAL_RECORDINGS_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { FoodItem } from './models/food-item.ts';

export const foodItemsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getFoodItems: builder.query<FoodItem[], void>({
                query: () => 'foods',
                providesTags: (result = []) => [
                    ...result.map(({ id }) => (
                        { type: FOOD_TAG, id }
                    )),
                    { type: FOOD_TAG, id: 'LIST' },
                ],
            }),
            getFoodItemById: builder.query<FoodItem, number>({
                query: id => `foods/${ id }`,
                providesTags: (_result, _error, arg) => [{ type: FOOD_TAG, id: arg }],
            }),
            addNewFoodItem: builder.mutation<FoodItem, FoodItem>({
                query: (foodItem: FoodItem) => (
                    {
                        url: 'foods',
                        method: 'POST',
                        body: foodItem,
                    }
                ),
                invalidatesTags: [
                    { type: FOOD_TAG, id: 'LIST' },
                    { type: NUTRITIONAL_RECORDINGS_SEARCH_TAG, id: 'LIST' },
                ],
            }),
            editFoodItem: builder.mutation<FoodItem, FoodItem>({
                query: foodItem => (
                    {
                        url: `foods/${ foodItem.id }`,
                        method: 'PUT',
                        body: foodItem,
                    }
                ),
                invalidatesTags: (_result, _error, { id, userId }) =>
                    [
                        { type: FOOD_TAG, id },
                        { type: NUTRITIONAL_RECORDINGS_SEARCH_TAG, id: 'LIST' },
                        { type: USER_METADATA_TAG, id: userId },
                        { type: NUTRITIONAL_RECORDINGS_TAG, id: userId },
                    ],
            }),
        }
    ),
})

export const {
    useGetFoodItemsQuery,
    useGetFoodItemByIdQuery,
    useAddNewFoodItemMutation,
    useEditFoodItemMutation,
} = foodItemsApiSlice
