import { useNavigate } from 'react-router-dom';
import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { IconButton } from '../../../common/button/components/icon-button.tsx';

export const MealPanel = ({ data: { size, name, value, total, unit, indicatorStyles, width }, link }: { data: ProgressProps, link: string }) => {
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
                <div className="mr-4 ml-8 flex flex-col">
                    <h3 className="text-xl font-bold">{ name }</h3>
                    <span>{ value } { unit }</span>
                </div>
            </div>

            <IconButton action={ () => navigate(link) } icon="arrow_forward_ios"/>
        </div>
    )
}