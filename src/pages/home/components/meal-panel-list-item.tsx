import { useNavigate } from 'react-router-dom';
import { ProgressCircle } from '../../../common/progress/components/progress-circle.tsx';
import { DefaultIconButton } from '../../../common/button/components/icon/default-icon-button.tsx';
import { ValueObject } from '../../../common/value-object.ts';

interface MealPanelListItemProps {
    name: string
    valueObject: ValueObject
    link: string
    isLoading: boolean
}

export const MealPanelListItem = ({ name, valueObject, link, isLoading }: MealPanelListItemProps) => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <ProgressCircle size={ 75 }
                                width={ 12 }
                                valueObject={ valueObject }
                                indicatorStyles="stroke-cyan-200"
                                isLoading={ isLoading }/>
                <div className="mr-4 ml-8 flex flex-col text-gray-600">
                    <h3 className="text-xl font-bold capitalize">{ name.toLowerCase() }</h3>
                    <span>{ valueObject.value } { valueObject.unit }</span>
                </div>
            </div>

            <DefaultIconButton action={ () => navigate(link) } icon="arrow_forward_ios"/>
        </div>
    )
}