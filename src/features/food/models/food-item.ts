import { FoodCategory } from './food-category.ts';
import { Allergenic } from '../../allergenics/models/allergenic.ts';

export interface IFoodItem {
    id: number
    description: string
    unit: string
    amount: number
    calories: number
    protein: string
    carbohydrates: string
    fats: string
    file?: number
    categories: FoodCategory[]
    allergenics: Allergenic[]
}