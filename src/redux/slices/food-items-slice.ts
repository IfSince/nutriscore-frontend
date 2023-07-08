import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    reducers: {
        addItem: (state, action: PayloadAction<FoodItem>) => {
            state.items.push(action.payload)
        },
    },
})

export const { addItem } = foodItemsSlice.actions
export const selectFoodItems = (state: RootState) => state.foodItems.items
export default foodItemsSlice.reducer
