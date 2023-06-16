import { Panel } from '../../common/panel.tsx';
import { ProgressCircle } from '../../common/progress/circle/progress-circle.tsx';
import { ProgressProps } from '../../common/progress/progress-props.ts';

export const MacroPanel = ({ macroCircles }: { macroCircles: ProgressProps[] }) =>
    <Panel>
        <h3 className="text-lg font-bold text-gray-600 lg:text-xl">Macro Intake</h3>
        <div className="flex justify-around pt-10 pb-1">
            {
                macroCircles.map(circle =>
                    <ProgressCircle key={ circle.name } { ...circle }>
                        <span className="fill-gray-600 text-4xl font-bold">{ circle.value }</span>
                        <span className="text-lg">{ circle.unit }</span>
                    </ProgressCircle>,
                )
            }
        </div>
    </Panel>
