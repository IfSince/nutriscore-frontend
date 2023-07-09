import { ValueObject } from './value-object.ts';

interface CalorieMealValues {
    breakfast: ValueObject
    lunch: ValueObject
    dinner: ValueObject
    snacks: ValueObject
}

export interface UserMetadata {
    [year: string]: {
        [month: string]: {
            data: {
                [day: string]: {
                    calories: CalorieMealValues
                    protein: ValueObject
                    carbohydrates: ValueObject
                    fats: ValueObject
                    water: ValueObject
                }
            }
            weightRecordings: []
        }
    }
}