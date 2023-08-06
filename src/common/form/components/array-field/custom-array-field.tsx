import { FieldArray } from 'formik';
import { ReactNode } from 'react';
import { FieldError } from '../field-error.tsx';

interface CustomArrayFieldMetadata<T extends { id: number }> {
    value: T
    isSelected: boolean,
    onSelect: () => void,
    onRemove: () => void,
    index: number
}

interface CustomArrayFieldProps<T extends { id: number }> {
    name: string
    values: T[]
    children: (metadata: CustomArrayFieldMetadata<T>) => ReactNode
}

export const CustomArrayField = <T extends { id: number }>({ name, values, children }: CustomArrayFieldProps<T>) =>
    <>
        <FieldArray name={ name }>
            {
                (helpers) => {
                    return values.map((value, index) => {
                        const isSelected = helpers.form.values[name].some((it: T) => it.id === value.id)
                        const indexInValues = helpers.form.values[name].findIndex((it: T) => it.id === value.id)

                        const onSelect = () => isSelected ? helpers.remove(indexInValues) : helpers.push(value)
                        const onRemove = () => helpers.remove(indexInValues)

                        return children({ value, isSelected, index, onSelect, onRemove })
                    })
                }
            }
        </FieldArray>
        <FieldError name={ name }/>
    </>