import { apiSlice, FOOD_TAG } from '../../api/api-slice.ts';
import { FoodItem } from '../../redux/models/food-item.ts';

export const foodItemsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getFoodItems: builder.query<FoodItem[], void>({
                query: () => 'foods',
                transformResponse: (rawResult: { data: FoodItem[] }) => rawResult.data,
                providesTags: (result = []) => [
                    ...result.map(({ id }) => (
                        { type: FOOD_TAG, id }
                    )),
                    { type: FOOD_TAG, id: 'LIST' },
                ],
            }),
            getFoodItemById: builder.query<FoodItem, number>({
                query: (id: number) => `foods/${ id }`,
                transformResponse: (rawResult: { data: FoodItem }) => rawResult.data,
                providesTags: (_result, _error, arg) => [{ type: FOOD_TAG, id: arg }],
            }),
            addNewFoodItem: builder.mutation({
                query: (foodItem: FoodItem) => (
                    {
                        url: 'foods',
                        method: 'POST',
                        body: foodItem,
                    }
                ),
                invalidatesTags: [{ type: FOOD_TAG, id: 'LIST' }],
            }),
            editFoodItem: builder.mutation({
                query: (foodItem: FoodItem) => (
                    {
                        url: `foods/${ foodItem.id }`,
                        method: 'PUT',
                        body: foodItem,
                    }
                ),
                invalidatesTags: (_result, _error, { id }) => [{ type: FOOD_TAG, id }],
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
