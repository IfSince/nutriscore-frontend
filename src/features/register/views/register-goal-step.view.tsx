import { useOutletContext } from 'react-router-dom';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { GoalEnum } from '../../../redux/enums/goal.enum.ts';

export const RegisterGoalStepView = () => {
    const [registerData, updateState]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const options = [
        { value: GoalEnum.LOOSE, displayName: 'Loose', icon: 'trending_down' },
        { value: GoalEnum.KEEP, displayName: 'Keep', icon: 'arrow_right_alt' },
        { value: GoalEnum.GAIN, displayName: 'Gain', icon: 'trending_up' },
    ]

    return (
        <>
            <RegisterHeader title="What is your main goal?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ (goal: string) => updateState({ goal }) }
                             value={ `${ registerData.goal }` }
                             className="flex flex-col items-center gap-2 md:gap-3"
                             optionsClassName="w-full items-center"
                             iconClassName="text-3xl lg:text-4xl"
            />
        </>
    )
}