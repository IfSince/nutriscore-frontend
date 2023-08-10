import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { WeeklyOverviewPanel } from '../components/weekly-overview-panel.tsx';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { useContext, useState } from 'react';
import { useGetNutritionalMetadataByUserIdQuery } from '../../../features/user-metadata/user-metadata-api-slice';
import { getNutritionalMetadataValueObjects } from '../../../features/user-metadata/user-metadata.utils';
import { useAppSelector } from '../../../hooks.ts';
import { selectDate } from '../../../common/date-picker/date-slice.ts';
import { UserIdContext } from '../../root.view.tsx';
import { Header } from '../../../common/header.tsx';
import { GlobalDatePicker } from '../../../common/date-picker/global-date-picker.tsx';
import { useNavigate } from 'react-router-dom';
import { DIARY_SEARCH_ROUTE } from '../../../routes.ts';

export const HomeView = () => {
    const navigate = useNavigate()
    const [actionsOpened, setActionsOpened] = useState(false)
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

            <div className="fixed right-4 bottom-24 z-[100] lg:hidden">
                <div className={ `flex-col items-center mb-4 space-y-2 ${ actionsOpened ? 'flex' : 'hidden' }` }>
                    <button className="relative w-12 md:w-14 aspect-square text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm flex justify-center items-center transition-colors
                                       hover:bg-gray-50 hover:text-gray-600"
                            type="button"
                            onClick={ () => navigate(DIARY_SEARCH_ROUTE) }>
                        <span className="material-icons-round text-xl md:text-3xl">add</span>
                        <span className="absolute text-base font-medium -translate-y-1/2 top-1/2 left-0 -translate-x-full pr-4 md:pr-6">Recording</span>
                    </button>

                    <button className="relative w-12 md:w-14 aspect-square text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm flex justify-center items-center transition-colors
                                       hover:bg-gray-50 hover:text-gray-600"
                            type="button"
                            onClick={ () => navigate('') }>
                        <span className="material-icons-round text-xl md:text-3xl">add</span>
                        <span className="absolute text-base font-medium -translate-y-1/2 left-0 top-1/2 -translate-x-full pr-4 md:pr-6">Weight</span>
                    </button>
                </div>

                <button className="flex items-center justify-center text-gray-50 bg-cyan-200 rounded-lg w-12 md:w-14 aspect-square transition-colors ring-4 ring-white hover:bg-cyan-300"
                        type="button"
                        onClick={ () => setActionsOpened((curr) => !curr) }>
                    <span className="material-icons-round text-xl md:text-3xl">add</span>
                </button>
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
        </>
    )
}