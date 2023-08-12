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
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';

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
                        <DesktopPanel>
                            <ApiErrorMessage apiErrorResponse={ result.error }/>
                            <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                                <PrimaryIconButton icon="show_chart"/>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Select allergenics</h4>
                                </div>

                                <div className="hidden justify-center lg:flex">
                                    <span className="flex justify-center bg-gray-100 w-0.5"></span>
                                </div>

                                <div className="col-span-2 grid grid-cols-2 lg:col-span-1 gap-5 sm:grid-cols-3 max-w-2xl">
                                    <CustomArrayField name="allergenics" values={ allergenics }>
                                        {
                                            ({ value, isSelected, onSelect }) => (
                                                <button type="button"
                                                        key={ value.id }
                                                        onClick={ onSelect }>
                                                    <Panel title={ value.description }
                                                           className={ `text-left transition-colors max-h-40
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
                            </div>
                            <div className="mt-10 mb-6 md:mt-8 md:mb-8 border-t-2 border-gray-100 col-span-1 lg:col-span-2"></div>
                            <div className="col-span-1 lg:col-span-2 flex justify-end">
                                <SubmitButton text="Save" isSubmitting={ result.isLoading }/>
                            </div>


                        </DesktopPanel>
                    </Form>
                </Formik>
            </>

    }

    return content
}