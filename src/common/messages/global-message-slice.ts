import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store.ts';

interface GlobalMessageState {
    errors: string[]
    success: string | null
}

const initialState: GlobalMessageState = {
    errors: [],
    success: null,
}

export const globalMessageSlice = createSlice({
    name: 'global-messages',
    initialState,
    reducers: {
        addSuccessMessage: (state, action: PayloadAction<string>) => {
            state.success = action.payload
        },
        clearSuccessMessage: (state) => {
            state.success = null
        },
        addErrorMessage: (state, action: PayloadAction<string>) => {
            state.errors.push(action.payload)
        },
        clearErrorMessage: (state, action: PayloadAction<string>) => {
            state.errors = state.errors.filter(error => error !== action.payload)
        },
    },
})

export const {
    addSuccessMessage,
    clearSuccessMessage,
    addErrorMessage,
    clearErrorMessage,
} = globalMessageSlice.actions

export const selectGlobalMessages = (state: RootState) => state.messages

export default globalMessageSlice.reducer