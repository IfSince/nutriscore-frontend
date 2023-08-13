import { NutritionalRecordingSearchEntry } from '../models/nutritional-recordings-search-entry.ts';
import { NutritionalRecordingSearchListItem } from './nutritional-recording-search-list-item.tsx';
import { CustomLink } from '../../../common/link/CustomLink.tsx';
import { DIARY_NEW_FOOD_ITEM_ROUTE } from '../../../routes.ts';

interface NutritionalRecordingSearchListProps {
    searchEntries: NutritionalRecordingSearchEntry[]
    filterText: string
}

export const NutritionalRecordingSearchList = ({ searchEntries, filterText }: NutritionalRecordingSearchListProps) => {
    const filteredEntries = searchEntries
        .filter(item => item.description.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
    return <ul className="flex flex-col gap-2">
        {
            filteredEntries.length
                ? filteredEntries.map(item => <NutritionalRecordingSearchListItem key={ `${ item.id }${ item.type }` }{ ...item }/>)
                : <span className="mt-4 md:mt-10 w-full text-center text-sm font-medium">
                        Not found what you're looking for? Create a new food item
                        <CustomLink to={ DIARY_NEW_FOOD_ITEM_ROUTE } text="here."></CustomLink>
                  </span>
        }
    </ul>;
}