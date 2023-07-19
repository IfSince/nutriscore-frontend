import { RegisterHeader } from '../components/register-header.tsx';
import { SelectDateField } from '../../form/components/select-date-field.tsx';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';

export const RegisterDateOfBirthStepView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    return (
        <>
            <RegisterHeader title="What is your date of birth?"/>
            <SelectDateField name="dateOfBirth"
                             value={ registerStateRef.dateOfBirth }
                             onChange={ (dateOfBirth: string) => updateStateRef({ dateOfBirth }) }
            />
        </>
    );
}