import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootView } from './views/root.view.tsx';
import { NotFoundView } from './views/error.view.tsx';
import {
    DIARY_FOOD_ITEM_ROUTE,
    DIARY_NEW_FOOD_ITEM_ROUTE,
    DIARY_ROUTE,
    DIARY_SEARCH_ROUTE,
    HOME_ROUTE,
    PROFILE_ROUTE,
    REGISTER_DATE_OF_BIRTH_ROUTE,
    REGISTER_GENDER_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_HEIGHT_ROUTE,
    REGISTER_ROUTE,
    REGISTER_WEIGHT_ROUTE,
    STATISTICS_ROUTE,
} from './routes.ts';
import { StatisticsView } from './views/statistics.view.tsx';
import { ProfileView } from './views/profile.view.tsx';
import { HomeView } from './features/home/views/home.view.tsx';
import { DiaryView } from './features/diary/views/diary.view.tsx';
import { DiaryOverviewView } from './features/diary/views/diary-overview.view.tsx';
import { DiarySearchView } from './features/diary/views/diary-search.view.tsx';
import { DiaryFoodItemView } from './features/diary/views/diary-food-item.view.tsx';
import { DiaryNewFoodItemView } from './features/diary/views/diary-new-food-item.view.tsx';
import { RegisterGoalStepView } from './features/register/views/register-goal-step.view.tsx';
import { RegisterGenderStepView } from './features/register/views/register-gender-step.view.tsx';
import { RegisterDateOfBirthStepView } from './features/register/views/register-date-of-birth-step.view.tsx';
import { RegisterHeightStepView } from './features/register/views/register-height-step.view.tsx';
import { RegisterWeightStepView } from './features/register/views/register-weight-step.view.tsx';
import { RegisterRootView } from './features/register/views/register-root.view.tsx';

export const router = createBrowserRouter([
    {
        path: REGISTER_ROUTE,
        element: <RegisterRootView/>,
        errorElement: <NotFoundView/>,
        children: [
            {
                path: REGISTER_GOAL_ROUTE,
                element: <RegisterGoalStepView/>,
            },
            {
                path: REGISTER_GENDER_ROUTE,
                element: <RegisterGenderStepView/>,
            },
            {
                path: REGISTER_DATE_OF_BIRTH_ROUTE,
                element: <RegisterDateOfBirthStepView/>,
            },
            {
                path: REGISTER_HEIGHT_ROUTE,
                element: <RegisterHeightStepView/>,
            },
            {
                path: REGISTER_WEIGHT_ROUTE,
                element: <RegisterWeightStepView/>,
            },
        ],
    },
    {
        path: '/',
        element: <RootView/>,
        errorElement: <NotFoundView/>,
        children: [
            {
                index: true,
                element: <Navigate to={ HOME_ROUTE } replace/>,
            },
            {
                path: HOME_ROUTE,
                element: <HomeView/>,
            },
            {
                path: DIARY_ROUTE,
                element: <DiaryView/>,
                children: [
                    {
                        index: true,
                        element: <DiaryOverviewView/>,
                    },
                    {
                        path: DIARY_SEARCH_ROUTE,
                        element: <DiarySearchView/>,
                    },
                    {
                        path: DIARY_FOOD_ITEM_ROUTE,
                        element: <DiaryFoodItemView/>,
                    },
                    {
                        path: DIARY_NEW_FOOD_ITEM_ROUTE,
                        element: <DiaryNewFoodItemView/>,
                    },
                ],
            },
            {
                path: STATISTICS_ROUTE,
                element: <StatisticsView/>,
            },
            {
                path: PROFILE_ROUTE,
                element: <ProfileView/>,
            },
        ],
    },
])