import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { DIARY_ROUTE } from '../../../routes.ts';
import { MealPanel } from './meal-panel.tsx';
import { Panel } from '../../../common/panel.tsx';


export const MealPanelList = ({ data }: { data: ProgressProps[] }) =>
    <div className="flex flex-col gap-5 grow-9999 xl:max-w-sm">
        {
            data.map(props =>
                <Panel key={ props.name } className="py-4 lg:py-4">
                    <MealPanel data={ props } link={ DIARY_ROUTE }/>
                </Panel>,
            )
        }
    </div>