import { DIARY_ROUTE } from '../../../routes.ts';
import { MealPanelListItem } from './meal-panel-list-item.tsx';
import { Panel } from '../../../common/panel.tsx';
import { ValueObject } from '../../../redux/models/value-object.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';
import { recordObjectKeys } from '../../../utils/object.ts';

export const MealPanelList = ({ data, isLoading }: { data: Record<TimeOfDay, ValueObject>, isLoading: boolean }) =>
    <div className="flex flex-col gap-5 grow-9999 xl:max-w-sm relative">
        {
            isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                          backgroundClr="text-gray-100"
                                          fill="fill-cyan-300"
                                          size="lg"/>
        }
        {
            recordObjectKeys(data).map(key =>
                <Panel key={ key } className="py-4 lg:py-4">
                    <MealPanelListItem name={ key }
                                       valueObject={ data[key] }
                                       link={ DIARY_ROUTE }
                                       isLoading={ isLoading }/>
                </Panel>,
            )
        }
    </div>