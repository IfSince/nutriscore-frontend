import { Panel } from '../../panel.tsx';
import { ProgressLinear } from '../../progress/components/progress-linear.tsx';
import { ProgressProps } from '../../progress/models/progress-props.ts';
import { capitalizeFirst } from '../../../utils/capitalize-first.ts';

interface MacroPanelGroupProps {
    protein: ProgressProps
    carbs: ProgressProps
    fats: ProgressProps
    water: ProgressProps
}

export const MacroPanelGroup = (data: MacroPanelGroupProps) =>
    <div className="grid w-full grid-cols-2 gap-5 grow-9999 xl:w-auto">
        {
            Object.keys(data).map(key =>
                    <Panel key={ key } className="flex flex-col justify-center min-w-[150px]" title={ capitalizeFirst(key) }>
                        <ProgressLinear { ...data[key as keyof MacroPanelGroupProps] }/>
                    </Panel>,
                )
        }
    </div>