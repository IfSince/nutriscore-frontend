import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';

export interface FoodRecording {
    id: number
    userId: number
    foodId: number
    dateOfRecording: string
    timeOfDay: TimeOfDay
    amount: number
}