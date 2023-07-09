import { DiaryMealPanel, MealOverviewProps } from '../components/diary-meal-panel.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { selectUserMetadata } from '../../../redux/slices/user-metadata-slice.ts';
import { ValueObject } from '../../../redux/models/value-object.ts';
import { ProgressProps } from '../../../common/progress/models/progress-props.ts';

const diaryData: MealOverviewProps[] = [
    {
        name: 'Breakfast',
        progress: { size: 70, valueObject: { value: 100, total: 200 }, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, valueObject: { value: 100, total: 200 }, width: 8, indicatorStyles: 'stroke-cyan-200' },
                amount: '100 kcal',
                calories: '100 kcal',
                protein: '21g',
                carbs: '36g',
                fats: '15g',
            },
            {
                name: 'Apple',
                progress: { size: 50, valueObject: { value: 100, total: 200 }, width: 8, indicatorStyles: 'stroke-cyan-200' },
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
        progress: { size: 70, valueObject: { value: 100, total: 200 }, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, valueObject: { value: 100, total: 200 }, width: 8, indicatorStyles: 'stroke-cyan-200' },
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
        progress: { size: 70, valueObject: { value: 100, total: 200 }, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, valueObject: { value: 100, total: 200 }, width: 8, indicatorStyles: 'stroke-cyan-200' },
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
        progress: { size: 70, valueObject: { value: 100, total: 200 }, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [
            {
                name: 'Espresso coffee',
                progress: { size: 50, valueObject: { value: 100, total: 200 }, width: 8, indicatorStyles: 'stroke-cyan-200' },
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

    const totalCaloriesValueObject =
        Object
            .values(metadataByDate.calories)
            .reduce((prev: ValueObject, curr: ValueObject): ValueObject => (
                {
                    value: prev.value + curr.value,
                    total: prev.total + curr.total,
                }
            ), { value: 0, total: 0 })

    const calorieData: ProgressProps = {
        size: 200,
        width: 15,
        valueObject: totalCaloriesValueObject,
        trackStyles: 'stroke-white',
        indicatorStyles: 'stroke-gray-600',
    }

    const proteinProgress: ProgressProps =
        { size: 160, width: 13, valueObject: metadataByDate.protein, trackStyles: '', indicatorStyles: 'stroke-red bg-red' }

    const carbsProgress: ProgressProps =
        { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, trackStyles: '', indicatorStyles: 'stroke-green bg-green' }

    const fatsProgress: ProgressProps =
        { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, trackStyles: '', indicatorStyles: 'stroke-yellow bg-yellow' }

    const waterProgress: ProgressProps =
        { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, trackStyles: '', indicatorStyles: 'stroke-blue bg-blue' }

    return <>
        <div className="flex-layout-row">
            <CaloriePanel data={ calorieData }/>
            <MacroPanelGroup protein={ proteinProgress }
                             carbs={ carbsProgress }
                             fats={ fatsProgress }
                             water={ waterProgress }/>
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