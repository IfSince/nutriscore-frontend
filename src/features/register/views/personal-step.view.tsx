import { RegisterHeader } from '../components/register-header.tsx';
import { useOutletContext } from 'react-router-dom';
import { InputField } from '../../form/components/input-field.tsx';
import { Validations } from '../../form/subfeatures/validation/models/validations.ts';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';

export const PersonalStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.CALORIE_RESTRICTION
        nextRef.current = REGISTER_STEP.OVERVIEW
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Personal information"/>
            <InputField name="firstName"
                        displayName="First name"
                        value={ registerState.firstName }
                        onChange={ firstName => updateState({ firstName }) }
                        validations={ [Validations.minLength(2)] }/>

            <InputField name="lastName"
                        displayName="Last name"
                        value={ registerState.lastName }
                        onChange={ lastName => updateState({ lastName }) }
                        validations={ [Validations.required, Validations.minLength(2)] }/>

            <InputField name="email"
                        displayName="Email"
                        value={ registerState.email }
                        onChange={ email => updateState({ email }) }
                        validations={ [Validations.required, Validations.emailFormat] }/>

            <InputField name="password"
                        type="password"
                        displayName="Password"
                        value={ registerState.password }
                        onChange={ password => updateState({ password }) }
                        validations={ [Validations.required, Validations.minLength(2)] }/>

            <InputField name="confirmPassword"
                        type="password"
                        displayName="Confirm password"
                        value={ registerState.confirmPassword }
                        onChange={ confirmPassword => updateState({ confirmPassword }) }
                        validations={ [] }/>
        </>
    )
}