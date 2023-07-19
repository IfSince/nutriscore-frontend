import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';
import { InputField } from '../../form/components/input-field.tsx';
import { Validations } from '../../form/subfeatures/validation/models/validations.ts';

export const PersonalStepView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    return (
        <>
            <RegisterHeader title="Personal information"/>
            <InputField name="firstName"
                        displayName="First name"
                        value={ `${ registerStateRef.firstName ?? '' }` }
                        onChange={ (firstName) => updateStateRef({ firstName }) }
                        validations={ [Validations.minLength(2)] }/>

            <InputField name="lastName"
                        displayName="Last name"
                        value={ `${ registerStateRef.lastName ?? '' }` }
                        onChange={ (lastName) => updateStateRef({ lastName }) }
                        validations={ [Validations.required, Validations.minLength(2)] }/>

            <InputField name="email"
                        displayName="Email"
                        value={ `${ registerStateRef.email ?? '' }` }
                        onChange={ (email) => updateStateRef({ email }) }
                        validations={ [Validations.required, Validations.emailFormat] }/>

            <InputField name="password"
                        type="password"
                        displayName="First name"
                        value={ `${ registerStateRef.password ?? '' }` }
                        onChange={ (password) => updateStateRef({ password }) }
                        validations={ [Validations.required, Validations.minLength(2)] }/>

            <InputField name="confirmPassword"
                        type="password"
                        displayName="Confirm password"
                        value={ `${ registerStateRef.confirmPassword ?? '' }` }
                        onChange={ (confirmPassword) => updateStateRef({ confirmPassword }) }
                        validations={ [] }/>
        </>
    )
}