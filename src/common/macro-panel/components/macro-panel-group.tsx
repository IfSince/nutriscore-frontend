import { Panel } from '../../panel.tsx';
import { capitalizeFirst } from '../../../utils/capitalize-first.ts';
import { ProgressLinearLabeled } from '../../progress/components/progress-linear-labeled.tsx';
import { ValueObject } from '../../../redux/models/value-object.ts';

interface MacroPanelGroupProps {
    protein: ValueObject
    carbs: ValueObject
    fats: ValueObject
    water: ValueObject
}

export const MacroPanelGroup = (data: MacroPanelGroupProps) => {
    const getStyles = (key: keyof MacroPanelGroupProps) => {
        switch (key) {
            case 'protein':
                return 'bg-red'
            case 'carbs':
                return 'bg-green'
            case 'fats':
                return 'bg-yellow'
            case 'water':
                return 'bg-blue'
        }
    }

    return (
        <div className="grid w-full grid-cols-2 gap-5 grow-9999 xl:w-auto">
            {
                Object.keys(data).map(key => {
                    const typedKey = key as keyof MacroPanelGroupProps
                    const progressProps = {
                        size: 160,
                        width: 13,
                        valueObject: data[typedKey],
                        indicatorStyles: getStyles(typedKey),
                    }

                    return (
                        <Panel key={ key } className="flex flex-col justify-center min-w-[150px]" title={ capitalizeFirst(key) }>
                            <ProgressLinearLabeled { ...progressProps }/>
                        </Panel>
                    )
                })
            }
        </div>
    )
}