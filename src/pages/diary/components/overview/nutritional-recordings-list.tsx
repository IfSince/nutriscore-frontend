import { NutritionalRecordingsListItem } from './nutritional-recordings-list-item.tsx';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import {
    NutritionalRecording
} from '../../../../features/nutritional-recordings/models/nutritional-recordings-by-date.ts';

export const NutritionalRecordingsList = ({ items, isLoading }: { items: NutritionalRecording[], isLoading: boolean }) =>
    <div className="-mr-2 flex flex-col lg:-mr-4 relative mb-6">
        {
            isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                          backgroundClr="text-gray-100"
                                          fill="fill-cyan-300"
                                          size="md"/>
        }
        {
            items.length > 0 ?
                items.map(item => <NutritionalRecordingsListItem key={ `${ item.id }${ item.type }` } { ...item }/>) :
                !isLoading && <span className="text-center tracking-normal text-gray-400">No food or meal entries recorded</span>
        }
    </div>