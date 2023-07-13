import { Allergenic } from './allergenics.ts';
import { Category } from './category.ts';
import { Item } from './item.ts';

export interface FoodItem extends Item {
    id: string
    userId: string
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