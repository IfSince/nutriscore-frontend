import { RegisterOutletContext } from '../../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../../features/register/models/register-form.ts';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../register-steps.ts';
import { RegisterHeader } from '../../components/register-header.tsx';
import { InputField } from '../../../../common/form/components/input-field/input-field.tsx';
import { SelectDateField } from '../../../../common/form/components/select-date-field.tsx';
import { EnumDropdownField } from '../../../../common/form/components/dropdown-field/enum-dropdown-field.tsx';
import { SelectableEnum } from '../../../../common/form/components/dropdown-field/selectable-enum.ts';
import { UnitFilter } from '../../../../common/form/components/unit-selector/unit-filter.ts';
import { UnitSelector } from '../../../../common/form/components/unit-selector/unit-selector.tsx';

export const PersonalStepView = () => {
    const [backRef, nextRef, validateCurrentStep]: RegisterOutletContext = useOutletContext()
    const form = useFormikContext<RegisterForm>()

    useEffect(() => {
        const validateUserFields = () => {
            form.setFieldTouched('user.firstName', true, true)
            form.setFieldTouched('user.lastName', true, true)
            form.setFieldTouched('user.dateOfBirth', true, true)
            form.setFieldTouched('user.genderId', true, true)
            form.setFieldTouched('user.height', true, true)
        }

        backRef.current = null
        nextRef.current = REGISTER_STEP.GOAL
        validateCurrentStep.current = validateUserFields
    }, [backRef, form, nextRef, validateCurrentStep])

    return (
        <>
            <RegisterHeader title="Tell us a bit about yourself"/>
            <div className="mt-4 w-full">
                <InputField name="user.firstName"
                            displayName="First name"
                            type="text"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="user.lastName"
                            displayName="Last name"
                            type="text"/>
            </div>

            <div className="mt-4 w-full">
                <SelectDateField name="user.dateOfBirth" displayname="Date of birth"/>
            </div>

            <div className="mt-4 w-full">
                <EnumDropdownField name="user.genderId"
                                   enum={ SelectableEnum.GENDER }
                                   displayName="Gender"
                                   type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="user.height"
                            displayName="Height"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <UnitSelector name="user.selectedHeightUnit" filter={ UnitFilter.HEIGHT_UNITS } displayName="Height Unit"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="weightRecording.weight"
                            displayName="Weight"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <UnitSelector name="user.selectedWeightUnit" filter={ UnitFilter.WEIGHT_UNITS } displayName="Weight Unit"/>
            </div>
        </>
    )
}