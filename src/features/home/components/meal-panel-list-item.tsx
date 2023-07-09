import { useNavigate } from 'react-router-dom';
import { ProgressProps } from '../../../common/progress/models/progress-props.ts';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { DefaultIconButton } from '../../../common/button/components/icon/default-icon-button.tsx';

interface MealPanelListItemProps {
    name: string
    progress: ProgressProps
    link: string
}

export const MealPanelListItem = ({ name, progress, link }: MealPanelListItemProps) => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <ProgressCircle valueObject={ progress.valueObject }
                                indicatorStyles={ progress.indicatorStyles }
                                size={ progress.size }
                                width={ progress.width }/>
                <div className="mr-4 ml-8 flex flex-col">
                    <h3 className="text-xl font-bold">{ name }</h3>
                    <span>{ progress.valueObject.value } { progress.valueObject.unit }</span>
                </div>
            </div>

            <DefaultIconButton action={ () => navigate(link) } icon="arrow_forward_ios"/>
        </div>
    )
}