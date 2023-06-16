import { Panel } from '../components/common/panel.tsx';
import { ProgressLinear } from '../components/common/progress/linear/progress-linear.tsx';
import { ProgressProps } from '../components/common/progress/progress-props.ts';
import { DIARY_ROUTE } from '../routes.ts';
import { MealPanelList } from '../components/home/meal-panel/meal-panel-list.tsx';
import { MealPanelProps } from '../components/home/meal-panel/meal-panel-props.ts';
import { MacroPanel } from '../components/home/macro-panel/macro-panel.tsx';
import { CaloriePanel } from '../components/home/calorie-panel/calorie-panel.tsx';
import { WeeklyHistoryPanel } from '../components/home/weekly-history/weekly-history-panel.tsx';
import { WeeklyHistoryPanelProps } from '../components/home/weekly-history/weekly-history-panel-props.ts';

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

const createMealPanelProps = (apiProps: { name: string, value: number, total: number }): MealPanelProps => (
    {
        size: 75,
        name: apiProps.name,
        link: DIARY_ROUTE,
        value: apiProps.value,
        total: apiProps.total,
        unit: 'kcal',
        indicatorStyles: 'stroke-cyan-200',
    }
)

const mealPanelData: MealPanelProps[] = [
    createMealPanelProps({ name: 'Breakfast', value: 220, total: 350 }),
    createMealPanelProps({ name: 'Lunch', value: 250, total: 500 }),
    createMealPanelProps({ name: 'Dinner', value: 500, total: 650 }),
    createMealPanelProps({ name: 'Snacks', value: 75, total: 200 }),
]

const weeklyHistoryPanelData: WeeklyHistoryPanelProps[] = [
    { 'name': 'Monday', 'uv': 4000, 'pv': 2400, 'amt': 2400 },
    { 'name': 'Tuesday', 'uv': 2000, 'pv': 9800, 'amt': 2290 },
    { 'name': 'Wednesday', 'uv': 3000, 'pv': 1398, 'amt': 2210 },
    { 'name': 'Thursday', 'uv': 2780, 'pv': 3908, 'amt': 2000 },
    { 'name': 'Friday', 'uv': 1890, 'pv': 4800, 'amt': 2181 },
    { 'name': 'Saturday', 'uv': 2390, 'pv': 3800, 'amt': 2500 },
    { 'name': 'Sunday', 'uv': 3490, 'pv': 4300, 'amt': 2100 },
]

export const HomeView = () =>
    <>
        <div className="flex-layout-row">
            <div className="grow">
                <CaloriePanel progressProps={ calorieData }/>
            </div>


            <div className="hidden grow-9999 lg:flex">
                <MacroPanel macroCircles={ macroData }/>
            </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 lg:hidden lg:gap-5">
            {
                macroData.map(circle =>
                    <Panel key={ circle.name }>
                        <ProgressLinear { ...circle }/>
                    </Panel>,
                )
            }
        </div>

        <div className={ 'flex-layout-row flex-col xl:flex-row' }>
            <div className={ 'grow' }>
                <WeeklyHistoryPanel data={weeklyHistoryPanelData}/>
            </div>

            <div className="flex flex-col gap-5 grow-9999 xl:max-w-sm">
                <MealPanelList mealPanels={ mealPanelData }/>
            </div>
        </div>
    </>