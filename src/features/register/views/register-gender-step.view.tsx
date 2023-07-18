import { useOutletContext } from 'react-router-dom';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { RegisterHeader } from '../components/register-header.tsx';
import { SelectListField } from '../../form/components/select-list-field.tsx';

export const RegisterGenderStepView = () => {
    const [registerData, updateState]: [RegisterData, (data: Partial<RegisterData>) => void] = useOutletContext()

    const options = [
        { value: 1, displayName: 'Male', icon: 'male' },
        { value: 2, displayName: 'Female', icon: 'female' },
    ]

    return (
        <>
            <RegisterHeader title="Which one are you?"/>
            <SelectListField name="gender"
                             options={ options }
                             onChange={ (value: string) => updateState({ genderId: +value }) }
                             value={ `${ registerData.genderId }` }
                             className="flex flex-row justify-center gap-4"
                             optionsClassName="aspect-[9/11] max-w-xs grow w-full items-center justify-center !rounded-2xl flex flex-col"
                             iconClassName="text-7xl lg:text-8xl"/>
        </>
    )
}