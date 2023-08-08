import { WeekDayPickerCard } from './week-day-picker-card.tsx';

const getWeekDates = (startDate: Date) => {
    const dates: Date[] = []
    const currentDate = new Date(startDate)

    const monday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (currentDate.getDay() + 6) % 7)

    Array.from(Array(7).keys()).forEach(key => {
        const newDate = new Date(monday)
        newDate.setDate(monday.getDate() + key)
        dates.push(newDate)
    })

    return dates
};

export const WeekDayPicker = ({ date, className = '' }: { date: Date, className?: string }) =>
    <>
        <div className="h-0 sm:hidden">
            <span className="block -translate-y-full font-medium">{ date.toLocaleString('default', { month: 'long' }) }</span>
        </div>
        <div className={ `w-full flex justify-between gap-1.5 ${ className }` }>
            {
                getWeekDates(date).map(weekDayDate => <WeekDayPickerCard key={ weekDayDate.toString() }
                                                                         date={ weekDayDate }
                                                                         isSelected={ weekDayDate.toDateString() === date.toDateString() }/>)
            }
        </div>
    </>
