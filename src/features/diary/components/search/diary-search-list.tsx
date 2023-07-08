import { DiarySearchListItem } from './diary-search-list-item.tsx';
import { FoodItem } from '../../../../redux/models/food-item.ts';

interface DiarySearchListProps {
    data: FoodItem[]
    filterText: string
}

export const DiarySearchList = ({ data, filterText }: DiarySearchListProps) =>
    data
        .filter(item => item.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        .map(item => <DiarySearchListItem key={ item.id }{ ...item }/>)