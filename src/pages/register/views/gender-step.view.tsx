import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { useEffect } from 'react';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { useGetAllGendersQuery } from '../../../features/gender/gender-api-slice.ts';
import { RadioField } from '../../../common/form/components/radio-field/radio-field.tsx';

export const GenderStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.GOAL
        nextRef.current = REGISTER_STEP.DATE_OF_BIRTH
    }, [backRef, nextRef])

    const {
        data: genders,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllGendersQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const options = genders.map(gender => (
            { value: gender.id, displayName: gender.description, icon: gender.description.toLowerCase() }
        ))

        content = <div className="flex flex-row justify-center gap-4 mt-4 text-lg font-medium text-gray-500 ">
            <RadioField name="user.genderId" options={ options }>
                {
                    (option, field) => (
                        <div className="w-full items-center">
                            <input className="peer hidden" type="radio" id={ `${ option.value }` } { ...field }/>
                            <label className="cursor-pointer w-full border px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              items-center aspect-[9/11] max-w-xs grow justify-center rounded-2xl flex flex-col"
                                   htmlFor={ `${ option.value }` }>
                                { option.icon && <span className="material-icons-round text-7xl lg:text-8xl">{ option.icon }</span> }
                                <span>{ option.displayName }</span>
                            </label>
                        </div>
                    )
                }
            </RadioField>
        </div>

    }

    return (
        <>
            <RegisterHeader title="Which one are you?"/>
            { content }
        </>
    )
}