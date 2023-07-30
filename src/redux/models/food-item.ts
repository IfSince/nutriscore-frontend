import { Unit } from '../../features/unit.ts';
import { Category } from '../../features/categories/models/category.ts';
import { Allergenic } from '../../features/allergenics/models/allergenic.ts';

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