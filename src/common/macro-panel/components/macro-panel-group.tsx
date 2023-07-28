import { Panel } from '../../panel.tsx';
import { ProgressLinearLabeled } from '../../progress/components/progress-linear-labeled.tsx';
import { ValueObject } from '../../../redux/models/value-object.ts';
import { CenteredSpinner } from '../../spinner/components/centered-spinner.tsx';
import { Macro } from '../../../features/macro.ts';
import { recordObjectKeys } from '../../../utils/object.ts';

export const MacroPanelGroup = ({ data, isLoading }: { data: Record<Macro, ValueObject>, isLoading?: boolean }) => {
    const styles: Record<Macro, string> = {
        [Macro.PROTEIN]: 'bg-red',
        [Macro.CARBOHYDRATES]: 'bg-green',
        [Macro.FATS]: 'bg-yellow',
        [Macro.WATER]: 'bg-blue',
    }

    return (
        <div className="grid w-full grid-cols-2 gap-5 grow-9999 xl:w-auto relative">
            {
                isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                              backgroundClr="text-gray-100"
                                              fill="fill-cyan-300"
                                              size="lg"/>
            }
            {
                recordObjectKeys(data).map(macro => (
                    <Panel key={ macro }
                           className="flex flex-col justify-center min-w-[150px]"
                           title={ macro.toLowerCase() }>
                        <ProgressLinearLabeled width={ 13 }
                                               valueObject={ data[macro] }
                                               indicatorStyles={ styles[macro] }
                                               isLoading={ isLoading }/>
                    </Panel>
                ))
            }
        </div>
    )
}