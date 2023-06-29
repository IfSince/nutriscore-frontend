import { ProgressProps } from '../../progress/models/progress-props.ts';
import { Panel } from '../../panel.tsx';
import { ProgressCircle } from '../../progress/components/progress-circle.tsx';

export const CaloriePanel = ({ data }: { data: ProgressProps }) =>
    <Panel className="grow" title="Calories" highlighted>
        <div className="px-9 pt-4 pb-1">
            <ProgressCircle { ...data }>
                <span className="fill-gray-600 text-5xl font-bold">{ data.value }</span>
                <span className="text-lg">{ data.unit }</span>
            </ProgressCircle>
        </div>
    </Panel>