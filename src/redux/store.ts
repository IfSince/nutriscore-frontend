import { configureStore } from '@reduxjs/toolkit';
import { foodItemsSlice } from './slices/food-items-slice.ts';

export const store = configureStore({
    reducer: {
        foodItems: foodItemsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
