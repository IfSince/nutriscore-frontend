import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { DiaryMealPanel, MealOverviewProps } from '../components/diary-meal-panel.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanel } from '../../../common/macro-panel/components/macro-panel.tsx';


const calorieData: ProgressProps = {
    size: 200,
    name: 'Remaining',
    value: 1112,
    total: 2000,
    unit: 'kcal',
    width: 12,
    trackStyles: 'stroke-white',
}
const macroData: ProgressProps[] = [
    { size: 160, width: 10, name: 'Protein', value: 89, total: 100, unit: 'g', indicatorStyles: 'stroke-red bg-red' },
    { size: 160, width: 10, name: 'Carbs', value: 41, total: 100, unit: 'g', indicatorStyles: 'stroke-green bg-green' },
    { size: 160, width: 10, name: 'Fats', value: 22, total: 100, unit: 'g', indicatorStyles: 'stroke-yellow bg-yellow' },
    { size: 160, width: 10, name: 'Water', value: 1.6, total: 2, unit: 'l', indicatorStyles: 'stroke-blue bg-blue' },
]

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

export const DiaryOverviewView = () =>
    <>
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
    </>