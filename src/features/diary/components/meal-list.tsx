import { MealListItem, MealListItemProps } from './meal-list-item.tsx';

export const MealList = ({ items }: { items: MealListItemProps[] }) =>
    <div className="-mr-2 flex flex-col lg:-mr-4">
        {
            items.length > 0 ?
                items.map(item => <MealListItem key={ item.name } { ...item }/>) :
                <span className="text-center tracking-normal text-gray-400">No food or meal entries recorded</span>
        }
    </div>