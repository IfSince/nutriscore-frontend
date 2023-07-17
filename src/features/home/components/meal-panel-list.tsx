import { DIARY_ROUTE } from '../../../routes.ts';
import { MealPanelListItem } from './meal-panel-list-item.tsx';
import { Panel } from '../../../common/panel.tsx';
import { capitalizeFirst } from '../../../utils/capitalize-first.ts';
import { ValueObject } from '../../../redux/models/value-object.ts';

interface MealPanelListProps {
    breakfast: ValueObject
    dinner: ValueObject
    lunch: ValueObject
    snacks: ValueObject
}

export const MealPanelList = (data: MealPanelListProps) =>
    <div className="flex flex-col gap-5 grow-9999 xl:max-w-sm">
        {
            Object.keys(data).map(key =>
                <Panel key={ key } className="py-4 lg:py-4">
                    <MealPanelListItem name={ capitalizeFirst(key) }
                                       valueObject={ data[key as keyof MealPanelListProps] }
                                       link={ DIARY_ROUTE }/>
                </Panel>)
        }
    </div>