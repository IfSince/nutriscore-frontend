import { NutritionalRecordingsListItem } from './nutritional-recordings-list-item.tsx';
import { NutritionalRecording } from '../../../nutritional-recordings/models/nutritional-recordings-by-date.ts';

export const NutritionalRecordingsList = ({ items, isLoading }: { items: NutritionalRecording[], isLoading: boolean }) =>
    <div className="-mr-2 flex flex-col lg:-mr-4">
        {
            items.length > 0 ?
                items.map(item => <NutritionalRecordingsListItem key={ `${ item.id }${ item.type }` } { ...item }/>) :
                !isLoading && <span className="text-center tracking-normal text-gray-400">No food or meal entries recorded</span>
        }
    </div>