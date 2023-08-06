import { TimeOfDay } from '../../type-of-day.enum.ts';
import { FoodItem } from '../../food/models/food-item.ts';

export interface FoodRecording {
    id: number
    userId: number
    dateOfRecording: string
    timeOfDay: TimeOfDay
    amount: number
    foodItem: FoodItem
}