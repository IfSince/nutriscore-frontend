import { MenuItem } from './menu-item.tsx';
import { MenuItemInterface } from '../model/menu-items.ts';

export const Menu = ({ items }: { items: MenuItemInterface[] }) =>
    <nav
        className="fixed bottom-0 left-0 z-[100] md:z-[49] w-full rounded-xl border-t bg-white lg:relative lg:w-auto lg:gap-4 lg:border border-gray-300">
        <ul className="flex justify-around px-6 pt-1 pb-3 lg:relative lg:flex-col lg:justify-start lg:gap-2 lg:pt-4">
            { items.map((item) => <MenuItem key={ item.name } { ...item }/>) }
        </ul>
    </nav>