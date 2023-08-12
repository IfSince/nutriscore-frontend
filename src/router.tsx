import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
    DIARY_ADD_FOOD_ITEM_ROUTE,
    DIARY_ADD_MEAL_ITEM_ROUTE,
    DIARY_FOOD_ITEM_ROUTE,
    DIARY_FOOD_PREFIX_ROUTE,
    DIARY_MEAL_ITEM_ROUTE,
    DIARY_MEAL_PREFIX_ROUTE,
    DIARY_NEW_FOOD_ITEM_ROUTE,
    DIARY_ROUTE,
    DIARY_SEARCH_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    NUTRITION_TYPE_ROUTE,
    PROFILE_ALLERGENICS_ROUTE,
    PROFILE_MEAL_DETAIL_ROUTE,
    PROFILE_MEAL_PREFIX_ROUTE,
    PROFILE_MEAL_SEARCH_ROUTE,
    PROFILE_NEW_MEAL_DETAIL_ROUTE,
    PROFILE_NUTRITIONAL_DATA_ROUTE,
    PROFILE_PERSONAL_DATA_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ACCOUNT_ROUTE,
    REGISTER_ACTIVITY_LEVEL_ROUTE,
    REGISTER_ACTIVITY_PER_WEEK_ROUTE,
    REGISTER_ALLERGENIC_ROUTE,
    REGISTER_CALCULATION_TYPE_ROUTE,
    REGISTER_CALORIE_RESTRICTION_ROUTE,
    REGISTER_GOAL_ROUTE,
    REGISTER_NUTRITION_INTRO_ROUTE,
    REGISTER_PAL_ROUTE,
    REGISTER_PERSONAL_ROUTE,
    REGISTER_ROUTE,
    STATISTICS_ROUTE,
} from './routes.ts';
import { NotLoggedInRoute } from './common/not-logged-in-route.tsx';
import { ProtectedRoute } from './common/protected-route.tsx';
import { HomeView } from './pages/home/views/home.view';
import { DiaryOverviewView } from './pages/diary/views/diary-overview.view.tsx';
import { DiarySearchView } from './pages/diary/views/diary-search.view.tsx';
import { DiaryFoodItemView } from './pages/diary/views/diary-food-item.view.tsx';
import { DiaryAddFoodItemView } from './pages/diary/views/diary-add-food-item.view.tsx';
import { DiaryNewFoodItemView } from './pages/diary/views/diary-new-food-item.view.tsx';
import { DiaryMealItemView } from './pages/diary/views/meal-item/diary-meal-item.view.tsx';
import { DiaryAddMealItemView } from './pages/diary/views/meal-item/diary-add-meal-item.view.tsx';
import { LoginView } from './pages/login/login.view.tsx';
import { RegisterLayoutView } from './pages/register/views/register-layout.view.tsx';
import { NotFoundView } from './pages/error.view.tsx';
import { RootView } from './pages/root.view.tsx';
import { StatisticsView } from './pages/statistics/views/statistics.view.tsx';
import { ProfileView } from './pages/profile/views/profile.view.tsx';
import { ProfileOverviewView } from './pages/profile/views/profile-overview.view.tsx';
import { ProfilePersonalDataView } from './pages/profile/views/profile-personal-data.view.tsx';
import { ProfileNutritionalDataView } from './pages/profile/views/profile-nutritional-data.view.tsx';
import { ProfileAllergenicsView } from './pages/profile/views/profile-allergenics.view.tsx';
import { ProfileMealSearchView } from './pages/profile/views/profile-meal-search.view.tsx';
import { ProfileMealItemView } from './pages/profile/views/profile-meal-item.view.tsx';
import { GoalStepView } from './pages/register/views/steps/goal-step.view.tsx';
import { AccountStepView } from './pages/register/views/steps/account-step.view.tsx';
import { PersonalStepView } from './pages/register/views/steps/personal-step.view.tsx';
import { NutritionIntroStepView } from './pages/register/views/steps/nutrition-intro-step.view.tsx';
import { ActivityLevelStepView } from './pages/register/views/steps/activity-level-step.view.tsx';
import { ActivityPerWeekStepView } from './pages/register/views/steps/activity-per-week-step.view.tsx';
import { PalStepView } from './pages/register/views/steps/pal-step.view.tsx';
import { NutritionTypeStepView } from './pages/register/views/steps/nutrition-type-step.view.tsx';
import { CalculationTypeStepView } from './pages/register/views/steps/calculation-type-step.view.tsx';
import { CalorieRestrictionStepView } from './pages/register/views/steps/calorie-restriction-step.view.tsx';
import { AllergenicStepView } from './pages/register/views/steps/allergenic-step.view.tsx';
import { ProfileNewMealItemView } from './pages/profile/views/profile-new-meal-item.view.tsx';

export const router = createBrowserRouter([
    {
        path: LOGIN_ROUTE,
        element: <NotLoggedInRoute><LoginView/></NotLoggedInRoute>,
        children: [
            {
                index: true,
                element: <LoginView/>,
            },
        ],
    },
    {
        path: REGISTER_ROUTE,
        element: <NotLoggedInRoute><RegisterLayoutView/></NotLoggedInRoute>,
        errorElement: <NotFoundView/>,
        children: [
            {
                index: true,
                element: <Navigate to={ REGISTER_PERSONAL_ROUTE } replace/>,
            },
            {
                path: REGISTER_PERSONAL_ROUTE,
                element: <PersonalStepView/>,
            },
            {
                path: REGISTER_GOAL_ROUTE,
                element: <GoalStepView/>,
            },
            {
                path: REGISTER_NUTRITION_INTRO_ROUTE,
                element: <NutritionIntroStepView/>,
            },
            {
                path: REGISTER_ACTIVITY_LEVEL_ROUTE,
                element: <ActivityLevelStepView/>,
            },
            {
                path: REGISTER_ACTIVITY_PER_WEEK_ROUTE,
                element: <ActivityPerWeekStepView/>,
            },
            {
                path: REGISTER_PAL_ROUTE,
                element: <PalStepView/>,
            },
            {
                path: NUTRITION_TYPE_ROUTE,
                element: <NutritionTypeStepView/>,
            },
            {
                path: REGISTER_CALCULATION_TYPE_ROUTE,
                element: <CalculationTypeStepView/>,
            },
            {
                path: REGISTER_CALORIE_RESTRICTION_ROUTE,
                element: <CalorieRestrictionStepView/>,
            },
            {
                path: REGISTER_ACCOUNT_ROUTE,
                element: <AccountStepView/>,
            },
            {
                path: REGISTER_ALLERGENIC_ROUTE,
                element: <AllergenicStepView/>,
            },
        ],
    },
    {
        path: '/',
        element: <ProtectedRoute><RootView/></ProtectedRoute>,
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
                        path: DIARY_FOOD_PREFIX_ROUTE,
                        children: [
                            {
                                path: DIARY_FOOD_ITEM_ROUTE,
                                element: <DiaryFoodItemView/>,
                            },
                            {
                                path: DIARY_ADD_FOOD_ITEM_ROUTE,
                                element: <DiaryAddFoodItemView/>,
                            },
                            {
                                path: DIARY_NEW_FOOD_ITEM_ROUTE,
                                element: <DiaryNewFoodItemView/>,
                            },
                        ],
                    },
                    {
                        path: DIARY_MEAL_PREFIX_ROUTE,
                        children: [
                            {
                                path: DIARY_MEAL_ITEM_ROUTE,
                                element: <DiaryMealItemView/>,
                            },
                            {
                                path: DIARY_ADD_MEAL_ITEM_ROUTE,
                                element: <DiaryAddMealItemView/>,
                            },
                        ],
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
                children: [
                    {
                        index: true,
                        element: <ProfileOverviewView/>,
                    },
                    {
                        path: PROFILE_PERSONAL_DATA_ROUTE,
                        element: <ProfilePersonalDataView/>,
                    },
                    {
                        path: PROFILE_NUTRITIONAL_DATA_ROUTE,
                        element: <ProfileNutritionalDataView/>,
                    },
                    {
                        path: PROFILE_ALLERGENICS_ROUTE,
                        element: <ProfileAllergenicsView/>,
                    },
                    {
                        path: PROFILE_MEAL_PREFIX_ROUTE,
                        children: [
                            {
                                index: true,
                                element: <Navigate to={ PROFILE_MEAL_SEARCH_ROUTE } replace/>,
                            },
                            {
                                path: PROFILE_MEAL_SEARCH_ROUTE,
                                element: <ProfileMealSearchView/>,
                            },
                            {
                                path: PROFILE_MEAL_DETAIL_ROUTE,
                                element: <ProfileMealItemView/>,
                            },
                            {
                                path: PROFILE_NEW_MEAL_DETAIL_ROUTE,
                                element: <ProfileNewMealItemView/>,
                            },
                        ],
                    },
                ],
            },
        ],
    },
])