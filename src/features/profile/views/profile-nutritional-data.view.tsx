import { NutritionalData } from '../../nutritional-data.ts';
import { Goal } from '../../goal.ts';
import { Form, Formik } from 'formik';
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { InputField } from '../../form/components/input-field/input-field.tsx';

export const ProfileNutritionalDataView = () => {
    const nutritionalData: NutritionalData = {
        id: 1,
        userId: 1,
        nutritionTypeId: '1',
        calculationTypeId: '1',
        activityLevelId: '1',
        physicalActivityLevelActivities: {
            sleeping: 8,
            onlySitting: 4,
            occasionalActivities: 2,
            mostlySittingOrStanding: 8,
            mostlyWalkingOrStanding: 1,
            physicallyDemanding: 1,
        },
        goal: Goal.LOOSE,
        calorieRestriction: -200
    }
    return (
        <Formik initialValues={ nutritionalData } onSubmit={ console.log }>
            <Form>
                <DesktopPanel>
                    <h3 className="mb-12 text-2xl font-medium text-gray-600 lg:hidden">Nutritional Data</h3>
                    <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                        <PrimaryIconButton icon="manage_accounts"/>
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Nutrition</h4>
                        </div>

                        <div className="hidden justify-center lg:flex">
                            <span className="flex justify-center bg-gray-300 w-0.5"></span>
                        </div>


                        <div className="mb-10 col-span-2 lg:col-span-1 flex flex-col gap-6">
                            <InputField name="nutritionTypeId" displayname="Nutrition type" type="number"/>
                            <InputField name="calculationTypeId" displayname="Calculation type id" type="number"/>
                            <InputField name="activityLevelId" displayname="Activity level" type="number"/>
                            <InputField name="phyiscalActivityLevel" displayname="Phyiscal Activity Level" type="number"/>
                            <InputField name="goal" displayname="Goal" type="text"/>
                            <InputField name="calorieRestriction" displayname="Calorie Restriction" type="number"/>
                        </div>
                    </div>
                </DesktopPanel>
            </Form>
        </Formik>
    )
}