import { CustomDatePicker } from '../../../common/custom-date-picker.tsx';
import { Field, FieldProps } from 'formik';
import { FieldError } from './field-error.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';


export const SelectDateField = ({ name }: { name: string }) => {
    return (
        <div className="mt-4 w-full text-lg font-medium text-gray-500">
            <Field name={ name }>
                {
                    ({ field, form }: FieldProps) =>
                        (
                            <CustomDatePicker showTodayButton={ true }
                                              showClearButton={ false }
                                              maxDate="2030-01-01"
                                              minDate="1950-01-01"
                                              defaultDate={ field.value }
                                              onChange={ (date) => form.setFieldValue(name, getFormattedDate(new Date(date))) }
                                              inputStyles="h-11 rounded-md border border-gray-300 transition-selection px-4 w-full peer text-base bg-white text-gray-500 cursor-pointer
                                hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200 hover:text-cyan-300
                                focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 focus:text-cyan-300
                                lg:h-12"
                                              datePickerStyles=""
                                              showButtonStyles="ml-3"/>
                        )
                }
            </Field>
            <FieldError name={ name }/>
        </div>
    )
}