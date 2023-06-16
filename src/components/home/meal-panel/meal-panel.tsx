import { MealPanelProps } from './meal-panel-props.ts';
import { useNavigate } from 'react-router-dom';
import { ProgressCircle } from '../../common/progress/circle/progress-circle.tsx';
import { IconButton } from '../../common/button/icon-button.tsx';

export const MealPanel = ({ size, name, link, value, total, unit, indicatorStyles, width = 10 }: MealPanelProps) => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <ProgressCircle value={ value }
                                total={ total }
                                unit={ unit }
                                indicatorStyles={ indicatorStyles }
                                size={ size }
                                width={ width }/>
                <div className="ml-8 flex flex-col">
                    <h3 className="text-xl font-bold">{ name }</h3>
                    <span>{ value } { unit }</span>
                </div>
            </div>

            <IconButton action={ () => navigate(link) } icon="arrow_forward_ios"/>
        </div>
    )
}