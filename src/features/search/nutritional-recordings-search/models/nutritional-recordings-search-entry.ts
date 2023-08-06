import { NutritionalRecordingType } from '../../../nutritional-recordings/models/nutritional-recording-type.ts';
import { Unit } from '../../../unit.ts';

export interface NutritionalRecordingSearchEntry {
    id: number
    type: NutritionalRecordingType
    description: string
    amount?: number
    unit: Unit
    calories: number
    protein: number
    carbohydrates: number
    fats: number
}