import { NutritionalRecordingsList } from './nutritional-recordings-list.tsx';
import { ProgressCircle } from '../../../../common/progress/components/progress-circle.tsx';
import { DesktopPanel } from '../../../../common/desktop-panel.tsx';
import { ValueObject } from '../../../../common/value-object.ts';
import { NutritionalRecording } from '../../../../features/nutritional-recordings/models/nutritional-recordings-by-date.ts';
import { PrimaryIconButton } from '../../../../common/button/components/icon/primary-icon-button.tsx';
import { useNavigate } from 'react-router-dom';
import { DIARY_SEARCH_ROUTE } from '../../../../routes.ts';

export interface MealOverviewProps {
    name: string
    valueObject: ValueObject
    items: NutritionalRecording[]
    isLoading: boolean
}

export const DiaryMealPanel = ({ name, valueObject, items, isLoading }: MealOverviewProps) => {
    const navigate = useNavigate()

    return (
        <DesktopPanel className="grid grid-rows-1 gap-y-4 lg:gap-y-8 gap-x-4 lg:gap-x-8 grid-cols-[min-content_auto] mb-4 lg:mb-10">
            <div className="lg:hidden">
                <ProgressCircle size={ 32 }
                                width={ 5 }
                                valueObject={ valueObject }
                                indicatorStyles="stroke-cyan-200"
                                isLoading={ isLoading }/>
            </div>
            <div className="hidden lg:block">
                <ProgressCircle size={ 45 }
                                width={ 7 }
                                valueObject={ valueObject }
                                indicatorStyles="stroke-cyan-200"
                                isLoading={ isLoading }/>
            </div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold lg:text-2xl">{ name }</h3>
                <span className="text-gray-400 flex items-center">
                    <span className="font-bold text-lg mr-1 lg:text-2xl">{ valueObject.value }</span>
                    <span className="text-sm font-medium lg:text-lg">{ valueObject.unit }</span>
                    <PrimaryIconButton className="ml-6 hidden lg:flex"
                                       icon="add"
                                       action={ () => navigate(DIARY_SEARCH_ROUTE) }/>
                </span>
            </div>

            <div className="flex justify-center">
                <div className="flex justify-center bg-gray-100 w-0.5"></div>
            </div>

            <NutritionalRecordingsList items={ items } isLoading={ isLoading }/>
        </DesktopPanel>
    )
}
