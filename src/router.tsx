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
    REGISTER_ACTIVITY_LEVEL_ROUTE,
    REGISTER_ALLERGENIC_ROUTE,
    REGISTER_CALORIE_RESTRICTION_ROUTE,
    REGISTER_DATE_OF_BIRTH_ROUTE,
    REGISTER_GENDER_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_HEIGHT_ROUTE,
    REGISTER_NUTRITION_INTRO_ROUTE,
    REGISTER_OVERVIEW_ROUTE,
    REGISTER_PERSONAL_ROUTE,
    REGISTER_RMR_ROUTE,
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
import { GoalStepView } from './features/register/views/goal-step.view.tsx';
import { GenderStepView } from './features/register/views/gender-step.view.tsx';
import { DateOfBirthStepView } from './features/register/views/date-of-birth-step.view.tsx';
import { HeightStepView } from './features/register/views/height-step.view.tsx';
import { WeightStepView } from './features/register/views/weight-step.view.tsx';
import { AllergenicStepView } from './features/register/views/allergenic-step.view.tsx';
import { NutritionIntroStepView } from './features/register/views/nutrition-intro-step.view.tsx';
import { ActivityLevelStepView } from './features/register/views/activity-level-step.view.tsx';
import { RegisterLayoutView } from './features/register/views/register-layout.view.tsx';
import { CalculationTypeView } from './features/register/views/calculation-type.view.tsx';
import { CalorieRestrictionView } from './features/register/views/calorie-restriction.view.tsx';
import { PersonalStepView } from './features/register/views/personal-step.view.tsx';
import { RegisterOverviewStepView } from './features/register/views/register-overview-step.view.tsx';

export const router = createBrowserRouter([
    {
        path: REGISTER_ROUTE,
        element: <RegisterLayoutView/>,
        errorElement: <NotFoundView/>,
        children: [
            {
                path: REGISTER_GOAL_ROUTE,
                element: <GoalStepView/>,
            },
            {
                path: REGISTER_GENDER_ROUTE,
                element: <GenderStepView/>,
            },
            {
                path: REGISTER_DATE_OF_BIRTH_ROUTE,
                element: <DateOfBirthStepView/>,
            },
            {
                path: REGISTER_HEIGHT_ROUTE,
                element: <HeightStepView/>,
            },
            {
                path: REGISTER_WEIGHT_ROUTE,
                element: <WeightStepView/>,
            },
            {
                path: REGISTER_ALLERGENIC_ROUTE,
                element: <AllergenicStepView/>,
            },
            {
                path: REGISTER_NUTRITION_INTRO_ROUTE,
                element: <NutritionIntroStepView/>,
            },
            {
                path: REGISTER_ACTIVITY_LEVEL_ROUTE,
                element: <ActivityLevelStepView/>,
            },
            // {
            //     path: REGISTER_ACTIVITY_PER_WEEK_ROUTE,
            //     element: <ActivityPerWeekView/>,
            // },
            // {
            //     path: REGISTER_PAL_ROUTE,
            //     element: <PalView/>,
            // },
            {
                path: REGISTER_RMR_ROUTE,
                element: <CalculationTypeView/>,
            },
            {
                path: REGISTER_CALORIE_RESTRICTION_ROUTE,
                element: <CalorieRestrictionView/>,
            },
            {
                path: REGISTER_PERSONAL_ROUTE,
                element: <PersonalStepView/>,
            },
            {
                path: REGISTER_OVERVIEW_ROUTE,
                element: <RegisterOverviewStepView/>,
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