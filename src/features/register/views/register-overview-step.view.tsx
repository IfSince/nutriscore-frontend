import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { Link, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../models/register-form.ts';
import { FieldError } from '../../form/components/field-error.tsx';
import { UNIT_ABBREVIATIONS } from '../../unit.ts';
import { Accordion } from 'flowbite-react';
import {
    NUTRITION_TYPE_ROUTE,
    REGISTER_ACTIVITY_LEVEL_ROUTE,
    REGISTER_ALLERGENIC_ROUTE,
    REGISTER_CALCULATION_TYPE_ROUTE,
    REGISTER_CALORIE_RESTRICTION_ROUTE,
    REGISTER_DATE_OF_BIRTH_ROUTE,
    REGISTER_GENDER_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_HEIGHT_ROUTE,
    REGISTER_PAL_ROUTE,
    REGISTER_PERSONAL_ROUTE,
    REGISTER_WEIGHT_ROUTE,
} from '../../../routes.ts';
import { determinePal } from '../../nutritional-recordings/models/physical-activity-level-activities.ts';

export const OverviewField = ({ displayName, name, value, link }: { displayName: string, name: string, value: unknown, link: string }) => {
    return (
        <div className="flex flex-col">
            <Link to={ link } className="text-base font-medium text-cyan-200 lg:text-lg hover:underline">{ displayName }</Link>
            <span className="text-sm font-medium text-gray-600 lg:text-base">{ `${ value }` || '-' }</span>
            <div className="-mt-1 -ml-1">
                <FieldError name={ name }/>
            </div>
        </div>
    )
}

export const RegisterOverviewStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()
    const { values: registerForm } = useFormikContext<RegisterForm>()

    useEffect(() => {
        backRef.current = REGISTER_STEP.PERSONAL
        nextRef.current = REGISTER_STEP.OVERVIEW
    }, [backRef, nextRef])

    // const everythingSet = [registerState.firstName, registerState.lastName].every(Boolean)

    return (
        <>
            <RegisterHeader title="Overview"/>
            <div className="w-full">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            <span className="text-lg !font-bold">Account Information</span>
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2">
                                <OverviewField displayName="Email"
                                               name="user.email"
                                               value={ registerForm.user.email }
                                               link={ REGISTER_PERSONAL_ROUTE }/>
                                <OverviewField displayName="Password"
                                               name="user.password"
                                               value={ registerForm.user.password }
                                               link={ REGISTER_PERSONAL_ROUTE }/>
                                <OverviewField displayName="Confirm password"
                                               name="user.confirmPassword"
                                               value={ registerForm.user.confirmPassword }
                                               link={ REGISTER_PERSONAL_ROUTE }/>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title>
                            <span className="text-lg !font-bold">Personal Information</span>
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2">
                                <OverviewField displayName="First name"
                                               name="user.firstName"
                                               value={ registerForm.user.firstName }
                                               link={ REGISTER_PERSONAL_ROUTE }/>

                                <OverviewField displayName="Last name"
                                               name="user.lastName"
                                               value={ registerForm.user.lastName }
                                               link={ REGISTER_PERSONAL_ROUTE }/>
                                <OverviewField displayName="Date of birth"
                                               name="user.dateOfBirth"
                                               value={ registerForm.user.dateOfBirth }
                                               link={ REGISTER_DATE_OF_BIRTH_ROUTE }/>
                                <OverviewField displayName="Gender"
                                               name="user.genderId"
                                               value={ registerForm.user.genderId }
                                               link={ REGISTER_GENDER_ROUTE }/>
                                <OverviewField displayName="Height"
                                               name="user.height"
                                               value={ registerForm.user.height }
                                               link={ REGISTER_HEIGHT_ROUTE }/>
                                <OverviewField displayName="Height unit"
                                               name="user.selectedHeightUnit"
                                               value={ UNIT_ABBREVIATIONS[registerForm.user.selectedHeightUnit] }
                                               link={ REGISTER_HEIGHT_ROUTE }/>
                                <OverviewField displayName="Weight"
                                               name="weightRecording.weight"
                                               value={ registerForm.weightRecording.weight }
                                               link={ REGISTER_WEIGHT_ROUTE }/>
                                <OverviewField displayName="Weight unit"
                                               name="weightRecording.weight"
                                               value={ UNIT_ABBREVIATIONS[registerForm.user.selectedWeightUnit] }
                                               link={ REGISTER_WEIGHT_ROUTE }/>
                                <OverviewField displayName="Allergenics"
                                               name="allergenicIds"
                                               value={ registerForm.allergenicIds }
                                               link={ REGISTER_ALLERGENIC_ROUTE }/>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title>
                            <span className="text-lg !font-bold">Nutritional Information</span>
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2">
                                <OverviewField displayName="Goal"
                                               name="nutritionalData.goal"
                                               value={ registerForm.nutritionalData.goal.toLowerCase() }
                                               link={ REGISTER_GOAL_ROUTE }/>
                                <OverviewField displayName="Nutrition type"
                                               name="nutritionalData.nutritionTypeId"
                                               value={ registerForm.nutritionalData.nutritionTypeId }
                                               link={ NUTRITION_TYPE_ROUTE }/>
                                <OverviewField displayName="Calculation type"
                                               name="nutritionalData.calculationTypeId"
                                               value={ registerForm.nutritionalData.calculationTypeId }
                                               link={ REGISTER_CALCULATION_TYPE_ROUTE }/>
                                <OverviewField displayName="Activity level" name="nutritionalData.activityLevelId"
                                               value={ registerForm.nutritionalData.activityLevelId } link={ REGISTER_ACTIVITY_LEVEL_ROUTE }/>
                                <OverviewField displayName="PA Level"
                                               name="nutritionalData.physicalActivityLevelActivities"
                                               value={ determinePal(registerForm.nutritionalData.physicalActivityLevelActivities) }
                                               link={ REGISTER_PAL_ROUTE }/>
                                <OverviewField displayName="Calorie restriction"
                                               name="nutritionalData.calorieRestriction"
                                               value={ registerForm.nutritionalData.calorieRestriction }
                                               link={ REGISTER_CALORIE_RESTRICTION_ROUTE }/>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    )
}