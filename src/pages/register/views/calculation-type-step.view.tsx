import { useOutletContext } from 'react-router-dom';
import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { useGetAllCalculationTypesQuery } from '../../../features/calculation-type/calculation-type-api-slice.ts';
import { RadioField } from '../../../common/form/components/radio-field/radio-field.tsx';

export const CalculationTypeStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.NUTRITION_TYPE
        nextRef.current = REGISTER_STEP.CALORIE_RESTRICTION
    }, [backRef, nextRef])

    const {
        data: calculationTypes,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllCalculationTypesQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        const options = calculationTypes.map(type => (
            { value: type.id, displayName: type.description }
        ))

        content = <div className="flex flex-col items-center gap-2 md:gap-3 w-full mt-4 text-lg font-medium text-gray-500">
            <RadioField name="nutritionalData.calculationTypeId" options={ options }>
                {
                    (option, field) => (
                        <div className="w-full items-center">
                            <input className="hidden peer" type="radio" id={ `${ option.value }` } { ...field }/>
                            <label className="cursor-pointer flex border rounded-md px-8 py-5 text-gray-400 transition-colors text-lg xl:text-xl gap-6
                                              peer-hover:border-cyan-200 peer-checked:bg-cyan-200 peer-checked:border-transparent peer-checked:text-gray-50
                                              w-full items-center"
                                   htmlFor={ `${ option.value }` }>
                                <span className="text-3xl material-icons-round lg:text-4xl">image</span>
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
            <RegisterHeader title="How should we calculate your RMR?"/>
            { content }
        </>
    )
}