import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { MealSearch } from '../../../features/meal-search/components/meal-search.tsx';
import { Header } from '../../../common/header.tsx';

export const ProfileMealSearchView = () =>
    <>
        <Header title="Meal Search"/>
        <DesktopPanel>
            <MealSearch/>
        </DesktopPanel>
    </>