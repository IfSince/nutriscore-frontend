import { CustomDatePicker } from '../../custom-date-picker.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { getInputStyles } from '../get-input-styles.ts';
import { CustomField } from './custom-field.tsx';


export const SelectDateField = ({ name, displayname }: { name: string, displayname?: string }) =>
    <CustomField name={ name } displayName={ displayname }>
        {
            ({ field, helpers }) =>
                <CustomDatePicker showTodayButton={ true }
                                  showClearButton={ false }
                                  maxDate="2030-01-01"
                                  minDate="1950-01-01"
                                  defaultDate={ field.value }
                                  onChange={ date => helpers.setValue(getFormattedDate(new Date(date))) }
                                  inputStyles={ getInputStyles(false, false) }
                                  showButtonStyles="ml-3"/>
        }
    </CustomField>