import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { Form, Formik } from 'formik';
import { User } from '../../../redux/models/user.ts';
import { Unit } from '../../unit.ts';
import { InputField } from '../../form/components/input-field/input-field.tsx';

export const ProfilePersonalDataView = () => {
    const user: User = {
        id: 1,
        userTypeId: 1,
        email: 'leonlaade@gmx.de',
        password: 'Password123!',
        firstName: 'Leon',
        lastName: 'Laade',
        genderId: '1',
        dateOfBirth: '2000-10-27',
        height: 180,
        selectedWeightUnit: Unit.KILOGRAM,
        selectedHeightUnit: Unit.CENTIMETER,
    }
    return (
        <Formik initialValues={ user } onSubmit={ console.log }>
            <Form>
                <DesktopPanel>
                    <h3 className="mb-12 text-2xl font-medium text-gray-600 lg:hidden">Personal Data</h3>
                    <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                        <PrimaryIconButton icon="manage_accounts"/>
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Account</h4>
                        </div>

                        <div className="hidden justify-center lg:flex">
                            <span className="flex justify-center bg-gray-300 w-0.5"></span>
                        </div>


                        <div className="col-span-2 mb-10 flex flex-col lg:col-span-1 lg:gap-6">
                            <InputField name="firstName" displayname="First name" type="text"/>
                            <InputField name="lastName" displayname="Last name" type="text"/>
                            <InputField name="email" displayname="E-Mail" type="text"/>
                            <InputField name="password" displayname="Password" type="password"/>
                        </div>
                    </div>
                </DesktopPanel>


                <DesktopPanel className="mt-5 lg:mt-10">
                    <div className="grid grid-rows-1 gap-x-8 gap-y-6 grid-cols-[min-content_auto]">
                        <PrimaryIconButton icon="manage_accounts"/>
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium lg:text-2xl lg:font-bold">Personal</h4>
                        </div>

                        <div className="hidden justify-center lg:flex">
                            <span className="flex justify-center bg-gray-300 w-0.5"></span>
                        </div>


                        <div className="col-span-2 mb-10 flex flex-col lg:col-span-1 lg:gap-6">
                            <InputField name="genderId" displayname="Gender" type="text"/>
                            <InputField name="dateOfBirth" displayname="Date of birth" type="text"/>
                            <InputField name="height" displayname="Height" type="text"/>
                        </div>
                    </div>
                </DesktopPanel>
            </Form>
        </Formik>
    )
}