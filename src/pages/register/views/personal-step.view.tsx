import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';

export const PersonalStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.CALORIE_RESTRICTION
        nextRef.current = REGISTER_STEP.OVERVIEW
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Personal information"/>
            <div className="mt-4 w-full">
                <InputField name="user.firstName"
                            displayname="First name"
                            type="text"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="user.lastName"
                            displayname="Last name"
                            type="text"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="user.email"
                            displayname="Email"
                            type="text"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="user.password"
                            displayname="Password"
                            autoComplete="off"
                            type="password"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="user.confirmPassword"
                            displayname="Confirm password"
                            type="password"/>
            </div>
        </>
    )
}