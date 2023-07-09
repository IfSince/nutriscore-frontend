import { DiaryMealPanel, MealOverviewProps } from '../components/diary-meal-panel.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanel } from '../../../common/macro-panel/components/macro-panel.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { selectUserMetadata } from '../../../redux/slices/user-metadata-slice.ts';
import { ValueTotalPair } from '../../../redux/models/value-total-pair.ts';
import { ProgressProps } from '../../../common/progress/models/progress-props.ts';

const diaryData: MealOverviewProps[] = [
    {
        name: 'Breakfast',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, value: 100, total: 200, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
            {
                name: 'Apple',
                progress: { size: 50, value: 100, total: 200, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
        ],
    },
    {
        name: 'Lunch',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, value: 100, total: 200, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
        ],
    },
    {
        name: 'Dinner',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, value: 100, total: 200, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
        ],
    },
    {
        name: 'Snacks',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, value: 100, total: 200, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
        ],
    },
]

export const DiaryOverviewView = () => {
    const date = new Date(useAppSelector(selectDate))
    const metadata = useAppSelector(selectUserMetadata)

    const metadataByDate = metadata[date.getFullYear()][date.getMonth() + 1].data[date.getDate()]

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

    return <>
        <div className="flex-layout-row">
            <CaloriePanel data={ calorieData }/>
            <MacroPanel data={ macroData }/>
        </div>

        {
            diaryData.map(data =>
                <div key={ data.name } className="flex-layout-row">
                    <DiaryMealPanel name={ data.name } progress={ data.progress } items={ data.items }/>
                </div>,
            )
        }
    </>;
}