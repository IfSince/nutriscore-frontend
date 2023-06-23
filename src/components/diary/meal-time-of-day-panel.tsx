import { Panel } from '../common/panel.tsx';
import { ProgressCircle } from '../common/progress/circle/progress-circle.tsx';
import { IconButton } from '../common/button/icon-button.tsx';
import { ProgressProps } from '../common/progress/progress-props.ts';
import { MealItem, MealItemProps } from './meal-item.tsx';

export interface MealTimeOfDayProps {
    name: string
    progress: ProgressProps
    items: MealItemProps[]
}

export const MealTimeOfDay = ({ name, progress, items }: MealTimeOfDayProps) =>
    <Panel>
        <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
            <div className="flex justify-center">
                <ProgressCircle { ...progress }/>
            </div>

            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-600">{ name }</h3>
                <IconButton level="primary" action={ console.log } icon="add" iconSize="text-3xl"/>
            </div>

            <div className="flex justify-center">
                <div className="bg-gray-300 w-0.5"></div>
            </div>

            <div className="flex flex-col gap-3">
                { items.map(item => <MealItem { ...item }/>) }
            </div>
        </div>
    </Panel>
