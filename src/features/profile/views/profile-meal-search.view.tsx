import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { MealSearch } from '../../meal-search/components/meal-search.tsx';

export const ProfileMealSearchView = () =>
    <DesktopPanel>
        <h3 className="mb-8 text-2xl font-medium text-gray-600">Meals</h3>
        <MealSearch/>
    </DesktopPanel>