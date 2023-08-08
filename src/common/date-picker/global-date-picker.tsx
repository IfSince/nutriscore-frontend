import { CustomDatePicker } from '../custom-date-picker.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks.ts';
import { selectDate, update } from './date-slice.ts';
import { WeekDayPicker } from './week-day-picker.tsx';

export const GlobalDatePicker = () => {
    const date = useAppSelector(selectDate)
    const dispatch = useAppDispatch()

    return (
        <div className="w-full">
            <CustomDatePicker key={ date }
                              showTodayButton={ true }
                              showClearButton={ false }
                              maxDate="2030-01-01"
                              minDate="1950-01-01"
                              defaultDate={ date }
                              onChange={ date => dispatch(update(date)) }
                              inputStyles="hidden sm:flex cursor-pointer border-none bg-white px-0 pr-6 text-right text-base font-medium max-w-xs focus:border-none focus:ring-0"
                              datePickerStyles="top-11 left-0 lg:right-0 lg:left-auto"/>
            <WeekDayPicker date={ new Date(date) } className="mt-4 sm:hidden"/>
        </div>
    );
}