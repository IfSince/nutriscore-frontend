import { ProgressProps } from '../../progress/models/progress-props.ts';
import { Panel } from '../../panel.tsx';
import { ProgressLinear } from '../../progress/components/progress-linear.tsx';

export const MacroPanel = ({ data }: { data: ProgressProps[] }) =>
    <div className="grid w-full grid-cols-2 gap-5 grow-9999 xl:w-auto">
        {
            data.map(props =>
                <Panel key={ props.name } className="flex flex-col justify-center min-w-[150px]" title={ props.name }>
                    <ProgressLinear { ...props }/>
                </Panel>,
            )
        }
    </div>