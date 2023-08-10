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
import { useGetNutritionalRecordingsByUserIdQuery } from '../../../features/nutritional-recordings/nutritional-recordings-api-slice.ts';
import { getNutritionalMetadataValueObjects } from '../../../features/user-metadata/user-metadata.utils.ts';
import { TimeOfDay } from '../../../features/type-of-day.enum.ts';
import { GlobalDatePicker } from '../../../common/date-picker/global-date-picker.tsx';

export const DiaryOverviewView = () => {
    const date = new Date(useAppSelector(selectDate))
    const userId = useContext(UserIdContext)

    const nutritionalMetadataRequest = useGetNutritionalMetadataByUserIdQuery(userId)
    const nutritionalRecordingsRequest = useGetNutritionalRecordingsByUserIdQuery(userId)

    const metadata = nutritionalMetadataRequest.data?.recordings[getFormattedDate(date)]
    const { calorieData, macroData, mealData } = getNutritionalMetadataValueObjects(metadata, nutritionalMetadataRequest.data)

    const recordings = nutritionalRecordingsRequest?.data ? nutritionalRecordingsRequest.data[getFormattedDate(date)] : null

    return (
        <>
            <ApiErrorMessage apiErrorResponse={ nutritionalMetadataRequest.error || nutritionalRecordingsRequest.error }/>
            <header className="mb-8 lg:mb-10 flex w-full flex-col sm:flex-row">
                <h2 className="text-2.5xl font-bold">Your Diary</h2>
                <div className="grow justify-end mt-6 sm:mt-0 hidden lg:flex">
                    <div className="w-full sm:w-auto">
                        <GlobalDatePicker/>
                    </div>
                </div>
            </header>

            <div className="relative flex flex-wrap lg:flex-row">
                <BlurOverlay visible={ nutritionalMetadataRequest.isLoading || nutritionalMetadataRequest.isError }/>
                <div className="hidden w-full flex-wrap gap-5 lg:gap-10 lg:flex mb-10">
                    <CaloriePanel valueObject={ calorieData } isLoading={ nutritionalMetadataRequest.isLoading }/>
                    <MacroPanelGroup data={ macroData } isLoading={ nutritionalMetadataRequest.isLoading }/>
                </div>

                <div className="flex-layout-row">
                    <DiaryMealPanel name="Breakfast"
                                    valueObject={ mealData[TimeOfDay.BREAKFAST] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.BREAKFAST) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row">
                    <DiaryMealPanel name="Lunch"
                                    valueObject={ mealData[TimeOfDay.LUNCH] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.LUNCH) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row">
                    <DiaryMealPanel name="Dinner"
                                    valueObject={ mealData[TimeOfDay.DINNER] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.DINNER) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>

                <div className="flex-layout-row">
                    <DiaryMealPanel name="Lunch"
                                    valueObject={ mealData[TimeOfDay.LUNCH] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.LUNCH) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>
            </div>

        </>
    )
}