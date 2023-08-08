import { useAppDispatch } from '../../hooks.ts';
import { update } from './date-slice.ts';

export const WeekDayPickerCard = ({ date, isSelected }: { date: Date, isSelected: boolean }) => {
    const dispatch = useAppDispatch()

    return (
        <button className={ `rounded-lg h-full flex flex-col items-center py-2 w-fit grow basis-0 transition-colors max-w-[44px]
                             ${ isSelected ? 'bg-cyan-200' : 'hover:bg-gray-100' }` }
                onClick={ () => dispatch(update(date.toString())) }>
            <span className="text-[22px] mb-1 font-medium">{ date.getDate() }</span>
            <span className="text-xs xs:text-sm tracking-wide">{ date.toLocaleString('en', { weekday: 'short' }) }</span>
        </button>
    )
}
