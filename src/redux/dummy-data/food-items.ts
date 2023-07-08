import { generateUuid } from '../../utils/generate-uuid.ts';
import { FoodItem } from '../models/food-item.ts';

export const dummyFoodItems: FoodItem[] = [
    {
        id: generateUuid(),
        description: 'Espresso coffee',
        unit: 'ml',
        amount: 100,
        calories: 149,
        protein: '23.50',
        carbohydrates: '6.00',
        fats: '4.10',
        categories: [
            {
                id: 3,
                description: 'Drink',
            },
            {
                id: 4,
                description: 'Caffeinated',
            },
        ],
        allergenics: [
            {
                id: 1,
                description: 'Milk',
            },
            {
                id: 6,
                description: 'Soy',
            },
        ],
    },
    {
        id: generateUuid(),
        description: 'Apple',
        unit: 'g',
        amount: 40,
        calories: 35,
        protein: '4g',
        carbohydrates: '21g',
        fats: '10g',
        categories: [
            {
                id: 1,
                description: 'Vegan',
            },
            {
                id: 2,
                description: 'Vegetarian',
            },
            {
                id: 6,
                description: 'Fruit',
            },
        ],
        allergenics: [],
    },
]