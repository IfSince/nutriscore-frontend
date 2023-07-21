import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { dummyFoodItems } from '../dummy-data/food-items.ts';
import { FoodItem } from '../models/food-item.ts';

interface FoodItemsState {
    items: FoodItem[]
}

const initialState: FoodItemsState = {
    items: dummyFoodItems,
}

export const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState,
    reducers: {},
})

// export const {} = foodItemsSlice.actions
export const selectFoodItems = (state: RootState) => state.foodItems.items

export const selectFoodItemById = createSelector(
    [
        // Usual first input - extract value from `state`
        state => state.foodItems.items,
        // Take the second arg, `category`, and forward to the output selector
        (_, id: number) => id,
    ],
    // Output selector gets (`items, category)` as args
    (items: FoodItem[], id) => items.find(item => item.id === id),
);
export default foodItemsSlice.reducer
