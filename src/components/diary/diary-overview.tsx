import { ProgressProps } from '../common/progress/progress-props.ts';
import { CaloriePanel } from '../home/calorie-panel/calorie-panel.tsx';
import { MacroPanel } from '../home/macro-panel/macro-panel.tsx';
import { MealTimeOfDay, MealTimeOfDayProps } from './meal-time-of-day-panel.tsx';

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
    { size: 160, name: 'Protein', value: 89, total: 100, unit: 'g', indicatorStyles: 'stroke-red bg-red' },
    { size: 160, name: 'Carbs', value: 41, total: 100, unit: 'g', indicatorStyles: 'stroke-green bg-green' },
    { size: 160, name: 'Fats', value: 22, total: 100, unit: 'g', indicatorStyles: 'stroke-yellow bg-yellow' },
    { size: 160, name: 'Water', value: 1.6, total: 2, unit: 'l', indicatorStyles: 'stroke-blue bg-blue' },
]

const diaryData: MealTimeOfDayProps[] = [
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
        ],
    },
    {
        name: 'Lunch',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [],
    },
    {
        name: 'Dinner',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [],
    },
    {
        name: 'Snacks',
        progress: { size: 70, value: 100, total: 200, width: 10, indicatorStyles: 'stroke-cyan-200' },
        items: [],
    },
]

export const DiaryOverview = () =>
    <>
        <div className="flex-layout-row">
            <div className="grow">
                <CaloriePanel progressProps={ calorieData }/>
            </div>


            <div className="hidden grow-9999 lg:flex">
                <MacroPanel macroCircles={ macroData }/>
            </div>
        </div>

        {
            diaryData.map(data =>
                <div className="flex-layout-row">
                    <MealTimeOfDay name={ data.name } progress={ data.progress } items={ data.items }/>
                </div>,
            )
        }
    </>