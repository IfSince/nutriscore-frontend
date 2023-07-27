import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ApiError } from './api-error.ts';

export const getApiError = (error: FetchBaseQueryError | SerializedError | undefined) =>
    error && 'status' in error ? error as ApiError : null

export const getFieldErrors = (error: FetchBaseQueryError | SerializedError | undefined, fieldName: string) => {
    const apiError = getApiError(error)
    return apiError && apiError.data.errors ? apiError.data.errors[fieldName] : []
}