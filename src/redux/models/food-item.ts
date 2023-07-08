import { Allergenic } from './allergenics.ts';
import { Category } from './category.ts';

export interface FoodItem {
    id: string
    description: string
    unit: string
    amount: number
    calories: number
    protein: string
    carbohydrates: string
    fats: string
    file?: number
    categories: Category[]
    allergenics: Allergenic[]
}