import { RecordingMetadataValueKeys, UserNutritionalMetadata } from './models/user-nutritional-metadata.ts';
import { RecordingMetadata } from '../recordings/models/recording-metadata.ts';
import { Macro } from '../macro.ts';
import { ValueObject } from '../../common/value-object.ts';
import { TimeOfDay } from '../type-of-day.enum.ts';

interface UserNutritionalDataValueObjects {
    calorieData: ValueObject
    macroData: Record<Macro, ValueObject>
    mealData: Record<TimeOfDay, ValueObject>
}

const getSumOfRecordingsByField = (field: RecordingMetadataValueKeys, recordings?: RecordingMetadata[]) =>
    recordings?.reduce((prev, curr) => prev + curr[field], 0) ?? 0

const getCalorieData = (recordings?: RecordingMetadata[], nutritionalMetaData?: UserNutritionalMetadata) => (
    {
        value: getSumOfRecordingsByField('calories', recordings),
        total: nutritionalMetaData?.recommendedCalorieIntake ?? 0,
        unit: 'g',
    }
)

const getMacroData = (recordings?: RecordingMetadata[], nutritionalMetaData?: UserNutritionalMetadata) => (
    {
        [Macro.PROTEIN]: {
            value: getSumOfRecordingsByField('protein', recordings),
            total: nutritionalMetaData?.recommendedProteinIntake ?? 0,
            unit: 'g',
        },
        [Macro.CARBOHYDRATES]: {
            value: getSumOfRecordingsByField('carbohydrates', recordings),
            total: nutritionalMetaData?.recommendedCarbohydratesIntake ?? 0,
            unit: 'g',
        },
        [Macro.FATS]: { value: getSumOfRecordingsByField('fats', recordings), total: nutritionalMetaData?.recommendedFatsIntake ?? 0, unit: 'g' },
        [Macro.WATER]: { value: 0, total: nutritionalMetaData?.recommendedWaterIntake ?? 0, unit: 'l' },
    }
)

const getMealData = (recordings?: RecordingMetadata[], nutritionalMetaData?: UserNutritionalMetadata) => (
    {
        [TimeOfDay.BREAKFAST]: {
            value: getSumOfRecordingsByField('calories', recordings?.filter(recording => recording.timeOfDay === TimeOfDay.BREAKFAST)),
            total: (
                nutritionalMetaData?.recommendedCalorieIntake || 0
            ) * 0.20,
            unit: 'kcal',
        },
        [TimeOfDay.LUNCH]: {
            value: getSumOfRecordingsByField('calories', recordings?.filter(recording => recording.timeOfDay === TimeOfDay.LUNCH)),
            total: (
                nutritionalMetaData?.recommendedCalorieIntake || 0
            ) * 0.40,
            unit: 'kcal',
        },
        [TimeOfDay.DINNER]: {
            value: getSumOfRecordingsByField('calories', recordings?.filter(recording => recording.timeOfDay === TimeOfDay.DINNER)),
            total: (
                nutritionalMetaData?.recommendedCalorieIntake || 0
            ) * 0.35,
            unit: 'kcal',
        },
        [TimeOfDay.SNACKS]: {
            value: getSumOfRecordingsByField('calories', recordings?.filter(recording => recording.timeOfDay === TimeOfDay.SNACKS)),
            total: (
                nutritionalMetaData?.recommendedCalorieIntake || 0
            ) * 0.05,
            unit: 'kcal',
        },
    }
)

export const getNutritionalMetadataValueObjects = (
    recordings?: RecordingMetadata[],
    nutritionalMetaData?: UserNutritionalMetadata,
): UserNutritionalDataValueObjects => (
    {
        calorieData: getCalorieData(recordings, nutritionalMetaData),
        macroData: getMacroData(recordings, nutritionalMetaData),
        mealData: getMealData(recordings, nutritionalMetaData),
    }
)