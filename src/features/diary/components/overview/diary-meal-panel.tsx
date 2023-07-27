import { useNavigate } from 'react-router-dom';
import { NutritionalRecordingsList } from './nutritional-recordings-list.tsx';
import { Panel } from '../../../../common/panel.tsx';
import { ProgressCircle } from '../../../../common/progress/components/progress-circle.tsx';
import { PrimaryIconButton } from '../../../../common/button/components/icon/primary-icon-button.tsx';
import { DIARY_SEARCH_ROUTE } from '../../../../routes.ts';
import { ValueObject } from '../../../../redux/models/value-object.ts';
import { NutritionalRecording } from '../../../nutritional-recordings/models/nutritional-recordings-by-date.ts';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';

export interface MealOverviewProps {
    name: string
    valueObject: ValueObject
    items: NutritionalRecording[]
    isLoading: boolean
}

export const DiaryMealPanel = ({ name, valueObject, items, isLoading }: MealOverviewProps) => {
    const navigate = useNavigate()

    return (
        <Panel className="flex flex-col gap-4 xl:gap-x-8 xl:gap-y-6 relative">
            {
                isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                              backgroundClr="text-gray-300"
                                              fill="fill-gray-600"
                                              size="lg"/>
            }
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                    <ProgressCircle size={ 70 }
                                    width={ 10 }
                                    valueObject={ valueObject }
                                    indicatorStyles="stroke-cyan-200"
                                    isLoading={ isLoading }/>
                    <h3 className="ml-4 text-xl font-medium text-gray-600 lg:ml-8 lg:text-2xl">{ name }</h3>
                </div>
                <PrimaryIconButton action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add"/>
            </div>

            <div className="flex justify-center">
                <span className="flex justify-center bg-gray-300 w-0.5"></span>
            </div>

            <NutritionalRecordingsList items={ items } isLoading={ isLoading }/>
        </Panel>
    )
}
