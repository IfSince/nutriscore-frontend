import { useGetNutritionalRecordingSearchEntriesQuery } from '../nutritional-recordings-search-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { NutritionalRecordingSearchList } from './nutritional-recording-search-list.tsx';

export const NutritionalRecordingsSearch = ({ filterText }: { filterText: string }) => {
    const {
        data: searchEntries,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetNutritionalRecordingSearchEntriesQuery()

    let content
    if (isLoading) {
        content = <CenteredSpinner className=""
                                   backgroundClr="text-gray-100"
                                   fill="fill-cyan-300"
                                   size="md"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content = <NutritionalRecordingSearchList searchEntries={ searchEntries } filterText={ filterText }/>
    }

    return content
}
