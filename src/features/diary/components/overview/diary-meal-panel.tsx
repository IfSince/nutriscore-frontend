import { MealListItemProps } from './meal-list-item.tsx';
import { useNavigate } from 'react-router-dom';
import { MealList } from './meal-list.tsx';
import { Panel } from '../../../../common/panel.tsx';
import { ProgressCircle } from '../../../../common/progress/components/progress-circle.tsx';
import { PrimaryIconButton } from '../../../../common/button/components/icon/primary-icon-button.tsx';
import { DIARY_SEARCH_ROUTE } from '../../../../routes.ts';
import { ValueObject } from '../../../../redux/models/value-object.ts';

export interface MealOverviewProps {
    name: string
    valueObject: ValueObject
    items: MealListItemProps[]
}

export const DiaryMealPanel = ({ name, valueObject, items }: MealOverviewProps) => {
    const navigate = useNavigate()

    return <Panel className="flex flex-col gap-4 xl:gap-x-8 xl:gap-y-6">
        <div className="flex flex-row items-center justify-between">
            <div className="flex items-center">
                <ProgressCircle size={ 70 }
                                width={ 10 }
                                valueObject={ valueObject }
                                indicatorStyles="stroke-cyan-200"/>
                <h3 className="ml-4 text-xl font-medium text-gray-600 lg:ml-8 lg:text-2xl">{ name }</h3>
            </div>
            <PrimaryIconButton action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add"/>
        </div>

        <div className="flex justify-center">
            <span className="flex justify-center bg-gray-300 w-0.5"></span>
        </div>

        <MealList items={ items }/>
    </Panel>;
}
