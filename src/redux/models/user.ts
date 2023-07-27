import { Gender } from './gender.ts';
import { Unit } from '../../features/unit.ts';

export interface User {
    id: number
    userTypeId: number
    email: string
    firstName: string
    lastName: string
    image: null
    gender: Gender
    dateOfBirth: string
    height: number
    selectedWeightUnit: Unit
    selectedHeightUnit: Unit
}