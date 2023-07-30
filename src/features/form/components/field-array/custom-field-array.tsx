import { FieldArray } from 'formik';
import { ReactNode } from 'react';
import { DescriptiveProps } from '../../../descriptive-entity.ts';

interface CustomFieldArrayProps {
    name: string
    values: { id: number, description: string }[]
    children: (value: DescriptiveProps, isSelected: boolean, onSelect: () => void) => ReactNode
}

export const CustomFieldArray = ({ name, values, children }: CustomFieldArrayProps) => {
    return (
        <FieldArray name={ name }>
            {
                (helpers) => {
                    return values.map(value => {
                        const isSelected = helpers.form.values[name].includes(value.id)
                        const index = helpers.form.values[name].indexOf(value.id)
                        const onSelect = () => isSelected ? helpers.remove(index) : helpers.push(value.id)

                        return children(value, isSelected, onSelect)
                    })
                }
            }
        </FieldArray>
    )
}