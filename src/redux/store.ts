import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user-slice.ts';
import { dateSlice } from './slices/date-slice.ts';
import { registerSlice } from './slices/register-slice.ts';
import { apiSlice } from '../api/api-slice.ts';

export const store = configureStore({
    reducer: {
        register: registerSlice.reducer,
        user: userSlice.reducer,
        date: dateSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
