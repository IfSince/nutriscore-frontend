import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { GoalEnum } from '../../../redux/enums/goal.enum.ts';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';


export const GoalStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = null
        nextRef.current = REGISTER_STEP.GENDER
    }, [backRef, nextRef])

    const options = [
        { value: GoalEnum.LOOSE, displayName: 'Loose weight', icon: 'trending_down' },
        { value: GoalEnum.KEEP, displayName: 'Keep weight', icon: 'arrow_right_alt' },
        { value: GoalEnum.GAIN, displayName: 'Gain weight', icon: 'trending_up' },
    ]

    return (
        <>
            <RegisterHeader title="What is your main goal?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ goal => updateState({ goal }) }
                             value={ registerState.goal }
                             className="flex flex-col items-center gap-2 md:gap-3"
                             optionsClassName="w-full items-center"
                             iconClassName="text-3xl lg:text-4xl"
            />
        </>
    )
}