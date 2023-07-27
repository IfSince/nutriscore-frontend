import { Unit } from '../../unit.ts';
import { TimeOfDay } from '../../recordings/models/type-of-day.enum.ts';

type NutritionalRecordingType = 'FOOD' | 'MEAL'

export interface NutritionalRecording {
    id: number
    recordingId: number
    description: string
    timeOfDay: TimeOfDay
    type: NutritionalRecordingType
    dateOfRecording: string
    amount: number
    calories: number
    unit?: Unit
}

export interface NutritionalRecordingsByDate {
    [date: string]: NutritionalRecording[]
}