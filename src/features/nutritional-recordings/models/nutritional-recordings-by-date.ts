import { Unit } from '../../unit.ts';
import { NutritionalRecordingType } from './nutritional-recording-type.ts';
import { TimeOfDay } from '../../type-of-day.enum.ts';

export interface NutritionalRecording {
    id: number
    itemId: number
    description: string
    timeOfDay: TimeOfDay
    type: NutritionalRecordingType
    dateOfRecording: string
    amount: number
    calories: number
    protein: number
    carbohydrates: number
    fats: number
    unit?: Unit
}

export interface NutritionalRecordingsByDate {
    [date: string]: NutritionalRecording[]
}