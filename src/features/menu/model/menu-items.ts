import { MenuItemProps } from '../components/menu-item.tsx';
import { DIARY_ROUTE, HOME_ROUTE, PROFILE_ROUTE, STATISTICS_ROUTE } from '../../../routes.ts';

export const MENU_ITEMS: MenuItemProps[] = [
    { name: 'home', link: HOME_ROUTE, icon: 'home' },
    { name: 'diary', link: DIARY_ROUTE, icon: 'article' },
    { name: 'statistics', link: STATISTICS_ROUTE, icon: 'bar_chart' },
    { name: 'profile', link: PROFILE_ROUTE, icon: 'person' },
]