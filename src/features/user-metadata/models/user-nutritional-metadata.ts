import { WeightRecording } from '../../weight-recording/models/weight-recording.ts';
import { RecordingMetadata } from '../../recordings/models/recording-metadata.ts';

export type RecordingMetadataValueKeys = 'calories' | 'protein' | 'carbohydrates' | 'fats'

export interface UserNutritionalMetadata {
    recordings: {
        [date: string]: RecordingMetadata[]
    }
    recommendedCalorieIntake: number
    recommendedProteinIntake: number
    recommendedCarbohydratesIntake: number
    recommendedFatsIntake: number
    recommendedWaterIntake: number
    weightRecordings: WeightRecording[]
}