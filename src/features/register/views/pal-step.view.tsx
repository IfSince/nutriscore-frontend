import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../../../redux/slices/register-slice.ts';
import { RegisterHeader } from '../components/register-header.tsx';
import { InputField } from '../../form/components/input-field.tsx';
import { PhysicalActivityLevelActivities } from '../../../redux/models/register/physical-activity-level-activities.ts';
import { Validations } from '../../form/subfeatures/validation/models/validations.ts';

export const PalStepView = () => {
    const [registerState, updateState, backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ACTIVITY_LEVEL
        nextRef.current = REGISTER_STEP.CALCULATION_TYPE
    }, [backRef, nextRef])

    const updatePalInState = (partial: Partial<PhysicalActivityLevelActivities>) => {
        updateState({ physicalActivityLevelActivities: { ...registerState.physicalActivityLevelActivities, ...partial } })
    }

    return (
        <>
            <RegisterHeader title="Lets determine your physical activity level"/>
            <InputField name="sleeping"
                        displayName="Sleeping"
                        value={ registerState.physicalActivityLevelActivities.sleeping }
                        onChange={ (sleeping) => updatePalInState({ sleeping }) }
                        validations={ [Validations.notGreaterThan(24)] }/>

            <InputField name="onlySitting"
                        displayName="Only sitting"
                        value={ registerState.physicalActivityLevelActivities.onlySitting }
                        onChange={ (onlySitting) => updatePalInState({ onlySitting }) }
                        validations={ [Validations.notGreaterThan(24)] }/>

            <InputField name="mostlySittingWithOccasionalActivities"
                        displayName="Mostly sitting with occasional activities"
                        value={ registerState.physicalActivityLevelActivities.occasionalActivities }
                        onChange={ (occasionalActivities) => updatePalInState({ occasionalActivities }) }
                        validations={ [Validations.notGreaterThan(24)] }/>

            <InputField name="mostlySittingAndStanding"
                        displayName="Mostly sitting or standing"
                        value={ registerState.physicalActivityLevelActivities.mostlySittingOrStanding }
                        onChange={ (mostlySittingOrStanding) => updatePalInState({ mostlySittingOrStanding }) }
                        validations={ [Validations.notGreaterThan(24)] }/>

            <InputField name="mostlyWalkingOrStanding"
                        displayName="Mostly walking or standing"
                        value={ registerState.physicalActivityLevelActivities.mostlyWalkingOrStanding }
                        onChange={ (mostlyWalkingOrStanding) => updatePalInState({ mostlyWalkingOrStanding }) }
                        validations={ [Validations.notGreaterThan(24)] }/>

            <InputField name="physicallyDemandingActivities"
                        displayName="Physically demanding activities"
                        value={ registerState.physicalActivityLevelActivities.physicallyDemanding }
                        onChange={ (physicallyDemanding) => updatePalInState({ physicallyDemanding }) }
                        validations={ [Validations.notGreaterThan(24)] }/>
        </>
    )
}