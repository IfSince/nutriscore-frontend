import { mixed, number, object } from 'yup';
import { Goal } from '../../../features/goal.ts';

export const NutritionalDataCreationValidationSchema = object().shape({
    nutritionTypeId: number().required(),
    calculationTypeId: number().required(),
    activityLevelId: number().required(),
    physicalActivityLevelActivities: object()
        .optional()
        .shape({
            sleeping: number().required().min(0).max(24),
            onlySitting: number().required().min(0).max(24),
            occasionalActivities: number().required().min(0).max(24),
            mostlySittingOrStanding: number().required().min(0).max(24),
            mostlyWalkingOrStanding: number().required().min(0).max(24),
            physicallyDemanding: number().required().min(0).max(24),
        }),
    goal: mixed<Goal>().required().oneOf(Object.values(Goal)),
    calorieRestriction: number().optional().min(-500).max(500),
})

export const NutritionalDataUpdateValidationSchema = object().shape({
    nutritionTypeId: number().required(),
    calculationTypeId: number().required(),
    activityLevelId: number().required(),
    // physicalActivityLevelActivities: object()
    //     .optional()
    //     .shape({
    //         sleeping: number().required().min(0).max(24),
    //         onlySitting: number().required().min(0).max(24),
    //         occasionalActivities: number().required().min(0).max(24),
    //         mostlySittingOrStanding: number().required().min(0).max(24),
    //         mostlyWalkingOrStanding: number().required().min(0).max(24),
    //         physicallyDemanding: number().required().min(0).max(24),
    //     }),
    goal: mixed<Goal>().required().oneOf(Object.values(Goal)),
    calorieRestriction: number().optional().min(-500).max(500),
})