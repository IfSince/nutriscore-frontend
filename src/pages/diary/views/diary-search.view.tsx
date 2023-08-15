import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { DiarySearchInput } from '../components/search/diary-search-input.tsx';
import { useState } from 'react';
import { Header } from '../../../common/header.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { useNavigate } from 'react-router-dom';
import { NutritionalRecordingsSearch } from '../../../features/nutritional-recordings-search/components/nutritional-recordings-search.tsx';

export const DiarySearchView = () => {
    const navigate = useNavigate()
    const [filterText, setFilterText] = useState('')

    return (
        <>
            <Header title="Search Item"
                    backButton={ <PrimaryIconButton className="lg:hidden mb-10 z-9999"
                                                    icon={ 'arrow_back' }
                                                    action={ () => navigate(-1) }/> }/>
            <DesktopPanel>
                <div className="relative">
                    <DiarySearchInput filterText={ filterText } onFilterTextChange={ setFilterText }/>

                    <div className="mb-4 border-t-2 border-gray-100 mt-3.5 sm:mt-4 sm:mb-5 lg:mt-5 lg:mb-6"></div>

                    <div className="flex flex-col gap-y-2 pb-6 sm:pb-10 xl:pb-14">
                        <NutritionalRecordingsSearch filterText={ filterText }/>
                    </div>
                </div>
            </DesktopPanel>
        </>
    )
}

