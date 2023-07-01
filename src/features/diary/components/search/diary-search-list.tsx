import { DiarySearchListItem } from './diary-search-list-item.tsx';

interface DiarySearchListProps {
    data: DiarySearchListItem[]
    filterText: string
}

export const DiarySearchList = ({ data, filterText }: DiarySearchListProps) =>
    data
        .filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        .map(item => <DiarySearchListItem key={ item.id }{ ...item }/>)