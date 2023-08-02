import { MenuItem, MenuItemProps } from './menu-item.tsx';

export const Menu = ({ items }: { items: MenuItemProps[] }) =>
    (
        <nav
            className="fixed bottom-0 left-0 z-[100] w-full rounded-xl border-t-2 bg-white lg:relative lg:w-auto lg:gap-4 lg:border-2 lg:border-gray-200">
            <ul className="flex justify-around px-6 pt-1 pb-3 lg:relative lg:flex-col lg:justify-start lg:gap-4 lg:pt-4">
                { items.map((item) => <MenuItem key={ item.name } { ...item }/>) }
            </ul>
        </nav>
    )