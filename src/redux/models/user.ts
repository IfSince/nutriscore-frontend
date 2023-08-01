import { Unit } from '../../features/unit.ts';

export interface User {
    id: number
    userTypeId: number
    email: string
    password?: string
    confirmPassword?: string
    firstName: string
    lastName: string
    image?: null
    genderId: string
    dateOfBirth: string
    height: number
    selectedWeightUnit: Unit
    selectedHeightUnit: Unit
}