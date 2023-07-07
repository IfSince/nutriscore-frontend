import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

interface FoodItemsState {
    items: object[]
}

const initialState: FoodItemsState = {
    items: [],
}

export const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<object>) => {
            state.items.push(action.payload)
        },
    },
})

export const { addItem } = foodItemsSlice.actions
export const selectFoodItems = (state: RootState) => state.foodItems.items
export default foodItemsSlice.reducer
