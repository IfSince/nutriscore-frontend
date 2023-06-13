import { MenuItem } from './menu-item.tsx';
import { MENU_ITEMS } from './model/menu-items.ts';

export const Menu = () =>
    (
        <nav className="fixed bottom-0 left-0 w-full rounded-md border-t-2 bg-white lg:relative lg:w-auto lg:gap-4 lg:border-2 lg:border-gray-200">
            <ul className="flex justify-around px-6 pt-1 pb-3 lg:relative lg:flex-col lg:justify-start lg:gap-4 lg:pt-4">
                { MENU_ITEMS.map((item) => <MenuItem key={ item.name } { ...item }/>) }
            </ul>
        </nav>
    )