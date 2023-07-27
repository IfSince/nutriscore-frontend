import { useAppSelector } from '../../../redux/hooks.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { useGetNutritionalMetadataByUserIdQuery } from '../../user-metadata/user-metadata-api-slice.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { WeeklyOverviewPanel } from '../components/weekly-overview-panel.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { getNutritionalMetadataValueObjects } from '../../user-metadata/user-metadata.utils.ts';

export const HomeView = () => {
    const date = new Date(useAppSelector(selectDate))
    const userId = Number(localStorage.getItem('userId'))

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
        <div>
            <div className="flex-layout-row">
                <ApiErrorMessage apiErrorResponse={ error }/>
            </div>
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
        </div>
    )
}