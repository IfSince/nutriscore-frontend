import { apiSlice, FOOD_TAG } from '../../api/api-slice.ts';
import { FoodItem } from '../../redux/models/food-item.ts';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store.ts';

const foodItemsAdapter = createEntityAdapter<FoodItem>()

const initialState = foodItemsAdapter.getInitialState()
type FoodItemsEntityState = typeof initialState

export const foodItemsApiSliceExperimental = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getFoodItems: builder.query<FoodItemsEntityState, void>({
                query: () => '/foods',
                transformResponse: (rawResult: { data: FoodItem[] }) => foodItemsAdapter.setAll(initialState, rawResult.data),
                providesTags: (result) =>
                    result?.ids ? [
                            ...result.ids.map(id => (
                                { type: FOOD_TAG, id }
                            )),
                            { type: FOOD_TAG, id: 'LIST' },
                        ] :
                        [{ type: FOOD_TAG, id: 'LIST' }],
            }),
            getFoodItemById: builder.query<FoodItemsEntityState, number>({
                query: (id: number) => `/foods/${ id }`,
                transformResponse: (rawResult: { data: FoodItem }) => foodItemsAdapter.setOne(initialState, rawResult.data),
                providesTags: (_result, _error, arg) => [{ type: FOOD_TAG, id: arg }],
            }),
            addNewFoodItem: builder.mutation({
                query: (foodItem: FoodItem) => (
                    {
                        url: '/foods',
                        method: 'POST',
                        body: foodItem,
                    }
                ),
                invalidatesTags: [{ type: FOOD_TAG, id: 'LIST' }],
            }),
            editFoodItem: builder.mutation({
                query: (foodItem: FoodItem) => (
                    {
                        url: `/foods/${ foodItem.id }`,
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
} = foodItemsApiSliceExperimental


export const selectFoodItemsResult = foodItemsApiSliceExperimental.endpoints.getFoodItems.select()

const selectFoodItemsData = createSelector(selectFoodItemsResult, foodItemsResult => foodItemsResult.data)

export const {
    selectAll: selectAllFoodItems,
    selectById: selectFoodItemById,
} = foodItemsAdapter.getSelectors((state: RootState) => selectFoodItemsData(state) ?? initialState)