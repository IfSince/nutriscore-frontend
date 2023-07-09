import { UserMetadata } from '../models/user-metadata.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const dummyMetadata: UserMetadata = {
    '2023': {
        '7': {
            data: {
                '3': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '4': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '5': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '6': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '7': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '8': {
                    calories: {
                        breakfast: { value: 15, total: 20, unit: 'kcal' },
                        dinner: { value: 15, total: 20, unit: 'kcal' },
                        lunch: { value: 15, total: 20, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
                },
                '9': {
                    calories: {
                        breakfast: { value: 100, total: 450, unit: 'kcal' },
                        dinner: { value: 400, total: 640, unit: 'kcal' },
                        lunch: { value: 200, total: 200, unit: 'kcal' },
                        snacks: { value: 15, total: 20, unit: 'kcal' },
                    },
                    protein: { value: 15, total: 20, unit: 'g' },
                    carbohydrates: { value: 15, total: 20, unit: 'g' },
                    fats: { value: 15, total: 20, unit: 'g' },
                    water: { value: 1.5, total: 2.5, unit: 'g' },
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