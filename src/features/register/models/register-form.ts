import { User } from '../../../redux/models/user.ts';
import { WeightRecording } from '../../weight-recording/models/weight-recording.ts';
import { NutritionalData } from '../../nutritional-data.ts';
import { IndividualMacroDistribution } from '../../individual-macro-distribution.ts';

export interface RegisterForm {
    user: User
    weightRecording: WeightRecording
    nutritionalData: NutritionalData
    individualMacroDistribution: IndividualMacroDistribution | null
    allergenicIds: number[]
}