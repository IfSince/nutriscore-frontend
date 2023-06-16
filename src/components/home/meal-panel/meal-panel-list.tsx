import { MealPanel } from './meal-panel.tsx';
import { Panel } from '../../common/panel.tsx';
import { MealPanelProps } from './meal-panel-props.ts';

export const MealPanelList = ({ mealPanels }: { mealPanels: MealPanelProps[] }) => {
    return (
        mealPanels.map(mealPanel =>
            <Panel key={mealPanel.name} className="py-4 lg:py-4">
                <MealPanel { ...mealPanel }/>
            </Panel>,
        )
    )
}