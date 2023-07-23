import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { RegisterData } from '../../../redux/models/register/register-data.ts';

export const RegisterOverviewStepView = () => {
    const [registerState, _, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.PERSONAL
        nextRef.current = REGISTER_STEP.OVERVIEW
    }, [backRef, nextRef])

    // const everythingSet = [registerState.firstName, registerState.lastName].every(Boolean)

    return (
        <>
            <RegisterHeader title="Overview"/>
            {
                Object.keys(registerState).map(key =>
                    <div key={ key }>{ `${ key }: ${ registerState[key as keyof RegisterData] }` }</div>,
                )
            }
        </>
    )
}