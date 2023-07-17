import { Panel } from '../../panel.tsx';
import { ProgressCircle } from '../../progress/components/progress-circle.tsx';
import { ValueObject } from '../../../redux/models/value-object.ts';

export const CaloriePanel = ({ valueObject }: { valueObject: ValueObject }) =>
    <Panel className="grow" title="Calories" highlighted>
        <div className="px-9 pt-4 pb-1">
            <ProgressCircle size={ 200 }
                            width={ 15 }
                            valueObject={ valueObject }
                            trackStyles="stroke-white"
                            indicatorStyles="stroke-gray-600">
                <span className="fill-gray-600 text-5xl font-bold">{ valueObject.value }</span>
                <span className="text-lg">/{ valueObject.total }</span>
            </ProgressCircle>
        </div>
    </Panel>