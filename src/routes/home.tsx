import { CustomDatePicker } from '../components/common/custom-date-picker.tsx';
import { Menu } from '../components/menu/menu.tsx';
import { MENU_ITEMS } from '../components/menu/model/menu-items.ts';
import { Panel } from '../components/common/panel.tsx';
import { ProgressCircle } from '../components/common/progress/circle/progress-circle.tsx';
import { ProgressLinear } from '../components/common/progress/linear/progress-linear.tsx';
import { IconButton } from '../components/common/button/icon-button.tsx';
import { ProgressProps } from '../components/common/progress/progress-props.ts';

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

interface MealPanel extends ProgressProps {
    link: string
}

const mealPanels: MealPanel[] = [
    { size: 75, name: 'Breakfast', link: '', value: 220, total: 350, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, name: 'Lunch', link: '', value: 250, total: 500, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, name: 'Dinner', link: '', value: 500, total: 650, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
    { size: 75, name: 'Snacks', link: '', value: 75, total: 200, unit: 'kcal', indicatorStyles: 'stroke-cyan-200' },
]
export const HomeView = () =>
    (
        <div className="flex justify-center lg:min-h-screen">
            <div className="flex w-full flex-col px-5 pt-16 pb-0 max-w-screen-3xl md:pt-10 lg:px-10">
                <header className="mb-8 flex w-full flex-col lg:mb-16 lg:flex-row">
                    <div className="mb-10 flex w-80 items-center lg:mb-0">
                        <h1 className="text-2xl font-bold text-cyan-300 md:text-3xl">Nutriscore</h1>
                    </div>
                    <div className="flex grow lg:justify-end">
                        <CustomDatePicker/>
                    </div>
                </header>

                <div className="flex w-full grow flex-col lg:flex-row">
                    <Menu items={ MENU_ITEMS }/>
                    <main className="mb-32 flex h-fit w-full grow flex-col flex-wrap gap-10 lg:mb-10 lg:ml-10 lg:flex-row">
                        <div className="flex-layout-row">
                            <div className="grow">
                                <Panel highlighted={ true }>
                                    <h3 className="text-lg font-bold text-gray-600 lg:text-xl">Calories</h3>
                                    <div className="px-9 pt-4 pb-1">
                                        <ProgressCircle { ...calorieCircle }>
                                            <span className="fill-gray-600 text-5xl font-bold">{ calorieCircle.value }</span>
                                            <span className="text-lg">{ calorieCircle.unit }</span>
                                        </ProgressCircle>
                                    </div>
                                </Panel>
                            </div>

                            <div className="hidden grow-9999 lg:flex">
                                <Panel>
                                    <h3 className="text-lg font-bold text-gray-600 lg:text-xl">Macro Intake</h3>
                                    <div className="flex justify-around pt-10 pb-1">
                                        {
                                            macroCircles.map(circle =>
                                                <ProgressCircle key={ circle.name } { ...circle }>
                                                    <span className="fill-gray-600 text-4xl font-bold">{ circle.value }</span>
                                                    <span className="text-lg">{ circle.unit }</span>
                                                </ProgressCircle>,
                                            )
                                        }
                                    </div>
                                </Panel>
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
                                    <div>test</div>
                                </Panel>
                            </div>

                            <div className="flex flex-col gap-5">
                                {
                                    mealPanels.map(mealPanel =>
                                        <Panel key={ mealPanel.name } additionalStyles="py-4 lg:py-4">
                                            <div className="flex items-center justify-between">
                                                <div className={ 'flex items-center mr-28' }>
                                                    <ProgressCircle value={ mealPanel.value }
                                                                    total={ mealPanel.total }
                                                                    unit={ mealPanel.unit }
                                                                    indicatorStyles={ mealPanel.indicatorStyles }
                                                                    size={ mealPanel.size }
                                                                    width={ mealPanel.width }/>

                                                    <div className="flex flex-col ml-8">
                                                        <h3 className="font-bold text-xl">{ mealPanel.name }</h3>
                                                        <span>{ mealPanel.value } { mealPanel.unit }</span>
                                                    </div>
                                                </div>

                                                <IconButton action={ () => console.log(mealPanel.link) } icon={ 'arrow_forward_ios' }/>
                                            </div>
                                        </Panel>,
                                    )
                                }
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    )