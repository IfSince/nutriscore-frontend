import { Allergenic } from './allergenics.ts';
import { Category } from './category.ts';
import { Unit } from '../../features/unit.ts';

export interface FoodItem {
    id: number
    userId: number
    description: string
    unit: Unit
    amount: number
    calories: number
    protein: number
    carbohydrates: number
    fats: number
    file?: number
    categories: Category[]
    allergenics: Allergenic[]
}