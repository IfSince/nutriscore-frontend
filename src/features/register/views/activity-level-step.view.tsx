import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';

export const ActivityLevelStepView = () => {
    const [registerStateRef, updateStateRef]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const options = [
        { value: 1, displayName: 'Activity per week', icon: 'image' },
        { value: 2, displayName: 'PA Level', icon: 'image' },
        { value: 3, displayName: 'PA Factor', icon: 'image' },
        { value: 4, displayName: 'MET', icon: 'image' },
        { value: 5, displayName: 'MET Factor', icon: 'image' },
    ]

    return (
        <>
            <RegisterHeader title="How do you want to track your activity?"/>
            <SelectListField name="activityLevel"
                             options={ options }
                             onChange={ (value: string) => updateStateRef({ activityLevelId: +value }) }
                             value={ `${ registerStateRef.activityLevelId }` }/>
        </>
    )
}