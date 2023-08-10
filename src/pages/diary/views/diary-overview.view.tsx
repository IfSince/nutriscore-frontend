import { getFormattedDate } from '../../../utils/format-date.ts';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
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
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { ProgressLinear } from '../../../common/progress/components/progress-linear.tsx';
import { useNavigate } from 'react-router-dom';
import { DIARY_SEARCH_ROUTE } from '../../../routes.ts';
import { Header } from '../../../common/header.tsx';

export const DiaryOverviewView = () => {
    const navigate = useNavigate()
    const date = new Date(useAppSelector(selectDate))
    const userId = useContext(UserIdContext)

    const nutritionalMetadataRequest = useGetNutritionalMetadataByUserIdQuery(userId)
    const nutritionalRecordingsRequest = useGetNutritionalRecordingsByUserIdQuery(userId)

    const metadata = nutritionalMetadataRequest.data?.recordings[getFormattedDate(date)]
    const { calorieData: calorieData, mealData: mealData } = getNutritionalMetadataValueObjects(metadata, nutritionalMetadataRequest.data)

    const recordings = nutritionalRecordingsRequest?.data ? nutritionalRecordingsRequest.data[getFormattedDate(date)] : null

    return (
        <>
            <div className="fixed z-[60] bottom-16 left-0 w-full bg-cyan-50 p-4 pb-6 flex justify-between rounded-t-lg lg:hidden">
                <div className="flex w-full flex-col justify-between pb-0.5 pr-10">
                    <span className="flex justify-between items-end">
                        <span className="font-medium text-gray-600">Remaining</span>
                        <span className="">
                            <span className="text-2xl font-bold mr-1">{ calorieData.total - calorieData.value }</span>
                            <span>kcal</span>
                        </span>
                    </span>
                    <ProgressLinear width={ 5 }
                                    valueObject={ calorieData }
                                    isLoading={ nutritionalMetadataRequest.isLoading || nutritionalRecordingsRequest.isLoading }/>
                </div>
                <PrimaryIconButton icon="add" action={ () => navigate(DIARY_SEARCH_ROUTE) }/>
            </div>

            <Header title="Your Diary"
                    additional={ <GlobalDatePicker/> }
                    apiErrorResponse={ nutritionalMetadataRequest.error || nutritionalRecordingsRequest.error }/>

            <div className="relative flex flex-wrap lg:flex-row">
                <BlurOverlay visible={ nutritionalMetadataRequest.isLoading || nutritionalMetadataRequest.isError }/>

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
                    <DiaryMealPanel name="Snacks"
                                    valueObject={ mealData[TimeOfDay.SNACKS] }
                                    items={ recordings?.filter(it => it.timeOfDay === TimeOfDay.SNACKS) || [] }
                                    isLoading={ nutritionalRecordingsRequest.isLoading }/>
                </div>
            </div>
        </>
    )
}