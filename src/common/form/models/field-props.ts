export type FieldType = 'text' | 'number' | 'password'

export interface FieldProps {
    id?: string
    className?: string
    placeholder?: string
    autoComplete?: string
    type?: FieldType
    disabled?: boolean
}