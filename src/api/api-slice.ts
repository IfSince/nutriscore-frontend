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


export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: [USER_TAG, USER_METADATA_TAG, FOOD_TAG, NUTRITIONAL_RECORDINGS_TAG, NUTRITIONAL_RECORDINGS_SEARCH_TAG],
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