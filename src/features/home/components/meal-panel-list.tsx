import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { DIARY_ROUTE } from '../../../routes.ts';
import { MealPanelListItem } from './meal-panel-list-item.tsx';
import { Panel } from '../../../common/panel.tsx';
import { capitalizeFirst } from '../../../utils/capitalize-first.ts';

interface MealPanelListProps {
    breakfast: ProgressProps
    dinner: ProgressProps
    lunch: ProgressProps
    snacks: ProgressProps
}

export const MealPanelList = (data: MealPanelListProps) =>
    <div className="flex flex-col gap-5 grow-9999 xl:max-w-sm">
        {
            Object.keys(data)
                .map(key =>
                    <Panel key={ key } className="py-4 lg:py-4">
                        <MealPanelListItem name={ capitalizeFirst(key) } progress={ data[key as keyof MealPanelListProps] } link={ DIARY_ROUTE }/>
                    </Panel>,
                )
        }
    </div>