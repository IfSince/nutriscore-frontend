import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../models/register-form.ts';

export const RegisterOverviewStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()
    const { values: registerForm } = useFormikContext<RegisterForm>()

    useEffect(() => {
        backRef.current = REGISTER_STEP.PERSONAL
        nextRef.current = REGISTER_STEP.OVERVIEW
    }, [backRef, nextRef])

    // const everythingSet = [registerState.firstName, registerState.lastName].every(Boolean)

    return (
        <>
            <RegisterHeader title="Overview"/>
            {
                Object.keys(registerForm).map(key =>
                    <div key={ key }>{ `${ key }: ${ JSON.stringify(registerForm[key as keyof RegisterForm]) }` }</div>,
                )
            }
        </>
    )
}