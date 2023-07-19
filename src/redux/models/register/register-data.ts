// export interface RegisterData {
//     user?: NullableUser
//     weightRecording?: WeightRecording
//     nutritionalData?: NutritionalData
//     individualMacroDistribution?: IndividualMacroDistribution
//     allergenicIds: number[]
// }

export interface RegisterData {
    goal: string
    genderId: number
    dateOfBirth: string
    height: number
    heightUnit: string
    weight: number
    weightUnit: string
    allergenicIds: number[]

    nutritionTypeId?: number
    activityLevelId?: number
    activityPerWeekId?: number
    physicalActivityLevel?: number
    calculationTypeId?: number
    calorieRestriction?: number

    firstName?: string
    lastName?: string
    email?: string
    password?: string
    confirmPassword?: string
}