import { FormFieldValueTypes } from '../features/form/models/form-field-data.tsx';

export const convertToFormFieldType = <T extends FormFieldValueTypes>(formFieldValue: string, value: T): T => {
    // @ts-ignore
    if (typeof value === 'string') return formFieldValue.toString()
    // @ts-ignore
    if (typeof value === 'number') return +formFieldValue

    // @ts-ignore
    return formFieldValue
}