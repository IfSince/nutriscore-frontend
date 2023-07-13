import { User } from '../models/user.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const user: User = {
    id: 1,
    userTypeId: 1,
    email: 'leonlaade@gmx.de',
    firstName: 'Leon',
    lastName: 'Laade',
    image: null,
    gender: { id: 1, description: 'Male' },
    dateOfBirth: '27.10.2000',
    height: 180,
    selectedHeightUnit: 'cm',
    selectedWeightUnit: 'g',
}

interface UserState {
    user: User
}

const initialState: UserState = {
    user: user,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        log: (state) => {
            console.log(state.user)
        },
    },
})

export const { log } = userSlice.actions
export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer