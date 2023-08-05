import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './config.ts';
import { getCsrfToken } from './csrf-cookie.ts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export type ApiErrorResponse = FetchBaseQueryError | SerializedError | undefined

export const USER_TAG = 'user' as const
export const FOOD_TAG = 'food' as const
export const USER_METADATA_TAG = 'user-metadata' as const
export const NUTRITIONAL_RECORDINGS_TAG = 'nutritional-recordings' as const
export const NUTRITIONAL_RECORDINGS_SEARCH_TAG = 'nutritional-recordings-search' as const
export const FOOD_RECORDING_TAG = 'food-recording' as const
export const MEAL_RECORDING_TAG = 'meal-recording' as const
export const CATEGORIES_TAG = 'categories' as const
export const ALLERGENICS_TAG = 'allergenics' as const
export const USER_ALLERGENICS_TAG = 'user-allergenics' as const
export const NUTRITION_TYPE_TAG = 'nutrition-type' as const
export const GENDER_TAG = 'gender' as const
export const CALCULATION_TYPE_TAG = 'calculation-type' as const
export const NUTRITIONAL_DATA_TAG = 'nutritional-data' as const

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: [
        USER_TAG,
        USER_METADATA_TAG,
        FOOD_TAG,
        NUTRITIONAL_RECORDINGS_TAG,
        NUTRITIONAL_RECORDINGS_SEARCH_TAG,
        FOOD_RECORDING_TAG,
        MEAL_RECORDING_TAG,
        CATEGORIES_TAG,
        ALLERGENICS_TAG,
        USER_ALLERGENICS_TAG,
        NUTRITION_TYPE_TAG,
        GENDER_TAG,
        CALCULATION_TYPE_TAG,
        NUTRITIONAL_DATA_TAG
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }/api/`,
        prepareHeaders: async (headers) => {
            await getCsrfToken()

            headers.set('X-Requested-With', 'XMLHttpRequest')
            headers.set('Content-Type', 'application/json')
            headers.set('Accept', 'application/json')
            return headers
        },
        credentials: 'include',
    }),
    endpoints: () => (
        {}
    ),
})