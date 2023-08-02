import { Unit } from '../../unit.ts';
import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';
import { NutritionalRecordingType } from './nutritional-recording-type.ts';

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