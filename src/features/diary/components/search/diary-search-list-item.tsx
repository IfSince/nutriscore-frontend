import { Link } from 'react-router-dom';
import { Item } from '../../../../redux/models/item.ts';
import { DefaultIconButton } from '../../../../common/button/components/icon/default-icon-button.tsx';
import { DIARY_FOOD_ITEM_ROUTE } from '../../../../routes.ts';

export const DiarySearchListItem = ({ id, description, amount, unit }: Item) =>
    <Link to={ DIARY_FOOD_ITEM_ROUTE.replace(':id', id.toString()) }
          className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-gray-100 py-2 pr-3 pl-4 hover:bg-gray-50 md:pl-5 lg:pr-4">
        <div className="flex items-start gap-x-4 tracking-tight sm:flex-col">
            <span className="font-medium text-gray-600 lg:text-lg">{ description }</span>
            <span className="font-medium text-gray-400">{ amount } { unit }</span>
        </div>
        <DefaultIconButton icon="more_horiz" action={ console.log }></DefaultIconButton>
    </Link>