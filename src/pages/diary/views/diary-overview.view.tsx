import { getFormattedDate } from '../../../utils/format-date.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { DiaryMealPanel } from '../components/overview/diary-meal-panel.tsx';
import { useContext } from 'react';
import { useAppSelector } from '../../../hooks.ts';
import { selectDate } from '../../../common/date-picker/date-slice.ts';
import { UserIdContext } from '../../root.view.tsx';
import { useGetNutritionalMetadataByUserIdQuery } from '../../../features/user-metadata/user-metadata-api-slice.ts';
import {
    useGetNutritionalRecordingsByUserIdQuery
} from '../../../features/nutritional-recordings/nutritional-recordings-api-slice.ts';
import { getNutritionalMetadataValueObjects } from '../../../features/user-metadata/user-metadata.utils.ts';
import { TimeOfDay } from '../../../features/type-of-day.enum.ts';

export const DiaryOverviewView = () => {
    const date = new Date(useAppSelector(selectDate))
    const userId = useContext(UserIdContext)

    const nutritionalMetadataRequest = useGetNutritionalMetadataByUserIdQuery(userId)
    const nutritionalRecordingsRequest = useGetNutritionalRecordingsByUserIdQuery(userId)

    const metadata = nutritionalMetadataRequest.data?.recordings[getFormattedDate(date)]
    const { calorieData, macroData, mealData } = getNutritionalMetadataValueObjects(metadata, nutritionalMetadataRequest.data)

    const recordings = nutritionalRecordingsRequest?.data ? nutritionalRecordingsRequest.data[getFormattedDate(date)] : null

    return (
        <div className="w-full">
            <ApiErrorMessage apiErrorResponse={ nutritionalMetadataRequest.error }/>
            <ApiErrorMessage apiErrorResponse={ nutritionalRecordingsRequest.error }/>
            <div className="relative flex flex-wrap lg:flex-row">
                <BlurOverlay visible={ nutritionalMetadataRequest.isLoading || nutritionalMetadataRequest.isError }/>
                <div className="flex-layout-row">
                    <CaloriePanel valueObject={ calorieData } isLoading={ nutritionalMetadataRequest.isLoading }/>
                    <MacroPanelGroup data={ macroData } isLoading={ nutritionalMetadataRequest.isLoading }/>
                </div>

                <div className="flex-layout-row mt-10">
                    <DiaryMealPanel name="Breakfast"
                                    valueObject={ mealData[TimeOfDay.BREAKFAST] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.BREAKFAST) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row mt-10">
                    <DiaryMealPanel name="Lunch"
                                    valueObject={ mealData[TimeOfDay.LUNCH] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.LUNCH) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row mt-10">
                    <DiaryMealPanel name="Dinner"
                                    valueObject={ mealData[TimeOfDay.DINNER] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.DINNER) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row mt-10">
                    <DiaryMealPanel name="Lunch"
                                    valueObject={ mealData[TimeOfDay.LUNCH] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.LUNCH) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>
            </div>

        </div>
    )
}