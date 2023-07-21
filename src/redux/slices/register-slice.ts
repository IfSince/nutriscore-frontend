import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { RegisterData } from '../models/register/register-data.ts';
import { GoalEnum } from '../enums/goal.enum.ts';
import {
    REGISTER_ACTIVITY_LEVEL_ROUTE,
    REGISTER_ACTIVITY_PER_WEEK_ROUTE,
    REGISTER_ALLERGENIC_ROUTE,
    REGISTER_CALCULATION_TYPE_ROUTE,
    REGISTER_CALORIE_RESTRICTION_ROUTE,
    REGISTER_DATE_OF_BIRTH_ROUTE,
    REGISTER_GENDER_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_HEIGHT_ROUTE,
    REGISTER_NUTRITION_INTRO_ROUTE,
    REGISTER_OVERVIEW_ROUTE,
    REGISTER_PAL_ROUTE,
    REGISTER_PERSONAL_ROUTE,
    REGISTER_WEIGHT_ROUTE,
} from '../../routes.ts';

export const REGISTER_STEP = {
    GOAL: { sequence: 1, route: REGISTER_GOAL_ROUTE },
    GENDER: { sequence: 2, route: REGISTER_GENDER_ROUTE },
    DATE_OF_BIRTH: { sequence: 3, route: REGISTER_DATE_OF_BIRTH_ROUTE },
    HEIGHT: { sequence: 4, route: REGISTER_HEIGHT_ROUTE },
    WEIGHT: { sequence: 5, route: REGISTER_WEIGHT_ROUTE },
    ALLERGENIC: { sequence: 6, route: REGISTER_ALLERGENIC_ROUTE },
    NUTRITION_INTRO: { sequence: 7, route: REGISTER_NUTRITION_INTRO_ROUTE },
    ACTIVITY_LEVEL: { sequence: 8, route: REGISTER_ACTIVITY_LEVEL_ROUTE },
    ACTIVITY_PER_WEEK: { sequence: 8, route: REGISTER_ACTIVITY_PER_WEEK_ROUTE },
    PAL: { sequence: 8, route: REGISTER_PAL_ROUTE },
    CALCULATION_TYPE: { sequence: 9, route: REGISTER_CALCULATION_TYPE_ROUTE },
    CALORIE_RESTRICTION: { sequence: 10, route: REGISTER_CALORIE_RESTRICTION_ROUTE },
    PERSONAL: { sequence: 11, route: REGISTER_PERSONAL_ROUTE },
    OVERVIEW: { sequence: 12, route: REGISTER_OVERVIEW_ROUTE },
}

interface RegisterState {
    data: RegisterData
}

const initialState: RegisterState = {
    data: {
        goal: GoalEnum.LOOSE,
        genderId: 1,
        dateOfBirth: new Date('2000-01-01').toString(),
        height: 180,
        heightUnit: 'cm',
        weight: 80,
        weightUnit: 'kg',
        allergenicIds: [],
        nutritionTypeId: 1,
        activityLevelId: 1,
        physicalActivityLevelActivities: {
            sleeping: 0,
            onlySitting: 0,
            occasionalActivities: 0,
            mostlySittingOrStanding: 0,
            mostlyWalkingOrStanding: 0,
            physicallyDemanding: 0,
        },
        calculationTypeId: 1,
        calorieRestriction: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        updateStateData: (state, action: PayloadAction<Partial<RegisterData>>) => {
            state.data = { ...state.data, ...action.payload }
        },
        submit: (state) => {
            console.log(state.data)
        },
    },
})

export const { updateStateData, submit } = registerSlice.actions
export const selectRegister = (state: RootState) => state.register

export default registerSlice.reducer