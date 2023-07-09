import { ValueTotalPair } from './value-total-pair.ts';

export interface UserMetadata {
    [year: string]: {
        [month: string]: {
            data: {
                [day: string]: {
                    calories: CalorieMealValues
                    protein: ValueTotalPair
                    carbohydrates: ValueTotalPair
                    fats: ValueTotalPair
                    water: ValueTotalPair
                }
            }
            weightRecordings: []
        }
    }
}

export interface UserMetadataDayData {
    calories: ValueTotalPair
    protein: ValueTotalPair
    carbohydrates: ValueTotalPair
    fats: ValueTotalPair
}

interface CalorieMealValues {
    breakfast: ValueTotalPair
    lunch: ValueTotalPair
    dinner: ValueTotalPair
    snacks: ValueTotalPair
}