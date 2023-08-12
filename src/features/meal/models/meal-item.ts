import { Category } from '../../categories/models/category.ts';
import { FoodItem } from '../../food/models/food-item.ts';

export interface MealItem {
    id: number
    userId: number
    userName?: string
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