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
    },
    currentStepIndex: 0,
    steps: [...REGISTER_STEPS],
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        submitStep: (state, action: PayloadAction<RegisterData>) => (
            { ...state, data: action.payload, currentStepIndex: state.currentStepIndex + 1 }
        ),
        goToStep: (state, action: PayloadAction<number>) => (
            { ...state, currentStepIndex: action.payload }
        ),
    },
})

export const { submitStep, goToStep } = registerSlice.actions
export const selectRegister = (state: RootState) => state.register

export default registerSlice.reducer