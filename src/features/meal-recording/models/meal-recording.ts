import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';
import { MealItem } from '../../meal/models/meal-item.ts';

export interface MealRecording {
    id: number
    userId: number
    dateOfRecording: string
    timeOfDay: TimeOfDay
    amount: number
    mealItem: MealItem
}