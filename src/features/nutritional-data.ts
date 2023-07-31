import { PhysicalActivityLevelActivities } from '../redux/models/register/physical-activity-level-activities.ts';
import { Goal } from './goal.ts';

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