import { RegisterHeader } from '../components/register-header.tsx';
import { SelectDateField } from '../../form/components/select-date-field.tsx';
import { useOutletContext } from 'react-router-dom';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';

export const DateOfBirthStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.GENDER
        nextRef.current = REGISTER_STEP.HEIGHT
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="What is your date of birth?"/>
            <SelectDateField name="dateOfBirth"
                             value={ registerState.dateOfBirth }
                             onChange={ (dateOfBirth) => updateState({ dateOfBirth }) }
            />
        </>
    );
}