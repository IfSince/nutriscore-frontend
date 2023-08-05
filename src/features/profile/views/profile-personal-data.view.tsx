import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { Form, Formik } from 'formik';
import { InputField } from '../../form/components/input-field/input-field.tsx';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../user/user-api-slice.ts';
import { useContext, useEffect } from 'react';
import { UserIdContext } from '../../../views/root.view.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';

export const ProfilePersonalDataView = () => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserByIdQuery(userId)

    const [update, result] = useUpdateUserMutation()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(addSuccessMessage('Personal data updated successfully!'))
        }
    }, )

    let content
    if (isLoading) {
        content =
            <DesktopPanel>
                <h3 className="mb-12 text-2xl font-medium lg:hidden">Personal Data</h3>
                <CenteredSpinner backgroundClr="text-gray-100"
                                 fill="fill-cyan-300"
                                 size="lg"/>
            </DesktopPanel>
    } else if (isError) {
        content =
            <DesktopPanel>
                <h3 className="mb-12 text-2xl font-medium lg:hidden">Personal Data</h3>
                <ApiErrorMessage apiErrorResponse={ error }/>
            </DesktopPanel>
    } else if (isSuccess) {
        content =
            <Formik initialValues={ user } onSubmit={ update }>
                <Form>
                    <DesktopPanel>
                        <h3 className="mb-12 text-2xl font-medium lg:hidden">Personal Data</h3>
                        <ApiErrorMessage apiErrorResponse={ result.error }/>
                        <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                            <PrimaryIconButton icon="manage_accounts"/>
                            <div className="flex items-center justify-between">
                                <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Account</h4>
                            </div>

                            <div className="hidden justify-center lg:flex">
                                <span className="flex justify-center bg-gray-300 w-0.5"></span>
                            </div>


                            <div className="col-span-2 mb-10 flex flex-col gap-6 lg:col-span-1">
                                <InputField name="firstName" displayname="First name" type="text" errors={ result.error }/>
                                <InputField name="lastName" displayname="Last name" type="text" errors={ result.error }/>
                                <InputField name="email" displayname="E-Mail" type="text" errors={ result.error }/>
                            </div>
                        </div>
                    </DesktopPanel>


                    <DesktopPanel className="mt-10">
                        <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                            <PrimaryIconButton icon="manage_accounts"/>
                            <div className="flex items-center justify-between">
                                <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Personal</h4>
                            </div>

                            <div className="hidden justify-center lg:flex">
                                <span className="flex justify-center bg-gray-300 w-0.5"></span>
                            </div>


                            <div className="col-span-2 mb-10 flex flex-col gap-6 lg:col-span-1">
                                <InputField name="genderId" displayname="Gender" type="text" errors={ result.error }/>
                                <InputField name="dateOfBirth" displayname="Date of birth" type="text" errors={ result.error }/>
                                <InputField name="height" displayname="Height" type="text" errors={ result.error }/>
                            </div>
                        </div>
                    </DesktopPanel>
                    <SubmitButton text="Submit" isSubmitting={ result.isLoading }/>
                </Form>
            </Formik>
    }


    return (
        content
    )
}