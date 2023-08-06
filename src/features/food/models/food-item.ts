import { Unit } from '../../unit.ts';
import { Category } from '../../categories/models/category.ts';
import { Allergenic } from '../../allergenics/models/allergenic.ts';

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
    selectedAmount?: number
}