import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { Form, Formik } from 'formik';
import { useContext, useEffect } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../../features/user/user-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';
import { SelectableEnum } from '../../../common/form/components/dropdown-field/selectable-enum.ts';
import { EnumDropdownField } from '../../../common/form/components/dropdown-field/enum-dropdown-field.tsx';
import { SelectDateField } from '../../../common/form/components/select-date-field.tsx';
import { UserUpdateValidationSchema } from '../validations/user-validation-schema.ts';
import { Header } from '../../../common/header.tsx';

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
    })

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
            <>
                <Header title="Your Personal Data"/>
                <Formik initialValues={ user } onSubmit={ update } validationSchema={ UserUpdateValidationSchema }>
                    <Form>
                        <DesktopPanel>
                            <ApiErrorMessage apiErrorResponse={ result.error }/>

                            <div className="mb-6 grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                                <PrimaryIconButton icon="manage_accounts"/>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Account</h4>
                                </div>

                                <div className="hidden justify-center lg:flex">
                                    <span className="flex justify-center bg-gray-100 w-0.5"></span>
                                </div>

                                <div className="col-span-2 mb-10 flex flex-col gap-6 lg:col-span-1">
                                    <InputField name="firstName" displayName="First name" type="text" apiError={ result.error }/>
                                    <InputField name="lastName" displayName="Last name" type="text" apiError={ result.error }/>
                                    <InputField name="email" displayName="E-Mail" type="text" apiError={ result.error }/>
                                </div>
                            </div>

                            <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                                <PrimaryIconButton icon="person"/>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Personal</h4>
                                </div>

                                <div className="hidden justify-center lg:flex">
                                    <span className="flex justify-center bg-gray-100 w-0.5"></span>
                                </div>


                                <div className="col-span-2 mb-10 flex flex-col gap-6 lg:col-span-1">
                                    <EnumDropdownField name="genderId"
                                                       enum={ SelectableEnum.GENDER }
                                                       displayName="Gender"
                                                       type="number"
                                                       apiError={ result.error }/>
                                    <SelectDateField name="dateOfBirth" displayname="Date of birth"/>
                                    <InputField name="height" displayName="Height" type="text" apiError={ result.error }/>
                                </div>

                                <div className="mt-4 md:mt-8 md:mb-2 border-t-2 border-gray-100 col-span-2"></div>
                                <div className="col-span-2 flex justify-end">
                                    <SubmitButton text="Save" isSubmitting={ result.isLoading }/>
                                </div>
                            </div>
                        </DesktopPanel>
                    </Form>
                </Formik>
            </>
    }

    return content
}