import { ProgressProps } from '../../../../common/progress/models/progress-props.ts';
import { ProgressCircle } from '../../../../common/progress/components/progress-circle.tsx';
import { DeleteIconButton } from '../../../../common/button/components/icon/delete-icon-button.tsx';


export interface MealListItemProps {
    name: string
    progress: ProgressProps
    amount: string
    calories: string
    protein: string
    carbs: string
    fats: string
}

export const MealListItem = ({ amount, carbs, fats, calories, name, progress, protein }: MealListItemProps) =>
    <div className="flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 lg:px-4 lg:text-lg">
        <div className={ 'flex items-center' }>
            <ProgressCircle { ...progress }/>
            <span className="ml-2 font-bold md:ml-6 lg:ml-8">{ name }</span>
        </div>

        <div className="ml-4 flex max-w-xl grow gap-2 font-medium text-gray-400 sm:mx-5 sm:justify-evenly xl:mx-20">
            <span>{ amount }</span>
            <span className="hidden sm:block">{ calories }</span>
            <span className="hidden sm:block">{ protein }</span>
            <span className="hidden sm:block">{ carbs }</span>
            <span className="hidden sm:block">{ fats }</span>
        </div>

        <div className="flex gap-2">
            <DeleteIconButton icon="clear" action={ console.log }/>
        </div>
    </div>