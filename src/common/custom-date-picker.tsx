import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DatePicker from 'tailwind-datepicker-react';
import { PrimaryIconButton } from './button/components/icon/primary-icon-button.tsx';


interface CustomDatePickerProps {
    showTodayButton?: boolean
    showClearButton?: boolean,
    maxDate: Date | string
    minDate: Date | string
    defaultDate: Date | string
    onChange: (date: string) => void
    inputStyles?: string
    datePickerStyles?: string
    showButtonStyles?: string
}

export const CustomDatePicker = ({
    defaultDate,
    maxDate,
    minDate,
    showClearButton,
    showTodayButton,
    onChange,
    inputStyles = '',
    datePickerStyles = '',
    showButtonStyles = '',
}: CustomDatePickerProps) => {
    const [show, setShow] = useState(false)

    const options = {
        autoHide: true,
        todayBtn: showTodayButton,
        clearBtn: showClearButton,
        maxDate: maxDate instanceof Date ? maxDate : new Date(maxDate),
        minDate: minDate instanceof Date ? minDate : new Date(minDate),
        theme: {
            background: '',
            todayBtn: 'bg-cyan-200 transition-colors hover:bg-cyan-300 focus:ring-0',
            clearBtn: '',
            icons: '',
            text: 'text-gray-500',
            disabledText: 'text-gray-300',
            input: inputStyles,
            inputIcon: 'hidden',
            selected: 'bg-cyan-200',
        },
        // icons: {
        //     // () => ReactElement | JSX.Element
        //     prev: () => <span>Previous</span>,
        //     next: () => <span>Next</span>,
        // },
        datepickerClassNames: `${ datePickerStyles }`,
        defaultDate: defaultDate instanceof Date ? defaultDate : new Date(defaultDate),
        language: 'de',
    }

    return (
        <div className="relative flex items-center">
            <DatePicker options={ options } onChange={ (date: Date) => onChange(date.toString()) } show={ show } setShow={ setShow }/>
            <PrimaryIconButton icon="calendar_month" action={ setShow } className={ showButtonStyles }/>
        </div>
    );
}