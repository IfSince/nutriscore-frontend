import { Panel } from '../../panel.tsx';
import { ValueObject } from '../../value-object.ts';
import ProgressCircle from '../../progress/components/progress-circle.tsx';
import { CenteredSpinner } from '../../spinner/components/centered-spinner.tsx';

export const CaloriePanel = ({ valueObject, isLoading }: { valueObject: ValueObject, isLoading: boolean }) =>
    <Panel className="grow" title="Calories" highlighted>
        <div className="px-9 lg:pt-4 pb-1 relative">
            {
                isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                              backgroundClr="text-gray-50/80"
                                              fill="fill-gray-600/80"
                                              size="lg"/>
            }
            <ProgressCircle size={ 200 }
                            width={ 15 }
                            valueObject={ valueObject }
                            isLoading={ isLoading }
                            trackStyles="stroke-white"
                            indicatorStyles="stroke-gray-600">
                <span className="fill-gray-600 text-5xl font-bold">{ valueObject.value }</span>
                <span className="text-lg">/{ valueObject.total }</span>
            </ProgressCircle>
        </div>
    </Panel>