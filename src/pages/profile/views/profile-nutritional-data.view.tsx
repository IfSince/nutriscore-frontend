import { Form, Formik } from 'formik';
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { useContext, useEffect } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import {
    useGetNutritionalDataByUserIdQuery,
    useUpdateNutritionalDataMutation,
} from '../../../features/nutritional-data/nutritional-data-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';

export const ProfileNutritionalDataView = () => {
    const dispatch = useAppDispatch()
    const userId = useContext(UserIdContext)

    const {
        data: nutritionalData,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetNutritionalDataByUserIdQuery(userId)

    const [update, result] = useUpdateNutritionalDataMutation()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(addSuccessMessage('Nutritional data updated successfully!'))
        }
    })

    let content
    if (isLoading) {

        content =
            <DesktopPanel>
                <h3 className="mb-12 text-2xl font-medium lg:hidden">Nutritional Data</h3>
                <CenteredSpinner backgroundClr="text-gray-100"
                                 fill="fill-cyan-300"
                                 size="lg"/>
            </DesktopPanel>
    } else if (isError) {
        content =
            <DesktopPanel>
                <h3 className="mb-12 text-2xl font-medium lg:hidden">Nutritional Data</h3>
                <ApiErrorMessage apiErrorResponse={ error }/>
            </DesktopPanel>
    } else if (isSuccess) {
        content =
            <Formik initialValues={ nutritionalData } onSubmit={ update }>
                <Form>
                    <DesktopPanel>
                        <h3 className="mb-12 text-2xl font-medium lg:hidden">Nutritional Data</h3>
                        <ApiErrorMessage apiErrorResponse={ result.error }/>
                        <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                            <PrimaryIconButton icon="manage_accounts"/>
                            <div className="flex items-center justify-between">
                                <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Nutrition</h4>
                            </div>

                            <div className="hidden justify-center lg:flex">
                                <span className="flex justify-center bg-gray-300 w-0.5"></span>
                            </div>


                            <div className="col-span-2 mb-10 flex flex-col gap-6 lg:col-span-1">
                                <InputField name="nutritionTypeId" displayname="Nutrition type" type="number" errors={ result.error }/>
                                <InputField name="calculationTypeId" displayname="Calculation type id" type="number" errors={ result.error }/>
                                <InputField name="activityLevelId" displayname="Activity level" type="number" errors={ result.error }/>
                                <InputField name="phyiscalActivityLevel" displayname="Phyiscal Activity Level" type="number" errors={ result.error }/>
                                <InputField name="goal" displayname="Goal" type="text" errors={ result.error }/>
                                <InputField name="calorieRestriction" displayname="Calorie Restriction" type="number" errors={ result.error }/>
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