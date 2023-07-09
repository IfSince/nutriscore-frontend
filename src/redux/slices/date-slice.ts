import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

interface DateState {
    date: string
}

const initialState: DateState = {
    date: new Date().toString(),
}

export const dateSlice = createSlice({
    name: 'selectedDate',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<string>) => {
            state.date = action.payload.toString()
        },
    },
})

export const { update } = dateSlice.actions
export const selectDate = (state: RootState) => state.date.date