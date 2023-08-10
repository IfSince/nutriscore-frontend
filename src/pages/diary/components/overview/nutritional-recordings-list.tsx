import { NutritionalRecordingsListItem } from './nutritional-recordings-list-item.tsx';
import { CenteredSpinner } from '../../../../common/spinner/components/centered-spinner.tsx';
import { NutritionalRecording } from '../../../../features/nutritional-recordings/models/nutritional-recordings-by-date.ts';

export const NutritionalRecordingsList = ({ items, isLoading }: { items: NutritionalRecording[], isLoading: boolean }) =>
    <div className="flex flex-col relative gap-0.5 mb-4 lg:bg-gray-50">
        {
            isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                          backgroundClr="text-gray-100"
                                          fill="fill-cyan-300"
                                          size="md"/>
        }

        <div>
            {
                items.length
                    ? <>
                        <div className="bg-white hidden md:grid xs:grid-cols-4 md:grid-cols-7 text-gray-400 font-medium">
                            <span className="col-span-2"></span>
                            <span>Calories</span>
                            <span>Protein</span>
                            <span>Carbs</span>
                            <span>Fats</span>
                        </div>
                        {
                            items.map(item => <NutritionalRecordingsListItem key={ `${ item.id }${ item.type }` } { ...item }/>)
                        }
                    </>
                    : !isLoading && <div className="text-center text-sm md:text-base text-gray-400 bg-white">No entries recorded</div>

            }
        </div>
    </div>