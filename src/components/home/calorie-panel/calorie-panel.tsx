import { Panel } from '../../common/panel.tsx';
import { ProgressCircle } from '../../common/progress/circle/progress-circle.tsx';
import { ProgressProps } from '../../common/progress/progress-props.ts';

export const CaloriePanel = ({ progressProps }: { progressProps: ProgressProps }) =>
    <Panel highlighted={ true }>
        <h3 className="text-lg font-bold text-gray-600 lg:text-xl">Calories</h3>
        <div className="px-9 pt-4 pb-1">
            <ProgressCircle { ...progressProps }>
                <span className="fill-gray-600 text-5xl font-bold">{ progressProps.value }</span>
                <span className="text-lg">{ progressProps.unit }</span>
            </ProgressCircle>
        </div>
    </Panel>