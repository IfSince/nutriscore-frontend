import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { Form, Formik } from 'formik';
import { Panel } from '../../../common/panel.tsx';
import { useContext, useEffect } from 'react';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import {
    useGetAllAllergenicsQuery,
    useGetAllergenicsByUserIdQuery,
    useUpdateUserAllergenicsMutation,
} from '../../../features/allergenics/allergenics-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { CustomArrayField } from '../../../common/form/components/array-field/custom-array-field.tsx';
import { Header } from '../../../common/header.tsx';

export const ProfileAllergenicsView = () => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const {
        data: allergenics,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAllAllergenicsQuery()

    const {
        data: userAllergenics,
        isLoading: userAllergenicsIsLoading,
        isSuccess: userAllergenicsIsSuccess,
        isError: userAllergenicsIsError,
        error: userAllergenicsError,
    } = useGetAllergenicsByUserIdQuery(userId)

    const [update, result] = useUpdateUserAllergenicsMutation()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(addSuccessMessage('Allergies updated successfully!'))
        }
    })

    let content
    if (isLoading || userAllergenicsIsLoading) {
        content = <CenteredSpinner backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="lg"/>
    } else if (isError || userAllergenicsIsError) {
        content =
            <>
                { error && <ApiErrorMessage apiErrorResponse={ error }/> }
                { userAllergenicsError && <ApiErrorMessage apiErrorResponse={ userAllergenicsError }/> }
            </>
    } else if (isSuccess && userAllergenicsIsSuccess) {
        content =
            <>
                <Header title="Allergenics"
                        apiErrorResponse={ result.error }/>
                <Formik initialValues={ { allergenics: userAllergenics } }
                        onSubmit={ data => { update([userId, data]) } }>
                    <Form>
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                            <CustomArrayField name="allergenics" values={ allergenics }>
                                {
                                    ({ value, isSelected, onSelect }) => (
                                        <button type="button"
                                                key={ value.id }
                                                onClick={ onSelect }>
                                            <Panel title={ value.description }
                                                   className={ `text-left transition-colors
                                                        ${ isSelected
                                                       ? '!bg-cyan-200 !border-cyan-200 !text-gray-50'
                                                       : 'group-hover:border-cyan-200'
                                                   }` }>
                                                <span className="w-full py-4 text-center text-4xl material-icons-round sm:py-8">image</span>
                                            </Panel>
                                        </button>
                                    )
                                }
                            </CustomArrayField>
                        </div>
                        <SubmitButton text="Submit" isSubmitting={ result.isLoading }/>
                    </Form>
                </Formik>
            </>

    }

    return (
        <>
            <h3 className="mb-8 text-2xl font-medium text-gray-600 lg:hidden">Food allergies</h3>
            { content }
        </>
    )
}