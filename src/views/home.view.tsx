import { Panel } from '../components/common/panel.tsx';
import { ProgressLinear } from '../components/common/progress/linear/progress-linear.tsx';
import { ProgressProps } from '../components/common/progress/progress-props.ts';
import { DIARY_ROUTE } from '../routes.ts';
import { MealPanelList } from '../components/home/meal-panel/meal-panel-list.tsx';
import { MealPanelProps } from '../components/home/meal-panel/meal-panel-props.ts';
import { MacroPanel } from '../components/home/macro-panel/macro-panel.tsx';
import { CaloriePanel } from '../components/home/calorie-panel/calorie-panel.tsx';

const calorieCircle: ProgressProps = {
    size: 200,
    name: 'Remaining',
    value: 1112,
    total: 2000,
    unit: 'kcal',
    width: 12,
    trackStyles: 'stroke-white',
}
const macroCircles: ProgressProps[] = [
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

const mealPanels: MealPanelProps[] = [
    createMealPanelProps({ name: 'Breakfast', value: 220, total: 350 }),
    createMealPanelProps({ name: 'Lunch', value: 250, total: 500 }),
    createMealPanelProps({ name: 'Dinner', value: 500, total: 650 }),
    createMealPanelProps({ name: 'Snacks', value: 75, total: 200 }),
]

export const HomeView = () =>
    <>
        <div className="flex-layout-row">
            <div className="grow">
                <CaloriePanel progressProps={ calorieCircle }/>
            </div>


            <div className="hidden grow-9999 lg:flex">
                <MacroPanel macroCircles={ macroCircles }/>
            </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-5 lg:hidden lg:gap-5">
            {
                macroCircles.map(circle =>
                    <Panel key={ circle.name }>
                        <ProgressLinear { ...circle }/>
                    </Panel>,
                )
            }
        </div>

        <div className="flex-layout-row">
            <div className="grow">
                <Panel>
                    <div>Week History</div>
                </Panel>
            </div>

            <div className="flex flex-col gap-5">
                <MealPanelList mealPanels={ mealPanels }/>
            </div>
        </div>
    </>