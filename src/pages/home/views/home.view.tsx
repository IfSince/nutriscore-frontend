import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { useContext } from 'react';
import { useGetNutritionalMetadataByUserIdQuery } from '../../../features/user-metadata/user-metadata-api-slice';
import { getNutritionalMetadataValueObjects } from '../../../features/user-metadata/user-metadata.utils';
import { useAppSelector } from '../../../hooks.ts';
import { selectDate } from '../../../common/date-picker/date-slice.ts';
import { UserIdContext } from '../../root.view.tsx';
import { Header } from '../../../common/header.tsx';
import { GlobalDatePicker } from '../../../common/date-picker/global-date-picker.tsx';
import { QuickActions } from '../components/quick-actions.tsx';
import WeeklyOverviewPanel from '../components/weekly-overview-panel.tsx';

export const HomeView = () => {
    const date = new Date(useAppSelector(selectDate))
    const userId = useContext(UserIdContext)

    const {
        data: nutritionalMetaData,
        isLoading,
        isError,
        error,
    } = useGetNutritionalMetadataByUserIdQuery(userId)

    const recordings = nutritionalMetaData?.recordings[getFormattedDate(date)]
    const {
        calorieData,
        macroData,
        mealData,
    } = getNutritionalMetadataValueObjects(recordings, nutritionalMetaData)

    return (
        <>
            <Header title="Your Daily Overview"
                    additional={ <GlobalDatePicker/> }
                    apiErrorResponse={ error }/>
            <QuickActions/>

            <div className="relative flex flex-wrap lg:flex-row">
                <BlurOverlay visible={ isLoading || isError }/>
                <div className="flex-layout-row">
                    <CaloriePanel valueObject={ calorieData } isLoading={ isLoading }/>
                    <MacroPanelGroup data={ macroData } isLoading={ isLoading }/>
                </div>
                <div className="flex-layout-row mt-10">
                    <WeeklyOverviewPanel weightRecordings={ nutritionalMetaData?.weightRecordings } isLoading={ isLoading }/>
                    <MealPanelList data={ mealData } isLoading={ isLoading }/>
                </div>
            </div>
        </>
    )
}