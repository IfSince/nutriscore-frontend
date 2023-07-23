import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './config.ts';
import { getCsrfToken } from './csrf-cookie.ts';

export const FOOD_TAG = 'food' as const

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: [FOOD_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }/api/`,
        prepareHeaders: async (headers, _) => {
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