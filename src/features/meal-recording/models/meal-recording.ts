import { MealItem } from '../../meal/models/meal-item.ts';
import { TimeOfDay } from '../../type-of-day.enum.ts';

export interface MealRecording {
    id: number
    userId: number
    dateOfRecording: string
    timeOfDay: TimeOfDay
    amount: number
    mealItem: MealItem
}