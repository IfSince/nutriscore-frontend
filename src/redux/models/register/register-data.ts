// export interface RegisterData {
//     user?: NullableUser
//     weightRecording?: WeightRecording
//     nutritionalData?: NutritionalData
//     individualMacroDistribution?: IndividualMacroDistribution
//     allergenicIds: number[]
// }

import { PhysicalActivityLevelActivities } from './physical-activity-level-activities.ts';

export interface RegisterData {
    goal: string
    genderId: number
    dateOfBirth: string
    height: number
    heightUnit: string
    weight: number
    weightUnit: string
    allergenicIds: number[]

    nutritionTypeId: number
    activityLevelId: number
    activityPerWeekId?: number

    physicalActivityLevelActivities: PhysicalActivityLevelActivities
    calculationTypeId: number
    calorieRestriction: number

    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}