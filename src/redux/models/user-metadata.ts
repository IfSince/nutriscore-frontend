import { ValueObject } from './value-object.ts';

export interface UserMetadata {
    [year: string]: {
        [month: string]: {
            data: {
                [day: string]: {
                    calories: {
                        breakfast: ValueObject
                        lunch: ValueObject
                        dinner: ValueObject
                        snacks: ValueObject
                    }
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