export interface FormFieldData {
    name: string
    value?: string
    validations?: ((value?: string) => string | undefined)[]
}