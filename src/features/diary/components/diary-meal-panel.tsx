import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { MealItemProps } from './meal-item.tsx';
import { Panel } from '../../../common/panel.tsx';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { IconButton } from '../../../common/button/components/icon-button.tsx';
import { MealItemTable } from './meal-item-table.tsx';

export interface MealOverviewProps {
    name: string
    progress: ProgressProps
    items: MealItemProps[]
}

export const DiaryMealPanel = ({ name, progress, items }: MealOverviewProps) =>
    <Panel className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
        <ProgressCircle { ...progress }/>

        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-600">{ name }</h3>
            <IconButton level="primary" action={ console.log } icon="add" iconSize="text-3xl"/>
        </div>

        <div className="flex justify-center">
            <span className="flex justify-center bg-gray-300 w-0.5"></span>
        </div>

        <MealItemTable items={ items }/>
    </Panel>
