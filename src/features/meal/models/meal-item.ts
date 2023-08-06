import { FoodItem } from '../../../redux/models/food-item.ts';
import { Category } from '../../categories/models/category.ts';

export interface MealItem {
    id: number
    userId: number
    description: string
    file?: string
    calories: number
    protein: number
    carbohydrates: number
    fats: number
    categories: Category[]
    foodItems: FoodItem[]
}

export const getAllergenics = (foodItems: FoodItem[]) => foodItems?.flatMap(foodItem => foodItem.allergenics)