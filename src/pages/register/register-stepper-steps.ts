import {
    NUTRITION_TYPE_ROUTE,
    REGISTER_ACCOUNT_ROUTE,
    REGISTER_ACTIVITY_LEVEL_ROUTE,
    REGISTER_ACTIVITY_PER_WEEK_ROUTE,
    REGISTER_ALLERGENIC_ROUTE,
    REGISTER_CALCULATION_TYPE_ROUTE, REGISTER_CALORIE_RESTRICTION_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_NUTRITION_INTRO_ROUTE,
    REGISTER_PAL_ROUTE,
    REGISTER_PERSONAL_ROUTE,
} from '../../routes.ts';
import { StepperEntry } from './models/stepper-entry.ts';

export const RegisterStepperSteps: StepperEntry[] = [
    {
        route: REGISTER_PERSONAL_ROUTE,
        fieldNames: [
            'user.firstName',
            'user.lastName',
            'user.dateOfBirth',
            'user.genderId',
            'user.height',
            'user.selectedHeightUnit',
            'user.weight',
            'user.selectedWeightUnit',
        ],
    },
    {
        route: REGISTER_GOAL_ROUTE,
        fieldNames: ['nutritionalData.goal'],
    },
    {
        route: REGISTER_NUTRITION_INTRO_ROUTE,
        includeRoutes: [
            REGISTER_NUTRITION_INTRO_ROUTE,
            REGISTER_ACTIVITY_LEVEL_ROUTE,
            REGISTER_ACTIVITY_PER_WEEK_ROUTE,
            REGISTER_PAL_ROUTE,
            NUTRITION_TYPE_ROUTE,
            REGISTER_CALCULATION_TYPE_ROUTE,
            REGISTER_CALORIE_RESTRICTION_ROUTE,
        ],
        fieldNames: [
            'nutritionalData.activityLevelId',
            'nutritionalData.calculationTypeId',
            'nutritionalData.calorieRestriction',
            'nutritionalData.goal',
            'physicalActivityLevelActivities',
            'individualMacroDistribution',
            'nutritionalData.calorieRestriction',
        ],
    },
    {
        route: REGISTER_ALLERGENIC_ROUTE,
        fieldNames: ['allergenics'],
    },
    {
        route: REGISTER_ACCOUNT_ROUTE,
        fieldNames: ['user.email', 'user.password', 'user.confirmPassword'],
        isSubmit: true,
    },
]