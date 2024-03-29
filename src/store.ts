import { configureStore } from '@reduxjs/toolkit';
import { globalMessageSlice } from './common/messages/global-message-slice.ts';
import { dateSlice } from './common/date-picker/date-slice.ts';
import { apiSlice } from './api/api-slice.ts';

export const store = configureStore({
    reducer: {
        messages: globalMessageSlice.reducer,
        date: dateSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
