import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DatePicker from 'tailwind-datepicker-react';
import { IconButton } from './button/components/icon-button.tsx';


export const CustomDatePicker = () => {
    const options = {
        autoHide: true,
        todayBtn: true,
        clearBtn: false,
        maxDate: new Date('2030-01-01'),
        minDate: new Date('1950-01-01'),
        theme: {
            background: '',
            todayBtn: 'bg-cyan-200 transition-colors hover:bg-cyan-300 focus:ring-0',
            clearBtn: '',
            icons: '',
            text: 'text-gray-500',
            disabledText: 'text-gray-300',
            input: 'cursor-pointer border-none bg-white px-0 pr-6 text-right text-base font-medium max-w-[190px] focus:border-none focus:ring-0',
            inputIcon: 'hidden',
            selected: 'bg-cyan-200',
        },
        // icons: {
        //     // () => ReactElement | JSX.Element
        //     prev: () => <span>Previous</span>,
        //     next: () => <span>Next</span>,
        // },
        datepickerClassNames: 'top-11 left-0 lg:right-0 lg:left-auto',
        defaultDate: new Date(),
        language: 'de',
    }
    const [show, setShow] = useState(false)
    const handleChange = (selectedDate: Date) => {
        console.log(selectedDate)
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    return (
        <div className="relative flex items-center">
            <DatePicker options={ options } onChange={ handleChange } show={ show } setShow={ handleClose }/>
            <IconButton icon={ 'calendar_month' } level={ 'primary' } action={ handleClose }/>
        </div>
    );
}