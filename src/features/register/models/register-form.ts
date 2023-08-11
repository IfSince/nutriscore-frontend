import { WeightRecording } from '../../weight-recording/models/weight-recording.ts';
import { IndividualMacroDistribution } from '../../individual-macro-distribution.ts';
import { NutritionalData } from '../../nutritional-data/models/nutritional-data.ts';
import { User } from '../../user/models/user.ts';

export interface RegisterForm {
    user: User
    weightRecording: WeightRecording
    nutritionalData: NutritionalData
    individualMacroDistribution: IndividualMacroDistribution | null
    allergenics: number[]
}