import { IconButton } from '../../../../common/button/components/icon-button.tsx';
import { Link } from 'react-router-dom';

export interface DiarySearchListItem {
    id: number
    name: string
    amount: number
    unit: string
}

export const DiarySearchListItem = ({ id, name, amount, unit }: DiarySearchListItem) =>
    <Link to={ `/diary/food/${ id }` }
          className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-gray-100 py-2 pr-3 pl-4 hover:bg-gray-50 md:pl-5 lg:pr-4">
        <div className="flex items-start gap-x-4 tracking-tight sm:flex-col">
            <span className="font-medium text-gray-600 lg:text-lg">{ name }</span>
            <span className="font-medium text-gray-400">{ amount } { unit }</span>
        </div>
        <IconButton size="small" icon="more_horiz" action={ console.log } iconStyles="text-2xl"></IconButton>
    </Link>