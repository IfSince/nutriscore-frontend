import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { selectDate, update } from '../../redux/slices/date-slice.ts';
import { CustomDatePicker } from '../custom-date-picker.tsx';

export const GlobalDatePicker = () => {
    const date = useAppSelector(selectDate)
    const dispatch = useAppDispatch()

    return (
        <CustomDatePicker showTodayButton={ true }
                          showClearButton={ false }
                          maxDate="2030-01-01"
                          minDate="1950-01-01"
                          defaultDate={ date }
                          onChange={ (date: string) => dispatch(update(date)) }
                          inputStyles="cursor-pointer border-none bg-white px-0 pr-6 text-right text-base font-medium max-w-xs focus:border-none focus:ring-0"
                          datePickerStyles="top-11 left-0 lg:right-0 lg:left-auto"/>
    );
}