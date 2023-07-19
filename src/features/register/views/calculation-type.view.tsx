import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';

export const CalculationTypeView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const options = [
        { value: 1, displayName: 'Easy', icon: 'image' },
        { value: 2, displayName: 'Complicated', icon: 'image' },
        { value: 3, displayName: 'Harris Benedict Method', icon: 'image' },
        { value: 4, displayName: 'Mifflin-St. Jeor Method', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="How should we calculate your RMR?"/>
            <SelectListField name="rmr"
                             options={ options }
                             onChange={ (value: string) => updateStateRef({ calculationTypeId: +value }) }
                             value={ `${ registerStateRef.calculationTypeId }` }/>
        </>
    )
}