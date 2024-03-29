import { useContext } from 'react';
import { WeightStatisticsPanel } from '../components/weight-statistics-panel.tsx';
import { CalorieStatisticsPanel } from '../components/calorie-statistics-panel.tsx';
import { MacroStatisticsPanel } from '../components/macro-statistics-panel.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { UserIdContext } from '../../root.view.tsx';
import { useGetNutritionalMetadataByUserIdQuery } from '../../../features/user-metadata/user-metadata-api-slice.ts';
import { getNutritionalMetadataValueObjects } from '../../../features/user-metadata/user-metadata.utils.ts';
import { Header } from '../../../common/header.tsx';


export const StatisticsView = () => {
    const userId = useContext(UserIdContext)

    const {
        data: nutritionalMetaData,
        isLoading,
        isError,
        error,
    } = useGetNutritionalMetadataByUserIdQuery(userId)

    const recordings = nutritionalMetaData?.recordings

    const data = Object.keys(recordings || {}).map((key) => {
        return {
            date: key,
            ...getNutritionalMetadataValueObjects(recordings![key], nutritionalMetaData),
        }
    })

    const calorieIntakeData = data.map(({ date, calorieData }) => (
        { date, valueObject: calorieData }
    ))

    const macroIntakeData = data.map(({ date, macroData }) => (
        { date, protein: macroData.PROTEIN, carbohydrates: macroData.CARBOHYDRATES, fats: macroData.FATS }
    ))


    return (
        <>
            <Header title="Statistics"
                    apiErrorResponse={ error }/>
            <div className="relative flex flex-wrap lg:flex-row">
                <BlurOverlay visible={ isLoading || isError }/>
                <div className="flex-layout-row">
                    <WeightStatisticsPanel weightRecordings={ nutritionalMetaData?.weightRecordings } isLoading={ isLoading }/>
                    <CalorieStatisticsPanel data={ calorieIntakeData } isLoading={ isLoading }/>
                </div>
                <div className="mt-10 flex-layout-row">
                    <MacroStatisticsPanel data={ macroIntakeData } isLoading={ isLoading }/>
                </div>
            </div>
        </>
    );
}