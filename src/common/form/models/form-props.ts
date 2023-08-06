import { ApiErrorResponse } from '../../../api/api-slice.ts';

export interface FormProps<T extends object> {
    form: T
    onSubmit: (form: T) => void
    apiError?: ApiErrorResponse
    isLoading: boolean
}