import { MealItem, MealItemProps } from './meal-item.tsx';

export const MealItemTable = ({ items }: { items: MealItemProps[] }) =>
    <div className="flex flex-col gap-3">
        { items.map(item => <MealItem key={ item.name } { ...item }/>) }
    </div>