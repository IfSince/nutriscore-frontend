import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { SelectDateField } from '../../../common/form/components/select-date-field.tsx';

export const DateOfBirthStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.GENDER
        nextRef.current = REGISTER_STEP.HEIGHT
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="What is your date of birth?"/>
            <SelectDateField name="user.dateOfBirth"/>
        </>
    );
}