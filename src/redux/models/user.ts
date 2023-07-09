import { Gender } from './gender.ts';

export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    image: null
    gender: Gender
    dateOfBirth: string
    height: number
    selectedWeightUnit: string
    selectedHeightUnit: string
}