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

export const router = createBrowserRouter([
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
                        element: <DiaryNewFoodItemView/>
                    }
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