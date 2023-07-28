import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { DiarySearchInput } from '../components/search/diary-search-input.tsx';
import { useState } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { useGetNutritionalRecordingSearchEntriesQuery } from '../../search/nutritional-recordings-search/nutritional-recordings-search-api-slice.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';
import { NutritionalRecordingSearchList } from '../../search/nutritional-recordings-search/components/nutritional-recording-search-list.tsx';

export const DiarySearchView = () => {
    const [filterText, setFilterText] = useState('')

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
                                   size="lg"/>
    } else if (isError) {
        content = <ApiErrorMessage apiErrorResponse={ error }/>
    } else if (isSuccess) {
        content = <NutritionalRecordingSearchList searchEntries={ searchEntries } filterText={ filterText }/>
    }

    return (
        <DesktopPanel title="Search">
            <div className="relative">
                <BlurOverlay visible={ isLoading }/>
                <DiarySearchInput filterText={ filterText } onFilterTextChange={ setFilterText }/>

                <div className="mb-4 border-t-2 border-gray-100 mt-3.5 sm:mt-4 sm:mb-5 lg:mt-5 lg:mb-6"></div>

                <div className="flex flex-col gap-y-2 pb-6 sm:pb-10 xl:pb-14">
                    { content }
                </div>
            </div>
        </DesktopPanel>
    )
}

