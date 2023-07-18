export interface FormFieldData {
    name: string
    displayName?: string
    value?: string
    validations?: ((value?: string) => string | undefined)[]
}