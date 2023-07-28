import { NutritionalRecordingSearchEntry } from '../models/nutritional-recordings-search-entry.ts';
import { NutritionalRecordingSearchListItem } from './nutritional-recording-search-list-item.tsx';

interface NutritionalRecordingSearchListProps {
    searchEntries: NutritionalRecordingSearchEntry[]
    filterText: string
}

export const NutritionalRecordingSearchList = ({ searchEntries, filterText }: NutritionalRecordingSearchListProps) =>
    searchEntries
        .filter(item => item.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        .map(item => <NutritionalRecordingSearchListItem key={ `${ item.id }${ item.type }` }{ ...item }/>)