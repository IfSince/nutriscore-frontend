import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { RegisterHeader } from '../components/register-header.tsx';
import { REGISTER_STEP } from '../register-steps.ts';
import { InputField } from '../../form/components/input-field/input-field.tsx';
import { FieldError } from '../../form/components/field-error.tsx';

export const PalStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.NUTRITION_TYPE
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Lets determine your physical activity level"/>
            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.sleeping"
                            displayname="Sleeping"
                            type="number"/>
            </div>
            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.onlySitting"
                            displayname="Only sitting"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.occasionalActivities"
                            displayname="Mostly sitting with occasional activities"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.mostlySittingOrStanding"
                            displayname="Mostly sitting or standing"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.mostlyWalkingOrStanding"
                            displayname="Mostly walking or standing"
                            type="number"/>
            </div>

            <div className="mt-4 w-full">
                <InputField name="nutritionalData.physicalActivityLevelActivities.physicallyDemanding"
                            displayname="Physically demanding activities"
                            type="number"/>
            </div>
            <div className="w-full">
                <FieldError name="nutritionalData.physicalActivityLevelActivities"/>
            </div>
        </>
    )
}