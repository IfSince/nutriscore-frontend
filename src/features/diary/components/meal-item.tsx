import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { IconButton } from '../../../common/button/components/icon-button.tsx';

export interface MealItemProps {
    name: string
    progress: ProgressProps
    amount: string
    calories: string
    protein: string
    carbs: string
    fats: string
}

export const MealItem = ({ amount, carbs, fats, calories, name, progress, protein }: MealItemProps) =>
    <div className="flex w-full items-center justify-between text-lg">
        <div className={ 'flex items-center' }>
            <ProgressCircle { ...progress }/>
            <span className={ 'font-bold ml-8' }>{ name }</span>
        </div>

        <div className="flex gap-4 font-medium text-gray-400">
            <span>{ amount }</span>
            <span>{ calories }</span>
            <span>{ protein }</span>
            <span>{ carbs }</span>
            <span>{ fats }</span>
        </div>

        <div className="flex gap-2">
            <IconButton icon={ 'more_horiz' } iconSize={ 'text-2xl' } size={ 'small' } action={ console.log }/>
            <IconButton icon={ 'clear' } size={ 'small' } action={ console.log } level={ 'delete' }/>
        </div>
    </div>