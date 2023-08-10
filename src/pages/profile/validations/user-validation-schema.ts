import { date, mixed, number, object, ref, string } from 'yup';
import { Unit } from '../../../features/unit.ts';

export const UserCreationValidationSchema = object().shape({
    userTypeId: number().required(),
    email: string().required().max(255).email(),
    password: string().required().min(8),
    confirmPassword: string().required().oneOf([ref('password')]),
    firstName: string().required().min(2).max(255),
    lastName: string().required().min(2).max(255),
    genderId: number().required(),
    dateOfBirth: date().required().max(new Date()),
    height: number().required().min(0),
    selectedWeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
    selectedHeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
})

export const UserUpdateValidationSchema = object().shape({
    email: string().required().max(255).email(),
    firstName: string().required().min(2).max(255),
    lastName: string().required().min(2).max(255),
    genderId: number().required(),
    dateOfBirth: date().required().max(new Date()),
    height: number().required().min(0),
    // selectedWeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
    // selectedHeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
})