import { UserMetadata } from '../models/user-metadata.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const dummyMetadata: UserMetadata = {
    '2023': {
        '7': {
            data: {
                '3': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '4': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '5': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '6': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '7': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '8': {
                    calories: {
                        breakfast: { value: 15, total: 20 },
                        dinner: { value: 15, total: 20 },
                        lunch: { value: 15, total: 20 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
                '9': {
                    calories: {
                        breakfast: { value: 100, total: 450 },
                        dinner: { value: 400, total: 640 },
                        lunch: { value: 200, total: 200 },
                        snacks: { value: 15, total: 20 },
                    },
                    protein: { value: 15, total: 20 },
                    carbohydrates: { value: 15, total: 20 },
                    fats: { value: 15, total: 20 },
                    water: { value: 1.5, total: 2.5 },
                },
            },
            weightRecordings: [],
        },
    },
}

interface UserMetadataState {
    metadata: UserMetadata
}

const initialState: UserMetadataState = {
    metadata: dummyMetadata,
}

export const userMetadataSlice = createSlice({
    name: 'userMetadata',
    initialState,
    reducers: {
        log: (state) => {
            console.log(state.metadata)
        },
    },
})

export const { log } = userMetadataSlice.actions
export const selectUserMetadata = (state: RootState) => state.userMetadata.metadata