import { TimeOfDay } from './type-of-day.enum.ts';

export interface RecordingMetadata {
    dateOfRecording: string
    timeOfDay: TimeOfDay
    calories: number
    protein: number
    carbohydrates: number
    fats: number
}