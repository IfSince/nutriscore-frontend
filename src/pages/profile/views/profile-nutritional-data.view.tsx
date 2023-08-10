import { Form, Formik } from 'formik';
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { useContext, useEffect } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { useAppDispatch } from '../../../hooks.ts';
import { UserIdContext } from '../../root.view.tsx';
import { useGetNutritionalDataByUserIdQuery, useUpdateNutritionalDataMutation } from '../../../features/nutritional-data/nutritional-data-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';
import { EnumDropdownField } from '../../../common/form/components/dropdown-field/enum-dropdown-field.tsx';
import { SelectableEnum } from '../../../common/form/components/dropdown-field/selectable-enum.ts';
import { NutritionalDataUpdateValidationSchema } from '../validations/nutritional-data-validation-schema.ts';
import { Header } from '../../../common/header.tsx';

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
            <>
                <Header title="Your Nutritional Data"/>
                <Formik initialValues={ nutritionalData } onSubmit={ update } validationSchema={ NutritionalDataUpdateValidationSchema }>
                    <Form>
                        <DesktopPanel>
                            <ApiErrorMessage apiErrorResponse={ result.error }/>
                            <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                                <PrimaryIconButton icon="show_chart"/>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Nutrition</h4>
                                </div>

                                <div className="hidden justify-center lg:flex">
                                    <span className="flex justify-center bg-gray-300 w-0.5"></span>
                                </div>


                                <div className="col-span-2 gap-y-6 gap-x-10 lg:col-span-1 grid grid-cols-1 lg:grid-cols-2">
                                    <EnumDropdownField name="nutritionTypeId"
                                                       enum={ SelectableEnum.NUTRITION_TYPE }
                                                       displayName="Nutrition type"
                                                       type="number"
                                                       apiError={ result.error }/>
                                    <EnumDropdownField name="calculationTypeId"
                                                       enum={ SelectableEnum.CALCULATION_TYPE }
                                                       displayName="Calculation type"
                                                       type="number"
                                                       apiError={ result.error }/>
                                    <EnumDropdownField name="activityLevelId"
                                                       enum={ SelectableEnum.ACTIVITY_LEVEL }
                                                       displayName="Activity level"
                                                       type="number"
                                                       apiError={ result.error }/>
                                    <InputField name="phyiscalActivityLevel" displayName="Phyiscal Activity Level" type="number" apiError={ result.error }/>
                                    <InputField name="goal" displayName="Goal" type="text" apiError={ result.error }/>
                                    <InputField name="calorieRestriction" displayName="Calorie Restriction" type="number" apiError={ result.error }/>

                                    <div className="mt-4 md:mt-8 md:mb-2 border-t-2 border-gray-100 col-span-1 lg:col-span-2"></div>
                                    <div className="col-span-1 lg:col-span-2 flex justify-end">
                                        <SubmitButton text="Save" isSubmitting={ result.isLoading }/>
                                    </div>
                                </div>
                            </div>
                        </DesktopPanel>
                    </Form>
                </Formik>
            </>
    }


    return content
}