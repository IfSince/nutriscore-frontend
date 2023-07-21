import { FormFieldValueTypes } from './form-field-data.tsx';

export interface ISelectListOption<T extends FormFieldValueTypes> {
    value: T
    displayName: string
    icon?: string
}