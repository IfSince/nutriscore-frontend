import { Goal } from '../../goal.ts';
import { PhysicalActivityLevelActivities } from '../../nutritional-recordings/models/physical-activity-level-activities.ts';


export interface NutritionalData {
    id: number
    userId: number
    nutritionTypeId: string
    calculationTypeId: string
    activityLevelId: string
    physicalActivityLevelActivities: PhysicalActivityLevelActivities
    goal: Goal
    calorieRestriction: number
}