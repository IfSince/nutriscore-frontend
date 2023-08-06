import { FieldProps } from './field-props.ts';
import { ApiErrorResponse } from '../../../api/api-slice.ts';

export interface CustomFieldProps extends FieldProps {
    name: string
    displayName?: string
    icon?: string
    apiError?: ApiErrorResponse
}