import { RegisterHeader } from '../components/register-header.tsx';
import { InputField } from '../../form/components/input-field.tsx';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';

export const CalorieRestrictionView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    return (
        <>
            <RegisterHeader title="Do you want to manually restrict your calories?"/>
            <InputField name="calorieRestriction"
                        value={ `${ registerStateRef.calorieRestriction ?? '' }` }
                        onChange={ (calorieRestriction) => updateStateRef({ calorieRestriction: +calorieRestriction }) }/>
        </>

    )
}