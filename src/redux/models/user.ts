import { Gender } from './gender.ts';

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
    selectedWeightUnit: string
    selectedHeightUnit: string
}