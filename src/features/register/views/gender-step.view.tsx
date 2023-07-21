import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';

export const GenderStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.GOAL
        nextRef.current = REGISTER_STEP.DATE_OF_BIRTH
    }, [backRef, nextRef])


    const options = [
        { value: 1, displayName: 'Male', icon: 'male' },
        { value: 2, displayName: 'Female', icon: 'female' },
    ]

    return (
        <>
            <RegisterHeader title="Which one are you?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ genderId => updateState({ genderId }) }
                             value={ registerState.genderId }
                             className="flex flex-row justify-center gap-4"
                             optionsClassName="aspect-[9/11] max-w-xs grow w-full items-center justify-center !rounded-2xl flex flex-col"
                             iconClassName="text-7xl lg:text-8xl"/>
        </>
    )
}