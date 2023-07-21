export type FormFieldValueTypes = string | number | readonly string[]

export interface FormFieldData<T extends FormFieldValueTypes> {
    name: string
    displayName?: string
    value: T
    validations?: ((value?: string) => string | undefined)[]
}