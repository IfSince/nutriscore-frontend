import { configureStore } from '@reduxjs/toolkit';
import { foodItemsSlice } from './slices/food-items-slice.ts';
import { userSlice } from './slices/user-slice.ts';
import { userMetadataSlice } from './slices/user-metadata-slice.ts';
import { dateSlice } from './slices/date-slice.ts';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        userMetadata: userMetadataSlice.reducer,
        foodItems: foodItemsSlice.reducer,
        date: dateSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
