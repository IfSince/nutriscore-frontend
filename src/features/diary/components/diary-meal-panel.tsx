import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { MealListItemProps } from './meal-list-item.tsx';
import { Panel } from '../../../common/panel.tsx';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { IconButton } from '../../../common/button/components/icon-button.tsx';
import { useNavigate } from 'react-router-dom';
import { DIARY_SEARCH_ROUTE } from '../../../routes.ts';
import { MealList } from './meal-list.tsx';

export interface MealOverviewProps {
    name: string
    progress: ProgressProps
    items: MealListItemProps[]
}

export const DiaryMealPanel = ({ name, progress, items }: MealOverviewProps) => {
    const navigate = useNavigate()

    return <Panel className="flex flex-col gap-4 xl:gap-x-8 xl:gap-y-6">
        <div className="flex flex-row items-center justify-between">
            <div className="flex items-center">
                <ProgressCircle { ...progress }/>
                <h3 className="ml-4 lg:ml-8 text-xl lg:text-2xl font-medium text-gray-600">{ name }</h3>
            </div>
            <IconButton level="primary" action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add" iconStyles="text-2xl lg:text-3xl"/>
        </div>

        <div className="flex justify-center">
            <span className="flex justify-center bg-gray-300 w-0.5"></span>
        </div>

        <MealList items={ items }/>
    </Panel>;
}
