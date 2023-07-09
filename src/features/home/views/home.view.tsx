import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { WeeklyOverviewPanel } from '../components/weekly-overview-panel.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanel } from '../../../common/macro-panel/components/macro-panel.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectUserMetadata } from '../../../redux/slices/user-metadata-slice.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { ValueTotalPair } from '../../../redux/models/value-total-pair.ts';

export const HomeView = () => {
    const date = new Date(useAppSelector(selectDate))
    const metadata = useAppSelector(selectUserMetadata)

    const metadataByDate = metadata[date.getFullYear()][date.getMonth() + 1].data[date.getDate()]
    const weightRecordings = metadata[date.getFullYear()][date.getMonth() + 1].weightRecordings

    const totalCaloriesValuePair =
        Object
            .values(metadataByDate.calories)
            .reduce((prev: ValueTotalPair, curr: ValueTotalPair): ValueTotalPair => (
                {
                    value: prev.value + curr.value,
                    total: prev.total + curr.total,
                }
            ), { value: 0, total: 0 })

    const calorieData: ProgressProps = {
        size: 200,
        width: 15,
        name: 'Remaining',
        unit: 'kcal',
        value: totalCaloriesValuePair.value,
        total: totalCaloriesValuePair.total,
        trackStyles: 'stroke-white',
        indicatorStyles: 'stroke-gray-600',
    }

    const macroData = [
        {
            size: 160,
            width: 13,
            name: 'Protein',
            unit: 'g',
            value: metadataByDate.protein.value,
            total: metadataByDate.protein.total,
            trackStyles: '',
            indicatorStyles: 'stroke-red bg-red',
        },
        {
            size: 160,
            width: 13,
            name: 'Carbs',
            unit: 'g',
            value: metadataByDate.carbohydrates.value,
            total: metadataByDate.carbohydrates.total,
            trackStyles: '',
            indicatorStyles: 'stroke-green bg-green',
        },
        {
            size: 160,
            width: 13,
            name: 'Fats',
            unit: 'g',
            value: metadataByDate.fats.value,
            total: metadataByDate.fats.total,
            trackStyles: '',
            indicatorStyles: 'stroke-yellow bg-yellow',
        },
        {
            size: 160,
            width: 13,
            name: 'Water',
            unit: 'g',
            value: metadataByDate.water.value,
            total: metadataByDate.water.total,
            trackStyles: '',
            indicatorStyles: 'stroke-blue bg-blue',
        },
    ]

    const mealData: ProgressProps[] = [
        {
            size: 75,
            width: 12,
            name: 'Breakfast',
            value: metadataByDate.calories.breakfast.value,
            total: metadataByDate.calories.breakfast.total,
            unit: 'kcal',
            indicatorStyles: 'stroke-cyan-200',
        },
        {
            size: 75,
            width: 12,
            name: 'Lunch',
            value: metadataByDate.calories.lunch.value,
            total: metadataByDate.calories.lunch.total,
            unit: 'kcal',
            indicatorStyles: 'stroke-cyan-200',
        },
        {
            size: 75,
            width: 12,
            name: 'Dinner',
            value: metadataByDate.calories.dinner.value,
            total: metadataByDate.calories.dinner.total,
            unit: 'kcal',
            indicatorStyles: 'stroke-cyan-200',
        },
        {
            size: 75,
            width: 12,
            name: 'Snacks',
            value: metadataByDate.calories.snacks.value,
            total: metadataByDate.calories.snacks.total,
            unit: 'kcal',
            indicatorStyles: 'stroke-cyan-200',
        },
    ]

    return <>
        <div className="flex-layout-row">
            <CaloriePanel data={ calorieData }/>
            <MacroPanel data={ macroData }/>
        </div>

        <div className="flex-layout-row">
            <WeeklyOverviewPanel data={ weightRecordings }/>
            <MealPanelList data={ mealData }/>
        </div>
    </>;
}