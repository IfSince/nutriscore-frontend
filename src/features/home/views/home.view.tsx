import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { WeeklyOverviewPanel, WeeklyOverviewPanelProps } from '../components/weekly-overview-panel.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanel } from '../../../common/macro-panel/components/macro-panel.tsx';

const calorieData: ProgressProps = {
    size: 200,
    name: 'Remaining',
    value: 1112,
    total: 2000,
    unit: 'kcal',
    width: 15,
    trackStyles: 'stroke-white',
}
const macroData: ProgressProps[] = [
    { size: 160, width: 13, name: 'Protein', value: 89, total: 100, unit: 'g', indicatorStyles: 'stroke-red bg-red' },
    { size: 160, width: 13, name: 'Carbs', value: 41, total: 100, unit: 'g', indicatorStyles: 'stroke-green bg-green' },
    { size: 160, width: 13, name: 'Fats', value: 22, total: 100, unit: 'g', indicatorStyles: 'stroke-yellow bg-yellow' },
    { size: 160, width: 13, name: 'Water', value: 1.6, total: 2, unit: 'l', indicatorStyles: 'stroke-blue bg-blue' },
]

const mealData: ProgressProps[] = [
    { size: 75, width: 12, name: 'Breakfast', value: 220, total: 350, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, width: 12, name: 'Lunch', value: 250, total: 500, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, width: 12, name: 'Dinner', value: 500, total: 650, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, width: 12, name: 'Snacks', value: 75, total: 200, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
]

const weightData: WeeklyOverviewPanelProps[] = [
    { day: 'Monday', value: 80.5 },
    { day: 'Tuesday', value: 80.5 },
    { day: 'Wednesday', value: 80.4 },
    { day: 'Thursday', value: 80.2 },
    { day: 'Friday', value: 80.6 },
    { day: 'Saturday', value: 80 },
    { day: 'Sunday', value: 80 },
]

export const HomeView = () =>
    <>
        <div className="flex-layout-row">
            <CaloriePanel data={ calorieData }/>
            <MacroPanel data={ macroData }/>
        </div>

        <div className="flex-layout-row">
            <WeeklyOverviewPanel data={ weightData }/>
            <MealPanelList data={ mealData }/>
        </div>
    </>