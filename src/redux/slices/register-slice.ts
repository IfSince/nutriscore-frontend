import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { RegisterData } from '../models/register/register-data.ts';
import { QuestStep } from '../models/quest-step.ts';
import { GoalEnum } from '../enums/goal.enum.ts';

const REGISTER_STEPS: QuestStep[] = [
    { index: 0, route: 'goal' },
    { index: 1, route: 'gender' },
    { index: 2, route: 'date-of-birth' },
    { index: 3, route: 'height' },
    { index: 4, route: 'weight' },
    { index: 5, route: 'allergenic' },
    { index: 6, route: 'nutrition' },
    { index: 7, route: 'activity-level' },
    // { index: 8, route: 'activity-per-week' },
    // { index: 8, route: 'pal' },
    { index: 8, route: 'rmr' },
    { index: 9, route: 'calorie-restriction' },
    { index: 9, route: 'personal' },
    { index: 10, route: 'overview' },
]

interface RegisterState {
    data: RegisterData
    currentStepIndex: number
    steps: QuestStep[]
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
        activityLevelId: 4,
        calculationTypeId: 1,
    },
    currentStepIndex: 0,
    steps: [...REGISTER_STEPS],
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        submitStepData: (state, action: PayloadAction<RegisterData>) => (
            { ...state, data: action.payload, currentStepIndex: state.currentStepIndex + 1 }
        ),
        routeToStep: (state, action: PayloadAction<number>) => (
            { ...state, currentStepIndex: action.payload }
        ),
        submit: (state) => {
            console.log(state.data)
        },
    },
})

export const { submitStepData, routeToStep, submit } = registerSlice.actions
export const selectRegister = (state: RootState) => state.register

export default registerSlice.reducer